"""Run: python3 version-2/about-alternative/check.py. No third-party dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
root = Path(__file__).resolve().parent
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=set(); self.links=[]; self.assets=[]
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, attrs['id']
            self.ids.add(attrs['id'])
        if tag=='a': self.links.append(attrs.get('href',''))
        if tag=='img':
            assert all(attrs.get(k) for k in ['src','alt','width','height']),attrs
            self.assets.append(attrs['src'])
        if tag in ['script','link']: self.assets.append(attrs.get('src',attrs.get('href','')))
s=(root/'index.html').read_text(); page=Page();page.feed(s)
for asset in page.assets:
    assert (root/urlsplit(asset).path).exists(),asset
for link in page.links:
    u=urlsplit(link)
    if u.scheme or u.netloc: continue
    target=(root/u.path) if u.path else root/'index.html'
    assert target.exists(),link
    if u.fragment and not u.path: assert u.fragment in page.ids,link
for name in ['Carol Platt Liebau','Matthew Fox','Tim Anop','Meghan Portfolio','Frank Ricci','Terrie Wood','Gail Lavielle','J. David Kelsey','Ken Boudreau','Gerald Gunderson','Themis Klarides','David Tohir','Penny Young','Tom Lasersohn']:
    assert name in s,name
assert s.count('<details>')==0
assert s.count('person/')==7
assert 'src="../script.js?v=20261002"' in s
assert 'href="../index.html" aria-label="Yankee Institute home"' in s
assert s.count('<h1 ')==1
assert 'class="president"' not in s
assert 'class="about-contact' not in s
assert 'name="EMAIL"' in s and 'list-manage.com/subscribe/post?' in s
assert '\u2014' not in s
print('Pass: About roster, native biographies, local navigation, assets, image metadata and shared script.')
