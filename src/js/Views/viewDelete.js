export const addHandlerDelete = function (handler) {
  const numpad = document.querySelector('.numpad');
  const displayValue = document.querySelector('.screen__result');
  numpad.addEventListener('click', function (event) {
    const { target } = event;
    if (!target.classList.contains('numpad__del')) return;
    const newValue = displayValue.textContent;
    handler(newValue.substring(0, newValue.length - 1));
  });
};
