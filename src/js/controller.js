import * as model from './model.js';
import * as viewSetTheme from './Views/viewSetTheme';
import * as viewInitialThemeSelect from './Views/viewInitialThemeSelect';
import * as viewRenderTheme from './Views/viewRenderTheme';
import * as viewScreen from './Views/viewScreen';

const controlInitialThemeSelect = function (theme) {
  const initialTheme = model.setInitialTheme();
  viewRenderTheme.renderTheme(initialTheme);
};

const controlThemeSelect = function (theme) {
  model.setTheme(theme);
  viewRenderTheme.renderTheme(theme);
};

const controlOperands = function (operand) {
  model.setOperands(operand);
};

const controlOperation = function (operation) {
  model.setOperation(operation);
};

const init = function () {
  viewInitialThemeSelect.initialThemeSelect(controlInitialThemeSelect);
  viewSetTheme.addHandlerThemeSelect(controlThemeSelect);
  viewScreen.addHandlerUpdateScreen(controlOperands);
  viewScreen.addHandlerOperation(controlOperation);
};

init();
