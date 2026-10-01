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
parser = Links()
parser.feed((root / 'version-2/index.html').read_text())
source = json.loads((root / 'design/navigation-source.json').read_text())
missing = [item['label'] for item in source if item['url'] not in parser.urls]
assert not missing, f'Missing original navigation destinations: {missing}'
assert not [url for url in parser.urls if url and url.startswith('#')], 'Header must not contain homepage jump links'
assert 'https://www.yankeeinstitute.org/news/' in parser.urls
assert 'https://www.yankeeinstitute.org/about/' in parser.urls
html = (root / 'version-2/index.html').read_text()
assert 'action="https://www.yankeeinstitute.org/" method="get"' in html
assert 'name="s"' in html
assert 'aria-controls="policy-mega">Issues <svg' in html
print(f'Pass: all {len(source)} original destinations retained, no local header jumps, full-site search form.')
