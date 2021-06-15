export const renderTheme = function (theme) {
  console.log(`rendering theme no ${theme}`);
  const body = document.querySelector('body');
  const children = body.querySelectorAll('*');
  const themeSelector = document.querySelectorAll('.theme-selector__toggle input');
  themeSelector.forEach(function (item) {
    if (item.dataset.theme === theme) {
      item.checked = true;
    }
  });

  const allItems = [body, ...children];
  console.log(allItems);
  allItems.forEach(function (item) {
    item.classList.remove('theme1', 'theme2', 'theme3');
    item.classList.toggle(`theme${theme}`);
  });
};
