/* Run: node version-2/check-research.js. Native discovery and source parity check. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = __dirname;
const items = JSON.parse(fs.readFileSync(path.join(root, '../content/research.json'))).items;
const pages = ['research', 'research-alternative', 'research-top-filters'].map(dir => fs.readFileSync(path.join(root, dir, 'index.html'), 'utf8'));
for (const html of pages) {
  assert.equal((html.match(/class="publication"/g) || []).length, 7);
  for (const item of items) assert.ok(html.includes(item.url), item.title);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(!html.includes('\u2014'));
}
for (const withSelect of [true, false]) {
  const handlers = {};
  const query = {value: '', addEventListener: (type, fn) => handlers['query-'+type] = fn};
  const select = {value: 'All research', addEventListener: (type, fn) => handlers['select-'+type] = fn};
  const form = {addEventListener: (type, fn) => handlers[type] = fn};
  const count = {};
  const empty = {hidden: true};
  const publications = items.map(x => ({hidden:false, dataset:{topics:x.topics.join('|'),search:x.title+' '+x.dek+' '+x.author}}));
  const topics = ['All research','Energy','Education'].map(topic => ({dataset:{topic},setAttribute(){},addEventListener:(type,fn)=>handlers[topic]=fn}));
  const document = {
    querySelector: s => s === '.research-controls' ? form : empty,
    querySelectorAll: s => s === '.publication' ? publications : topics,
    getElementById: id => ({'research-query':query,'research-topic':withSelect?select:null,'research-count':count})[id]
  };
  vm.runInNewContext(fs.readFileSync(path.join(root,'research.js'),'utf8'),{document,requestAnimationFrame:fn=>fn()});
  if(withSelect){select.value='Energy';handlers['select-change']();}else handlers.Energy();
  assert.equal(count.textContent,'3 publications');
  query.value='nonexistent paper';handlers['query-input']();assert.equal(empty.hidden,false);
  query.value='';select.value='All research';handlers.reset();assert.equal(count.textContent,'7 publications');
  query.value='SCHOLARSHIP';handlers['query-input']();assert.equal(count.textContent,'1 publication');
  query.value='pension guardrails';handlers['query-input']();assert.equal(count.textContent,'1 publication');
}
console.log('Pass: identical seven sources, unique IDs, topic and keyword intersection, empty state and reset on all layouts.');
