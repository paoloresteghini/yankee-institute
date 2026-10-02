/* Native filtering of the selected research collection. */
(() => {
  const form = document.querySelector('.research-controls');
  const query = document.getElementById('research-query');
  const select = document.getElementById('research-topic');
  const topics = [...document.querySelectorAll('[data-topic]')];
  const publications = [...document.querySelectorAll('.publication')];
  let topic = 'All research';
  const normalize = value => value.normalize('NFKD').replace(/\p{Diacritic}/gu, '').toLowerCase();
  function filter() {
    const terms = normalize(query.value.trim()).split(/\s+/).filter(Boolean);
    let count = 0;
    publications.forEach(publication => {
      const text = normalize(publication.dataset.search);
      publication.hidden = !(terms.every(term => text.includes(term)) && (topic === 'All research' || publication.dataset.topics.split('|').includes(topic)));
      if (!publication.hidden) count++;
    });
    const singular = form.dataset?.itemLabel || 'publication';
    const plural = form.dataset?.itemPlural || singular + 's';
    document.getElementById('research-count').textContent = `${count} ${count === 1 ? singular : plural}`;
    document.querySelector('.research-empty').hidden = count !== 0;
    topics.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.topic === topic)));
  }
  query.addEventListener('input', filter);
  select?.addEventListener('change', () => { topic = select.value; filter(); });
  topics.forEach(button => button.addEventListener('click', () => { topic = button.dataset.topic; filter(); }));
  form.addEventListener('submit', event => { event.preventDefault(); filter(); });
  form.addEventListener('reset', () => { topic = 'All research'; requestAnimationFrame(filter); });
})();
