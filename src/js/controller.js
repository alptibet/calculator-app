import * as model from './model.js';
import * as viewSetTheme from './Views/viewSetTheme';
import * as viewInitialThemeSelect from './Views/viewInitialThemeSelect';
import * as viewRenderTheme from './Views/viewRenderTheme';
import * as viewScreen from './Views/viewScreen';

const controlInitialThemeSelect = function (setTheme) {
  const initialTheme = model.setInitialTheme(setTheme);
  viewRenderTheme.renderTheme(initialTheme);
};

const controlThemeSelect = function (theme) {
  model.setTheme(theme);
  viewRenderTheme.renderTheme(theme);
};

const controlScreen = function () {
  // model
};

const init = function () {
  viewInitialThemeSelect.initialThemeSelect(controlInitialThemeSelect);
  viewSetTheme.addHandlerThemeSelect(controlThemeSelect);
  viewScreen.addHandlerUpdateScreen(controlScreen);
};

init();
