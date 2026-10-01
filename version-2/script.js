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
    const result = pieces.filter(p => (!$('#topic-filter').value || p.topic === $('#topic-filter').value) && (!$('#author-filter').value || p.author === $('#author-filter').value) && (!$('#format-filter').value || p.type === $('#format-filter').value));
    const shown = expanded ? result : result.slice(0, 6);
    $('#reading-list').replaceChildren(...shown.map(item));
    $('#result-count').textContent = `${result.length} ${result.length === 1 ? 'piece' : 'pieces'} found. Showing ${shown.length}.`;
    if (!result.length) { const p = document.createElement('p'); p.className = 'empty'; p.textContent = 'No pieces match these filters. Try a different topic or author.'; $('#reading-list').append(p); }
    $('#show-more').hidden = result.length <= 6;
    $('#show-more').textContent = expanded ? 'Show fewer pieces' : `Show all ${result.length} pieces`;
  }
  function renderSearch() {
    const query = $('#search-input').value.trim();
    const result = pieces.filter(p => matches(p, query));
    $('#search-results').replaceChildren(...result.map(item));
    $('#search-status').textContent = query ? `${result.length} results for “${query}”.` : `Explore this edition's ${pieces.length}-piece collection.`;
  }
  const masthead = $('.masthead');
  const navToggle = $('#nav-toggle');
  const disclosures = [...masthead.querySelectorAll('[data-nav-toggle]')];
  function closeNavigation() {
    disclosures.forEach(button => { document.getElementById(button.getAttribute('aria-controls')).hidden = true; button.setAttribute('aria-expanded', 'false'); });
    masthead.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
  }
  disclosures.forEach(button => button.addEventListener('click', () => {
    button.focus({preventScroll:true});
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const open = panel.hidden;
    disclosures.forEach(other => { document.getElementById(other.getAttribute('aria-controls')).hidden = true; other.setAttribute('aria-expanded', 'false'); });
    panel.hidden = !open; button.setAttribute('aria-expanded', String(open));
  }));
  navToggle.addEventListener('click', () => {
    const open = !masthead.classList.contains('nav-open');
    if (!open) closeNavigation();
    else { masthead.classList.add('nav-open'); navToggle.setAttribute('aria-expanded', 'true'); navToggle.setAttribute('aria-label', 'Close navigation'); }
  });
  masthead.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavigation));
  document.addEventListener('click', event => { if (!masthead.contains(event.target)) closeNavigation(); });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || event.defaultPrevented) return;
    const active = disclosures.find(button => button.getAttribute('aria-expanded') === 'true');
    if (active) { document.getElementById(active.getAttribute('aria-controls')).hidden = true; active.setAttribute('aria-expanded', 'false'); active.focus(); }
    else if (masthead.classList.contains('nav-open')) { closeNavigation(); navToggle.focus(); }
  });
  masthead.addEventListener('focusout', event => {
    if (event.relatedTarget && !masthead.contains(event.relatedTarget)) closeNavigation();
  });
  matchMedia('(max-width:1100px)').addEventListener('change', closeNavigation);
  document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => {
    closeNavigation(); opener = button; const dialog = document.getElementById(button.dataset.open);
    dialog.showModal(); document.body.classList.add('dialog-open');
    if (dialog.id === 'search-dialog') { renderSearch(); $('#search-input').focus(); }
    else if (dialog.id === 'site-search-dialog') $('#site-search-input').focus();
  }));
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelectorAll('[data-close],[data-close-link]').forEach(control => control.addEventListener('click', () => dialog.close()));
    dialog.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); dialog.close(); } });
    dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); opener?.focus({preventScroll:true}); });
  });
  function discover(topic, author) {
    $('#topic-filter').value = topic || ''; $('#author-filter').value = author || ''; $('#format-filter').value = '';
    expanded = false; renderLibrary(); closeNavigation();
    $('#library').scrollIntoView({behavior:reducedMotion.matches ? 'instant' : 'smooth'});
    $('#topic-filter').focus({preventScroll:true});
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
  const photos = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); photos.unobserve(entry.target); } }), {threshold:.15});
  document.querySelectorAll('[data-reveal]').forEach(photo => { photo.classList.add('motion-ready'); photos.observe(photo); });
})();
