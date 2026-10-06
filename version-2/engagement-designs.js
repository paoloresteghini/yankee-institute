/* Contact drafts remain in the visitor's email application. */
document.querySelectorAll('[data-email-draft]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const fields = new FormData(form);
    const body = `Name: ${fields.get('first')} ${fields.get('last')}\nEmail: ${fields.get('email')}\n\n${fields.get('message')}`;
    window.location.href = `mailto:info@yankeeinstitute.org?subject=${encodeURIComponent(fields.get('subject') || form.dataset.subject || 'Website inquiry')}&body=${encodeURIComponent(body)}`;
    form.querySelector('[data-draft-status]').textContent = 'Continue in your email app to send your message. If it does not open, use the website contact form below.';
  });
});
