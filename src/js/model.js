export const setInitialTheme = function (themeSelector) {
  const initialTheme = localStorage.getItem('theme');
  return initialTheme;
};

export const setTheme = function (theme) {
  localStorage.setItem('theme', theme);
};
