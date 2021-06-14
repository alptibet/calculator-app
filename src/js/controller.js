import * as model from './model.js';
import * as viewTheme from './Views/viewTheme';

const controlThemeSelect = function (theme) {
  model.themeSelect(theme);
  viewTheme.renderTheme();
};

const init = function () {
  viewTheme.addHandlerThemeSelect(controlThemeSelect);
};

init();
