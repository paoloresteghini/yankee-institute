(() => {
  const opener = document.getElementById('open-tip');
  const dialog = document.getElementById('tip-dialog');
  if (!opener || !dialog || typeof dialog.showModal !== 'function') return;
  const form = document.getElementById('tip-form');
  opener.addEventListener('click', event => {
    event.preventDefault();
    dialog.showModal();
  });
  dialog.querySelector('.tip-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => opener.focus());
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const body = `News tip\n\nName: ${data.get('name') || 'Not provided'}\nEmail: ${data.get('email')}\n\n${data.get('tip')}`;
    window.location.href = `mailto:info@yankeeinstitute.org?subject=${encodeURIComponent('News tip')}&body=${encodeURIComponent(body)}`;
    dialog.querySelector('.tip-status').textContent = 'Continue in your email app to send your tip. If it does not open, use the contact form below.';
  });
})();
