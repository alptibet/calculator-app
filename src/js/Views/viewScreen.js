const calcScreen = document.querySelector('.screen__result');
let operand = '';

export const addHandlerUpdateScreen = function () {
  const nums = document.querySelectorAll('.operand');
  renderScreen();
  nums.forEach(function (num) {
    num.addEventListener('click', function (e) {
      const { target } = e;
      operand += target.textContent;
      console.log(operand);
      renderScreen(operand);
    });
  });
};

//ADDITION
export const addHandlerAddition = function (handler) {
  const plus = document.querySelector('.plus');
  plus.addEventListener('click', function (e) {
    const operand1 = +calcScreen.textContent;
    handler(operand1);
    clearScreen();
    operand = '';
  });
};

const clearScreen = function () {
  calcScreen.textContent = '';
};

const renderScreen = function (displayValue = 0) {
  console.log(displayValue);
  calcScreen.textContent = displayValue;
};
