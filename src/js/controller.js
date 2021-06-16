import * as model from './model.js';
import * as viewSetTheme from './Views/viewSetTheme';
import * as viewInitialThemeSelect from './Views/viewInitialThemeSelect';
import * as viewRenderTheme from './Views/viewRenderTheme';
import * as updateDisplay from './Views/viewDisplay';
import * as viewAddHandlerKeyPress from './Views/viewAddHandlerKeyPress';

const controlInitialThemeSelect = function (theme) {
  const initialTheme = model.setInitialTheme();
  viewRenderTheme.renderTheme(initialTheme);
};

const controlThemeSelect = function (theme) {
  model.setTheme(theme);
  viewRenderTheme.renderTheme(theme);
};

const controlUpdateDisplay = function () {
  updateDisplay.updateDisplay(model.state.displayValue);
};

const controlOperation = function (operand, operation) {
  model.setOperation(operand, operation);
  updateDisplay.updateDisplay(model.state.displayValue);
};

const init = function () {
  viewInitialThemeSelect.initialThemeSelect(controlInitialThemeSelect);
  viewSetTheme.addHandlerThemeSelect(controlThemeSelect);
  controlUpdateDisplay();
  viewAddHandlerKeyPress.handlerKeyPress(controlOperation);
};
init();
