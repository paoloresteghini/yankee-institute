/* Native dialogs, one content set, and visibility observation. */
(() => {
  const $ = (selector) => document.querySelector(selector);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const filters = $('#filters');
  let pieces = [], expanded = false, opener;
  const normalize = (text) => text.toLocaleLowerCase();
  const matches = (piece, query) => normalize([piece.title, piece.author, piece.topic, piece.summary, piece.dek].join(' ')).includes(normalize(query));
  const item = (piece) => {
    const article = document.createElement('article');
    article.className = 'reading-item';
    const category = document.createElement('p');
    category.className = 'category'; category.textContent = piece.topic;
    const heading = document.createElement('h3');
    const link = document.createElement('a'); link.href = piece.url; link.textContent = piece.title;
    heading.append(link);
    const byline = document.createElement('div'); byline.className = 'byline';
    const author = document.createElement('span'); author.textContent = piece.author;
    const date = document.createElement('time'); date.dateTime = piece.date;
    date.textContent = new Date(piece.date + 'T12:00:00').toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
    byline.append(author, date); article.append(category, heading, byline); return article;
  };
  function renderLibrary() {
    const result = pieces.filter(p => (!$('#topic-filter').value || p.topics.includes($('#topic-filter').value)) && (!$('#author-filter').value || p.author === $('#author-filter').value) && (!$('#format-filter').value || p.type === $('#format-filter').value));
    const shown = expanded ? result : result.slice(0, 6);
    $('#reading-list').replaceChildren(...shown.map(item));
    $('#result-count').textContent = `${result.length} ${result.length === 1 ? 'piece' : 'pieces'} found. Showing ${shown.length}.`;
    if (!result.length) { const p = document.createElement('p'); p.className = 'empty'; p.textContent = 'No pieces match these filters. Try a different topic or author.'; $('#reading-list').append(p); }
    $('#show-more').hidden = result.length <= 6;
    $('#show-more').textContent = expanded ? 'Show fewer pieces' : `Show all ${result.length} pieces`;
    updateEvidence();
  }
  function renderSearch() {
    const query = $('#search-input').value.trim();
    const result = pieces.filter(p => matches(p, query));
    $('#search-results').replaceChildren(...result.map(item));
    $('#search-status').textContent = query ? `${result.length} results for “${query}”.` : `Explore Yankee's ${pieces.length}-piece collection.`;
  }
  document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => {
    opener = button; const dialog = document.getElementById(button.dataset.open);
    dialog.showModal(); document.body.classList.add('dialog-open');
    if (dialog.id === 'search-dialog') { renderSearch(); $('#search-input').focus(); }
  }));
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelectorAll('[data-close],[data-close-link]').forEach(control => control.addEventListener('click', () => dialog.close()));
    dialog.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); dialog.close(); } });
    dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); opener?.focus({preventScroll:true}); });
  });
  function discover(topic, author) {
    $('#topic-filter').value = topic || ''; $('#author-filter').value = author || ''; $('#format-filter').value = '';
    expanded = false; renderLibrary(); $('#contents').close();
    (topic ? $('#topics') : $('#library')).scrollIntoView({behavior:reducedMotion.matches ? 'instant' : 'smooth'});
    if (!topic) $('#author-filter').focus({preventScroll:true});
  }
  document.querySelectorAll('[data-topic]').forEach(button => button.addEventListener('click', () => discover(button.dataset.topic)));
  document.querySelectorAll('[data-author]').forEach(button => button.addEventListener('click', () => discover('', button.dataset.author)));
  filters.addEventListener('change', () => { expanded = false; renderLibrary(); });
  filters.addEventListener('submit', event => event.preventDefault());
  filters.addEventListener('reset', () => { expanded = false; requestAnimationFrame(renderLibrary); });
  $('#show-more').addEventListener('click', () => { expanded = !expanded; renderLibrary(); });
  $('#search-input').addEventListener('input', renderSearch);
  fetch('../content/content.json').then(response => { if (!response.ok) throw new Error('Content unavailable'); return response.json(); }).then(data => {
    pieces = Array.isArray(data) ? data : data.items;
    renderLibrary(); renderSearch();
  }).catch(() => { $('#result-count').textContent = 'The collection could not load. Refresh to try again.'; $('#search-status').textContent = 'Search is unavailable. Refresh to try again.'; $('#show-more').hidden = true; });
  function updateEvidence() {
    const topic = $('#topic-filter').value;
    document.querySelectorAll('[data-room-topic]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.roomTopic === topic)));
    const relevant = pieces.filter(piece => !topic || piece.topics.includes(topic));
    const evidence = relevant.filter(piece => ['research-report','testimony'].includes(piece.type));
    const selected = (evidence.length ? evidence : relevant).slice(0,3);
    $('#evidence-heading').textContent = topic || 'Major research';
    $('#evidence-note').textContent = evidence.length ? `${evidence.length} research and testimony pieces on this subject.` : 'Reporting and policy ideas on this subject.';
    $('#topic-evidence').replaceChildren(...selected.map(item));
    $('#topic-evidence').classList.remove('changed');
    requestAnimationFrame(() => $('#topic-evidence').classList.add('changed'));
  }
  document.querySelectorAll('[data-format]').forEach(button => button.addEventListener('click', () => {
    $('#format-filter').value = button.dataset.format; expanded = false; renderLibrary();
    $('#library').scrollIntoView({behavior:reducedMotion.matches ? 'instant' : 'smooth'});
    $('#format-filter').focus({preventScroll:true});
  }));
  const desktop = matchMedia('(min-width:701px)');
  const setEvidence = () => { $('#evidence-box').open = desktop.matches; };
  setEvidence(); desktop.addEventListener('change', setEvidence);
  const photos = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); photos.unobserve(entry.target); } }), {threshold:.15});
  document.querySelectorAll('[data-reveal]').forEach(photo => { photo.classList.add('motion-ready'); photos.observe(photo); });
})();
