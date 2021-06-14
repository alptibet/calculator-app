export const addHandlerThemeSelect = function (handler) {
  const button = document.querySelector('.theme-selector__switch-btn');
  button.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(button.dataset.theme);
    handler(button.dataset.theme);
  });
};

export const renderTheme = function () {
  //
};
