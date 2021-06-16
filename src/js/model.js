export const state = {
  firstOperand: null,
  displayValue: 0,
  lastResult: 0,
  waitingOperand: false,
  operator: '',
};

export const setInitialTheme = function () {
  if (localStorage.getItem('theme')) initialTheme = localStorage.getItem('theme');
  if (!localStorage.getItem('theme')) initialTheme = 1;
  return initialTheme;
};

export const setTheme = function (theme) {
  localStorage.setItem('theme', theme);
};
