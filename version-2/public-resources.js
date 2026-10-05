/* Native buttons retain ordinary tab order. Without JavaScript, all tools remain readable. */
const resourceChoices = [...document.querySelectorAll('[data-resource]')];
const resourceTools = [...document.querySelectorAll('.resource-tool')];
if (resourceChoices.length) {
  function selectResource(button, animate = true) {
    resourceChoices.forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)));
    resourceTools.forEach(tool => {
      const selected = tool.id === button.getAttribute('aria-controls');
      tool.hidden = !selected;
      tool.classList.toggle('is-entering', selected && animate);
    });
  }
  resourceChoices.forEach(button => button.addEventListener('click', () => selectResource(button)));
  selectResource(resourceChoices[0], false);
}
