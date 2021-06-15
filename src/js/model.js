const state = {
  firstOperand: null,
  secondOperand: null,
  lastResult: null,
  resultHistory: [],
};

export const setInitialTheme = function () {
  const initialTheme = localStorage.getItem('theme');
  return initialTheme;
};

export const setTheme = function (theme) {
  localStorage.setItem('theme', theme);
};

export const calculateAddition = function (num1, num2) {
  return num1 + num2;
};
