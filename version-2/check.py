"""Run with python3 version-2/check.py, from any directory."""
import json
from html.parser import HTMLParser
from pathlib import Path

root = Path(__file__).resolve().parent.parent
content = json.loads((root / 'content/content.json').read_text())['items']
urls = {piece['url'] for piece in content}
assert len(urls) == 22
assert all(not piece['placeholder'] for piece in content)

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.links, self.assets, self.articles = set(), [], [], []
    def handle_starttag(self, tag, attributes):
        attributes = dict(attributes)
        if 'id' in attributes:
            assert attributes['id'] not in self.ids, attributes['id']
            self.ids.add(attributes['id'])
        if tag == 'a':
            self.links.append(attributes.get('href', ''))
        if tag == 'img':
            assert all(attributes.get(key) for key in ['alt', 'width', 'height', 'src'])
            self.assets.append(attributes['src'])
        if tag in ['script', 'link']:
            self.assets.append(attributes.get('src', attributes.get('href', '')))

page = Page()
page.feed((root / 'version-2/index.html').read_text())
for target in page.links:
    if target.startswith('#'):
        assert target[1:] in page.ids, target
    elif '/2026/' in target:
        assert target in urls, target
for asset in page.assets:
    assert not asset.startswith('http'), asset
    assert (root / 'version-2' / asset).exists(), asset
print('Pass: 22 real pieces, article destinations, page anchors, image metadata and local assets.')
