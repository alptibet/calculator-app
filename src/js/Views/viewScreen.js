export const addHandlerUpdateScreen = function (handler) {
  const caret = document.querySelector('.screen__result');
  console.log(caret.textContent);
  if (caret.textContent !== '_') return;
  caret.animate(
    [
      { opacity: 1, easing: 'ease-in' },
      { opacity: 0, easing: 'ease-out' },
      { opacity: 1, easing: 'ease-out' },
    ],
    { duration: 1000, iterations: Infinity }
  );

  const numpad = document.querySelector('.numpad');
  numpad.addEventListener('click', function (e) {
    const { target } = e;
    if (!e.target.classList.contains('operand')) return;
    console.log(target.textContent);
  });
};
