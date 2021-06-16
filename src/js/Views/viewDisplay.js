export const updateDisplay = function (displayValue) {
  const display = document.querySelector('.screen__result');
  display.textContent = displayValue;
};
