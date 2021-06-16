export const handlerKeyPress = function (handler) {
  let operand = '';
  let operation;
  const numpad = document.querySelector('.numpad');
  numpad.addEventListener('click', function (event) {
    const { target } = event;
    if (!target.matches('button')) return;

    if (target.classList.contains('operand')) {
      operand += +target.textContent;
    }

    if (target.classList.contains('operator')) {
      operation = target.classList[0];
      operand = '';
    }

    handler(operand, operation);
  });
};
