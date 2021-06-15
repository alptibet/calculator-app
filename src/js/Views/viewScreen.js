const screen = document.querySelector('.screen__result');

export const addHandlerUpdateScreen = function (handler) {
  const numpad = document.querySelector('.numpad');
  numpad.addEventListener('click', function (e) {
    const { target } = e;
    if (!e.target.classList.contains('operand')) return;
    screen.textContent += e.target.textContent;
  });
};

const clearScreen = function () {
  screen.textContent = '';
};
