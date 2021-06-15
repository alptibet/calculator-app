const state = {
  firstOperand: null,
  secondOperand: null,
  displayValue: 0,
  lastResult: null,
  resultHistory: [],
};

export const setInitialTheme = function () {
  if (localStorage.getItem('theme')) initialTheme = localStorage.getItem('theme');
  if (!localStorage.getItem('theme')) initialTheme = 1;

  return initialTheme;
};

export const setTheme = function (theme) {
  localStorage.setItem('theme', theme);
};

export const calculateAddition = function (num1, num2) {
  return num1 + num2;
};
