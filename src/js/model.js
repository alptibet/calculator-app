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

export const setOperand = function (operand) {
  const { displayValue, waitingForSecondOperand } = state;
  if (waitingForSecondOperand === true) {
    state.displayValue = operand;
    state.waitingForSecondOperand = false;
  } else {
    state.displayValue = displayValue === '0' ? operand : displayValue + operand;
  }
  console.log(state);
};

export const setOperator = function (operation) {
  console.log(operation);
  const { firstOperand, displayValue, operator } = state;
  const inputValue = displayValue;

  if (operator && state.waitingForSecondOperand) {
    state.operator = operation;
    return;
  }
  if (firstOperand === null && !isNaN(inputValue)) {
    state.firstOperand = inputValue;
  } else if (operation) {
    const calculation = calculate(firstOperand, inputValue, operation);
    state.displayValue = calculation;
    state.firstOperand = calculation;
  }
  state.waitingForSecondOperand = true;
  state.operator = operation;
  console.log(state);
};

const calculate = function (firstOperand, secondOperand, operator) {
  console.log(firstOperand, secondOperand, operator);
  if (operator === 'plus') {
    return firstOperand + secondOperand;
  } else if (operator === 'minus') {
    return firstOperand - secondOperand;
  } else if (operator === 'times') {
    return firstOperand * secondOperand;
  } else if (operator === 'divide') {
    return firstOperand / secondOperand;
  }

  // return secondOperand;
};
