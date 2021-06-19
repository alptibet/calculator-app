export const addHandlerReset = function (handler) {
  const numpad = document.querySelector('.numpad');
  numpad.addEventListener('click', function (event) {
    const { target } = event;
    if (!target.classList.contains('numpad__reset')) return;
    handler();
  });
};
