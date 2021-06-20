export const state = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

export const setInitialTheme = function () {
  if (localStorage.getItem('theme')) {
    const initialTheme = localStorage.getItem('theme');
    return initialTheme;
  } else {
    return 1;
  }
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
};

export const deleteOperand = function (operand) {
  state.displayValue = operand;
};

export const setOperator = function (operation) {
  const { firstOperand, displayValue, operator } = state;
  const inputValue = displayValue;

  if (operator && state.waitingForSecondOperand) {
    state.operator = operation;
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    state.firstOperand = parseFloat(inputValue);
  } else if (operator) {
    const calculation = calculate(firstOperand, inputValue, operator);
    if (!isFinite(calculation)) {
      resetCalculator();
      return;
    }
    state.displayValue = parseFloat(calculation);
    state.firstOperand = calculation;
  }

  state.waitingForSecondOperand = true;
  state.operator = operation;
};

const calculate = function (firstOperand, secondOperand, operator) {
  if (operator === 'plus') {
    return parseFloat(firstOperand) + parseFloat(secondOperand);
  } else if (operator === 'minus') {
    return parseFloat(firstOperand) - parseFloat(secondOperand);
  } else if (operator === 'times') {
    return parseFloat(firstOperand) * parseFloat(secondOperand);
  } else if (operator === 'divide') {
    return parseFloat(firstOperand) / parseFloat(secondOperand);
  }
  return secondOperand;
};

export const resetCalculator = function () {
  state.displayValue = '0';
  state.waitingForSecondOperand = false;
  state.operator = null;
  state.firstOperand = null;
};
