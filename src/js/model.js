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

export const setOperation = function (operand, operation) {
  console.log(operand, operation);
  const { displayValue, firstOperand, operator } = state;
  const inputValue = parseFloat(operand);

  if (operator && state.waitingForSecondOperand) {
    state.operator = operation;
    console.log('zaaart');
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    state.displayValue = inputValue;
  } else if (operator) {
    const calculation = calculate(firstOperand, inputValue, operator);
    state.displayValue = String(result);
    state.firstOperand = calculation;
  }

  state.waitingForSecondOperand = true;
  state.operation = operation;
  console.log(state);
};

const calculate = function (firstOperand, secondOperand, operator) {
  if (operator === 'plus') {
    return firstOperand + secondOperand;
  } else if (operator === 'minus') {
    return firstOperand - secondOperand;
  } else if (operator === 'times') {
    return firstOperand * secondOperand;
  } else if (operator === 'divide') {
    return firstOperand / secondOperand;
  }

  return secondOperand;
};
