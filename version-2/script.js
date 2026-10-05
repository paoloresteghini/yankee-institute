/* Native navigation and full-site search. */
(() => {
  const $ = (selector) => document.querySelector(selector);
  let opener;
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
    if (dialog.id === 'site-search-dialog') $('#site-search-input').focus();
  }));
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelectorAll('[data-close],[data-close-link]').forEach(control => control.addEventListener('click', () => dialog.close()));
    dialog.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); dialog.close(); } });
    dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); opener?.focus({preventScroll:true}); });
  });
})();

/* Scroll arrivals begin offscreen so visible content never snaps to a start frame. */
(() => {
  const main = document.querySelector('main');
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (!main || preference.matches || !('IntersectionObserver' in window)) return;
  const selectors = [
    'h2', '.archive-heading', '.issue-section-heading', 'figure', 'article',
    '.person', '.pillar-index-row', '.work-example', '.involvement-card',
    '.resource-entry', '.resource-tool', '.giving-step', '.newsletter-panel'
  ].join(',');
  const candidates = [...main.querySelectorAll(selectors), ...document.querySelectorAll('footer h2')].filter(element =>
    !element.closest('.article-body, .profile-bio, .issue-hero, .article-opening, .opening') &&
    element.getBoundingClientRect().top >= innerHeight + 48
  );
  const selected = new Set(candidates);
  const targets = candidates.filter(element => {
    for (let parent = element.parentElement; parent && parent !== main; parent = parent.parentElement) {
      if (selected.has(parent)) return false;
    }
    return true;
  });
  const reveal = (element, immediate = false) => {
    observer.unobserve(element);
    if (immediate) element.dataset.scrollImmediate = 'true';
    element.dataset.scrollReveal = 'complete';
  };
  const observer = new IntersectionObserver(entries => {
    let stagger = 0;
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      element.style.setProperty('--arrival-delay', `${Math.min(stagger++ * 50, 100)}ms`);
      reveal(element, preference.matches || element.contains(document.activeElement));
    });
  }, { threshold: 0, rootMargin: '0px 0px 48px 0px' });
  const finishAll = () => {
    observer.disconnect();
    targets.forEach(element => reveal(element, true));
  };
  try {
    targets.forEach(element => {
      element.dataset.scrollReveal = 'ready';
      observer.observe(element);
    });
  } catch {
    finishAll();
  }
  document.addEventListener('focusin', event => {
    targets.forEach(element => {
      if (element.contains(event.target)) reveal(element, true);
    });
  });
  preference.addEventListener('change', event => {
    if (event.matches) finishAll();
  });
  window.addEventListener('beforeprint', finishAll);
  window.addEventListener('pageshow', event => {
    if (event.persisted) finishAll();
  });
})();
