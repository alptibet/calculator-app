export const initialThemeSelect = function (handler) {
  const themeSelector = document.querySelectorAll('.theme-selector__toggle input');
  handler(themeSelector);
};
