from pathlib import Path
import json
from html.parser import HTMLParser

class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_header = False
        self.urls = set()
    def handle_starttag(self, tag, attrs):
        if tag == 'header':
            self.in_header = True
        if tag == 'a' and self.in_header:
            self.urls.add(dict(attrs).get('href'))
    def handle_endtag(self, tag):
        if tag == 'header':
            self.in_header = False

root = Path(__file__).resolve().parent.parent
source = json.loads((root / 'design/navigation-source.json').read_text())
for version in ['version-1', 'version-2', 'version-3', 'version-4', 'version-5']:
    parser = Links()
    html = (root / version / 'index.html').read_text()
    parser.feed(html)
    missing = [item['label'] for item in source if item['url'] not in parser.urls]
    assert not missing, f'{version}: missing original destinations: {missing}'
    assert not [url for url in parser.urls if url and url.startswith('#')], 'Header must not contain homepage jumps'
    assert 'https://www.yankeeinstitute.org/news/' in parser.urls
    assert 'https://www.yankeeinstitute.org/about/' in parser.urls
    assert 'action="https://www.yankeeinstitute.org/" method="get"' in html
    assert 'name="s"' in html
    assert 'aria-controls="policy-mega">Issues <svg' in html
for contained, original in [('version-4', 'version-1'), ('version-5', 'version-3')]:
    variant = (root / contained / 'index.html').read_text()
    source_page = (root / original / 'index.html').read_text()
    assert variant.split('<main', 1)[1].split('</main>', 1)[0] == source_page.split('<main', 1)[1].split('</main>', 1)[0], f'{contained}: source content changed'
    assert f'src="../{original}/script.js"' in variant
    assert f'href="../{original}/styles.css"' in variant
print(f'Pass: all five active concepts retain all {len(source)} destinations and full-site search.')
