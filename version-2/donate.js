/* Inline giving preview. Never transmits donor details or captures card data. */
for (const form of document.querySelectorAll('.giving-form')) {
  const gift = form.querySelector('[data-step="gift"]');
  const details = form.querySelector('[data-step="details"]');
  const custom = form.querySelector('.giving-custom');
  const customInput = custom.querySelector('input');
  const format = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 2});
  const summary = () => {
    const chosen = form.querySelector('[name="amount"]:checked').value;
    const amount = chosen === 'other' ? Number(customInput.value) : Number(chosen);
    const frequency = form.querySelector('[name="frequency"]:checked').value;
    form.querySelector('.giving-summary').textContent = `Your gift: ${format.format(amount)}, ${frequency === 'one-time' ? 'one time' : frequency}`;
    form.querySelector('.giving-submit').textContent = `Donate ${format.format(amount)}${frequency === 'one-time' ? '' : ` ${frequency}`}`;
  };
  form.addEventListener('change', () => {
    const other = form.querySelector('[name="amount"]:checked').value === 'other';
    custom.hidden = !other;
    customInput.disabled = !other;
    customInput.required = other;
    const behalf = form.querySelector('[name="behalf"]').value;
    for (const [selector, active] of [['.giving-spouse', behalf === 'couple'], ['.giving-business', behalf === 'business']]) {
      const group = form.querySelector(selector);
      group.hidden = !active;
      for (const input of group.querySelectorAll('input')) {input.disabled = !active; input.required = active;}
    }
    summary();
  });
  form.querySelector('[data-continue]').addEventListener('click', () => {
    if (!customInput.disabled && !customInput.reportValidity()) return;
    summary(); gift.hidden = true; details.hidden = false;
    details.querySelector('h3').focus({preventScroll: true});
    details.scrollIntoView({block: 'nearest', behavior: 'instant'});
  });
  form.querySelector('[data-back]').addEventListener('click', () => {
    details.hidden = true; gift.hidden = false;
    gift.querySelector('input').focus({preventScroll: true});
    gift.scrollIntoView({block: 'nearest', behavior: 'instant'});
  });
  form.addEventListener('submit', event => event.preventDefault());
}
