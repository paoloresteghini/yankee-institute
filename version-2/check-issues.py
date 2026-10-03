"""Check shared Labor content and retained source destinations in both previews."""
import json
from html import escape
from html.parser import HTMLParser
from pathlib import Path

root = Path(__file__).resolve().parent.parent
content = json.loads((root / 'content/labor.json').read_text())

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.images, self.headings = [], [], 0
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs: self.ids.append(attrs['id'])
        if tag == 'img': self.images.append(attrs)
        if tag == 'h1': self.headings += 1

for route in ('labor', 'labor-alternative'):
    path = root / 'version-2' / route / 'index.html'
    source = path.read_text()
    page = Page()
    page.feed(source)
    assert page.headings == 1 and len(page.ids) == len(set(page.ids)), route
    assert '\u2014' not in source, route
    for key in ('intro', 'position', 'context', 'draft_note'):
        assert escape(content[key]) in source, (route, key)
    for item in content['research'] + content['stories']:
        assert escape(item['title']) in source and escape(item['url'], quote=True) in source, (route, item['title'])
    for image in page.images:
        assert (path.parent / image['src']).exists(), image['src']
        assert all(key in image for key in ('alt', 'width', 'height')), image['src']
    assert content['program']['url'] in source
    assert 'name="EMAIL"' in source and 'id="policy-mega"' in source
print('Pass: both Labor pages retain identical source content, destinations, images and unique IDs.')
