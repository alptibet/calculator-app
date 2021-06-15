export const addHandlerThemeSelect = function (handler) {
  const selector = document.querySelector('.theme-selector__toggle');
  selector.addEventListener('click', function (e) {
    if (e.target.type !== 'radio') return;
    handler(e.target.dataset.theme);
  });
};
