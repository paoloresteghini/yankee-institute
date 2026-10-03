"""Run from project root: python3 version-2/check-donate.py."""
from pathlib import Path
from html.parser import HTMLParser
import json
root=Path(__file__).resolve().parent.parent
source=json.loads((root/'content/donate.json').read_text())
class Page(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.ids=[];self.images=[];self.form=False;self.details=0
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if t=='a':self.links.append(a.get('href',''))
  if 'id' in a:self.ids.append(a['id'])
  if t=='img':self.images.append(a)
  if t=='form' and a.get('action','').startswith('https://www.yankeeinstitute.org/donate'):self.form=True
  if t=='details':self.details+=1
for route in ['donate','donate-alternative']:
 folder=root/'version-2'/route;html=(folder/'index.html').read_text();p=Page();p.feed(html)
 assert len(p.ids)==len(set(p.ids)),route+' duplicate IDs'
 for key in ['donation_url','legacy_url']:assert source[key] in p.links,route+' missing '+key
 for key in ['support_copy','form_note','tax_copy','tax_id','phone']:assert source[key] in html,route+' missing '+key
 for line in source['mail']:assert line in html
 assert 'tel:+18604266344' in p.links
 assert p.details==3 and not p.form
 assert '\u2014' not in html
 for im in p.images:
  assert all(x in im for x in ['width','height','src','alt'])
  if not im['src'].startswith('http'):assert (folder/im['src']).resolve().exists(),im['src']
css=(root/'version-2/donate.css').read_text()
assert 'prefers-reduced-motion:reduce' in css
print('Both Donate options pass source, destination, giving disclosure, image and no-payment-capture checks.')
