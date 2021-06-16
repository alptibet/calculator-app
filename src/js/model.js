export const state = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

export const setInitialTheme = function () {
  if (localStorage.getItem('theme')) initialTheme = localStorage.getItem('theme');
  if (!localStorage.getItem('theme')) initialTheme = 1;
  return initialTheme;
};

export const setTheme = function (theme) {
  localStorage.setItem('theme', theme);
};
