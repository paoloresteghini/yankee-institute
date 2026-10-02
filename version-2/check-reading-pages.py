"""Run: python3 version-2/check-reading-pages.py. Source parity for four reading prototypes."""
from pathlib import Path
import json,re,html
root=Path(__file__).parent
items=[i for i in json.loads((root/'../content/content.json').read_text())['items'] if i['type']=='analysis']
body=(root/'../content/article.html').read_text().strip()
assert len(re.findall(r'<p>',body))==29
for route in ['news','news-alternative','article','article-alternative']:
    text=(root/route/'index.html').read_text()
    ids=re.findall(r'\bid="([^"]+)"',text)
    assert len(ids)==len(set(ids)),route
    assert '\u2014' not in text,route
    assert '↗' not in text,route
    assert 'research-top-filters/index.html' in text
    if route.startswith('news'):
        assert text.count('class="publication"')==17
        for item in items:
            assert html.escape(item['title'],quote=True) in text
            assert item['date'] in text
            assert item['url'] in text or item['id']=='yi-001'
        assert 'data-item-plural="stories"' in text
    else:
        assert body in text,route
        assert 'September 29, 2026' in text
        assert 'meghan.avif' in text
print('Pass: 17 identical news stories, 29 complete article paragraphs, source links, dates and unique IDs.')
