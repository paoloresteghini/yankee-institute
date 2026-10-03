"""Run from the project root: python3 version-2/check-public-resources.py."""
import json
from pathlib import Path
from html.parser import HTMLParser
root=Path(__file__).resolve().parent.parent
class Page(HTMLParser):
    def __init__(self):
        super().__init__();self.ids=[];self.links=[];self.images=[];self.controls=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.append(a['id'])
        if tag=='a':self.links.append(a.get('href',''))
        if tag=='img':self.images.append(a)
        if 'data-resource' in a:self.controls.append(a)
resources=json.loads((root/'content/public-resources.json').read_text())['resources']
for variant in ['public-resources','public-resources-alternative']:
    folder=root/'version-2'/variant;html=(folder/'index.html').read_text();page=Page();page.feed(html)
    assert len(page.ids)==len(set(page.ids)),variant+' duplicate IDs'
    for r in resources:
        assert r['title'] in html and r['summary'] in html and r['detail'] in html,r['id']+' content mismatch'
        assert r['url'] in page.links,r['id']+' missing destination'
    assert 'https://transparency.ct.gov/' in page.links
    for image in page.images:
        assert all(k in image for k in ['src','width','height','alt'])
        if not image['src'].startswith('http'):assert (folder/image['src']).resolve().exists(),image['src']
    for control in page.controls:assert control['aria-controls'] in page.ids
    assert '\u2014' not in html
script=(root/'version-2/public-resources.js').read_text()
assert 'tool.hidden = !selected' in script and "String(choice === button)" in script
assert 'scroll' not in script
css=(root/'version-2/public-resources.css').read_text()
assert 'prefers-reduced-motion:reduce' in css
print('Both Public Resources layouts pass shared content, destination, asset, ID and control checks.')
