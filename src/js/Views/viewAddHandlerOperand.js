export const handlerNums = function (handler) {
  const numpad = document.querySelector('.numpad');
  numpad.addEventListener('click', function (event) {
    const { target } = event;
    if (!target.matches('button')) return;

    if (target.classList.contains('operand')) {
      handler(target.textContent);
    }
  });
};
