const calcScreen = document.querySelector('.screen__result');
let operand = '';

export const addHandlerUpdateScreen = function (handler) {
  const nums = document.querySelectorAll('.operand');
  renderScreen();
  nums.forEach(function (num) {
    num.addEventListener('click', function (e) {
      const { target } = e;
      operand += target.textContent;
      renderScreen(operand);
      handler(+operand);
    });
  });
};

//HANDLE OPERATION

export const addHandlerOperation = function (handler) {
  const operations = document.querySelectorAll('.operator');
  operations.forEach(function (operation) {
    operation.addEventListener('click', function (e) {
      const { target } = e;
      handler(target.classList[0]);
      operand = '';
    });
  });
};

const clearScreen = function () {
  calcScreen.textContent = '';
};

export const renderScreen = function (displayValue = 0) {
  console.log(displayValue);
  calcScreen.textContent = displayValue;
};
