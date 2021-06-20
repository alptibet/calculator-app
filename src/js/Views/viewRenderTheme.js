export const renderTheme = function (theme) {
  const body = document.querySelector('body');
  const children = body.querySelectorAll('*');
  const themeSelector = document.querySelectorAll('.theme-selector__toggle input');
  themeSelector.forEach(function (item) {
    if (item.dataset.theme === theme) {
      console.log(item);
      item.checked = true;
    }
  });

  const allItems = [body, ...children];
  allItems.forEach(function (item) {
    item.classList.remove('theme1', 'theme2', 'theme3');
    item.classList.toggle(`theme${theme}`);
  });
};
