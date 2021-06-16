export const handlerOperation = function (handler) {
  const numpad = document.querySelector('.numpad');
  numpad.addEventListener('click', function (event) {
    const { target } = event;
    if (!target.matches('button')) return;

    if (target.classList.contains('operator')) {
      operation = target.classList[0];
      handler(operation);
    }
  });
};
