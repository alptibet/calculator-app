const state = {
  firstOperand: null,
  secondOperand: null,
  displayValue: 0,
  lastResult: null,
  resultHistory: [],
  waitingSecondOperand: false,
};

export const setInitialTheme = function () {
  if (localStorage.getItem('theme')) initialTheme = localStorage.getItem('theme');
  if (!localStorage.getItem('theme')) initialTheme = 1;
  return initialTheme;
};

export const setTheme = function (theme) {
  localStorage.setItem('theme', theme);
};

export const operationAddition = function (operand) {
  state.firstOperand = operand;
  state.waitingSecondOperand = true;
  console.log(operand);
  console.log(state);
};

// export const calculateAddition = function (num1, num2) {
//   return num1 + num2;
// };
