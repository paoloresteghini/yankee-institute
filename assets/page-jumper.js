(() => {
  const base = new URL('../', document.currentScript.src);
  const pages = [{"group": "Review", "label": "All page designs", "path": "index.html"}, {"group": "Homepage", "label": "Connecticut Edition", "path": "version-2/index.html"}, {"group": "About", "label": "Option A · The organization", "path": "version-2/about/index.html"}, {"group": "About", "label": "Option B · Our story", "path": "version-2/about-alternative/index.html"}, {"group": "About", "label": "Option C · Photographic hero", "path": "version-2/about-full-hero/index.html"}, {"group": "Research", "label": "Option A · Reading desk", "path": "version-2/research/index.html"}, {"group": "Research", "label": "Option B · Topic guide", "path": "version-2/research-alternative/index.html"}, {"group": "Research", "label": "Option C · Top filters", "path": "version-2/research-top-filters/index.html"}, {"group": "News", "label": "Option A · Front page", "path": "version-2/news/index.html"}, {"group": "News", "label": "Option B · Chronological feed", "path": "version-2/news-alternative/index.html"}, {"group": "Article", "label": "Option A · Classic read", "path": "version-2/article/index.html"}, {"group": "Article", "label": "Option B · Photographic opening", "path": "version-2/article-alternative/index.html"}, {"group": "People", "label": "Carol Platt Liebau", "path": "version-2/person/carol-platt-liebau/index.html"}, {"group": "People", "label": "Frank Ricci", "path": "version-2/person/frank-ricci/index.html"}, {"group": "People", "label": "Gail Lavielle", "path": "version-2/person/gail-lavielle/index.html"}, {"group": "People", "label": "Matthew Fox", "path": "version-2/person/matthew-fox/index.html"}, {"group": "People", "label": "Meghan Portfolio", "path": "version-2/person/meghan-portfolio/index.html"}, {"group": "People", "label": "Terrie Wood", "path": "version-2/person/terrie-wood/index.html"}, {"group": "People", "label": "Tim Anop", "path": "version-2/person/tim-anop/index.html"}, {"group": "Labor", "label": "Option A · Issue overview", "path": "version-2/labor/index.html"}, {"group": "Labor", "label": "Option B · Policy briefing", "path": "version-2/labor-alternative/index.html"}, {"group": "Labor", "label": "Option C · Photographic banner", "path": "version-2/labor-full-hero/index.html"}, {"group": "Public Resources", "label": "Option A · Resource directory", "path": "version-2/public-resources/index.html"}, {"group": "Public Resources", "label": "Option B · Question finder", "path": "version-2/public-resources-alternative/index.html"}, {"group": "Public Resources", "label": "Option C · Photographic banner", "path": "version-2/public-resources-full-hero/index.html"}, {"group": "Donate", "label": "Option A · Photographic invitation", "path": "version-2/donate/index.html"}, {"group": "Donate", "label": "Option B · A letter to Connecticut", "path": "version-2/donate-alternative/index.html"}, {"group": "Take Action", "label": "Option A · Action briefing", "path": "version-2/take-action/index.html"}, {"group": "Take Action", "label": "Option B · Participation invitation", "path": "version-2/take-action-alternative/index.html"}, {"group": "Contact", "label": "Option A · Contact desk", "path": "version-2/contact/index.html"}, {"group": "Contact", "label": "Option B · Conversation first", "path": "version-2/contact-alternative/index.html"}, {"group": "Newsletter", "label": "Option A · Inbox invitation", "path": "version-2/subscribe/index.html"}, {"group": "Newsletter", "label": "Option B · Reading invitation", "path": "version-2/subscribe-alternative/index.html"}, {"group": "Press Resources", "label": "Option A · Media desk", "path": "version-2/press-resources/index.html"}, {"group": "Press Resources", "label": "Option B · Newsroom invitation", "path": "version-2/press-resources-alternative/index.html"}, {"group": "Fiscal Compact", "label": "Option A · Issue overview", "path": "version-2/fiscal-compact/index.html"}, {"group": "Fiscal Compact", "label": "Option B · Policy briefing", "path": "version-2/fiscal-compact-alternative/index.html"}, {"group": "Local Control", "label": "Option A · Issue overview", "path": "version-2/local-control/index.html"}, {"group": "Local Control", "label": "Option B · Policy briefing", "path": "version-2/local-control-alternative/index.html"}, {"group": "Energy", "label": "Option A · Issue overview", "path": "version-2/energy/index.html"}, {"group": "Energy", "label": "Option B · Policy briefing", "path": "version-2/energy-alternative/index.html"}, {"group": "Education", "label": "Option A · Issue overview", "path": "version-2/education/index.html"}, {"group": "Education", "label": "Option B · Policy briefing", "path": "version-2/education-alternative/index.html"}, {"group": "Research Detail", "label": "Option A · Publication desk", "path": "version-2/publication/index.html"}, {"group": "Research Detail", "label": "Option B · Photographic publication", "path": "version-2/publication-alternative/index.html"}, {"group": "Our Impact", "label": "Option A · Work and evidence", "path": "version-2/impact/index.html"}, {"group": "Our Impact", "label": "Option B · The photographic story", "path": "version-2/impact-alternative/index.html"}, {"group": "Build the Future", "label": "Option A · The campaign invitation", "path": "version-2/build-the-future/index.html"}, {"group": "Build the Future", "label": "Option B · The photographic letter", "path": "version-2/build-the-future-alternative/index.html"}, {"group": "Search Results", "label": "Option A · Search desk", "path": "version-2/search/index.html"}, {"group": "Search Results", "label": "Option B · Search guide", "path": "version-2/search-alternative/index.html"}, {"group": "Privacy and Terms", "label": "Option A · Legal document", "path": "version-2/privacy/index.html"}, {"group": "Privacy and Terms", "label": "Option B · Legal guide", "path": "version-2/privacy-alternative/index.html"}, {"group": "404", "label": "Option A · The helpful recovery", "path": "version-2/not-found/index.html"}, {"group": "404", "label": "Option B · The photographic recovery", "path": "version-2/not-found-alternative/index.html"}, {"group": "Press Releases", "label": "Option A · Featured archive", "path": "version-2/press-releases/index.html"}, {"group": "Press Releases", "label": "Option B · Chronological archive", "path": "version-2/press-releases-alternative/index.html"}, {"group": "In the News", "label": "Option A · Featured archive", "path": "version-2/in-the-news/index.html"}, {"group": "In the News", "label": "Option B · Chronological archive", "path": "version-2/in-the-news-alternative/index.html"}, {"group": "Public Testimony", "label": "Option A · Featured archive", "path": "version-2/public-testimony/index.html"}, {"group": "Public Testimony", "label": "Option B · Chronological archive", "path": "version-2/public-testimony-alternative/index.html"}, {"group": "Hartford Portfolio", "label": "Option A · Featured archive", "path": "version-2/hartford-portfolio/index.html"}, {"group": "Hartford Portfolio", "label": "Option B · Chronological archive", "path": "version-2/hartford-portfolio-alternative/index.html"}];
  const current = location.pathname.replace(/\/$/, '/index.html');
  const icon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h6v6H4zM14 5h6v6h-6zM4 15h6v6H4zM14 15h6v6h-6z"/></svg>';
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'pj-toggle';
  toggle.innerHTML = icon + '<span>Choose a page</span>';
  toggle.setAttribute('aria-haspopup', 'dialog');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'review-page-jumper');
  const dialog = document.createElement('dialog');
  dialog.id = 'review-page-jumper';
  dialog.className = 'pj-dialog';
  dialog.setAttribute('aria-labelledby', 'pj-heading');
  dialog.innerHTML = '<div class="pj-shell"><div class="pj-header"><h2 class="pj-title" id="pj-heading">Choose a page</h2><button type="button" class="pj-close" aria-label="Close page jumper"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div><div class="pj-search-wrap"><input class="pj-search" type="search" placeholder="Find a page" aria-label="Find a page" autocomplete="off"></div><nav class="pj-list" aria-label="Review pages"></nav></div>';
  const list = dialog.querySelector('.pj-list');
  const search = dialog.querySelector('.pj-search');
  const groups = new Map();
  const links = [];
  pages.forEach(page => {
    let group = groups.get(page.group);
    if (!group) {
      const section = document.createElement('section');
      section.className = 'pj-group';
      const heading = document.createElement('h3');
      heading.className = 'pj-group-title';
      heading.textContent = page.group;
      const grid = document.createElement('div');
      grid.className = 'pj-links';
      section.append(heading, grid);
      list.append(section);
      group = { section, grid, links: [] };
      groups.set(page.group, group);
    }
    const link = document.createElement('a');
    link.className = 'pj-link';
    link.href = new URL(page.path, base).href;
    const label = document.createElement('span');
    label.textContent = page.label;
    const path = document.createElement('span');
    path.className = 'pj-path';
    path.textContent = page.path === 'index.html' ? '/' : '/' + page.path.replace('version-2/', '').replace('/index.html', '');
    link.append(label, path);
    if (new URL(link.href).pathname === current) link.setAttribute('aria-current', 'page');
    group.grid.append(link);
    group.links.push(link);
    links.push({ link, terms: (page.group + ' ' + page.label + ' ' + page.path).toLowerCase() });
  });
  const empty = document.createElement('p');
  empty.className = 'pj-empty';
  empty.textContent = 'No pages found. Try another search.';
  empty.hidden = true;
  empty.setAttribute('role', 'status');
  list.append(empty);
  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase();
    links.forEach(item => { item.link.hidden = !item.terms.includes(query); });
    groups.forEach(group => { group.section.hidden = group.links.every(link => link.hidden); });
    empty.hidden = links.some(item => !item.link.hidden);
  });
  toggle.addEventListener('click', () => {
    dialog.showModal();
    toggle.setAttribute('aria-expanded', 'true');
    search.focus();
  });
  dialog.querySelector('.pj-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); dialog.close(); }
  });
  dialog.addEventListener('close', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  });
  document.body.append(toggle, dialog);
})();
