const state = {
  firstOperand: null,
  secondOperand: null,
  displayValue: 0,
  lastResult: null,
  resultHistory: [],
  waitingSecondOperand: false,
  operation: '',
};

export const setInitialTheme = function () {
  if (localStorage.getItem('theme')) initialTheme = localStorage.getItem('theme');
  if (!localStorage.getItem('theme')) initialTheme = 1;
  return initialTheme;
};

export const setTheme = function (theme) {
  localStorage.setItem('theme', theme);
};

export const setOperands = function (operand) {
  if (!state.waitingSecondOperand) {
    state.firstOperand = operand;
  } else {
    state.secondOperand = operand;
    doMath();
  }

  console.log(state);
};

export const setOperation = function (operation) {
  state.operation = operation;
  state.waitingSecondOperand = true;
};

const doMath = function () {
  console.log(`Doint math with ${state.firstOperand} and ${state.secondOperand}`);
  if (state.operation === 'plus') {
    state.lastResult = state.firstOperand + state.secondOperand;
    state.firstOperand = state.lastResult;
    state.displayValue = state.lastResult;
  }
  if (state.operation === 'minus') {
    state.lastResult = state.firstOperand - state.secondOperand;
    state.firstOperand = state.lastResult;
    state.displayValue = state.lastResult;
  }
  if (state.operation === 'times') {
    state.lastResult = state.firstOperand * state.secondOperand;
    state.firstOperand = state.lastResult;
    state.displayValue = state.lastResult;
  }
  if (state.operation === 'divide') {
    state.lastResult = state.firstOperand / state.secondOperand;
    state.firstOperand = state.lastResult;
    state.displayValue = state.lastResult;
  }
};
