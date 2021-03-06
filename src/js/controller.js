import * as model from './model.js';
import * as viewSetTheme from './Views/viewSetTheme.js';
import * as viewRenderTheme from './Views/viewRenderTheme.js';
import * as updateDisplay from './Views/viewDisplay.js';
import * as viewAddHandlerOperand from './Views/viewAddHandlerOperand.js';
import * as viewAddHandlerOperation from './Views/viewAddHandlerOperation.js';
import * as viewDelete from './Views/viewDelete.js';
import * as viewReset from './Views/viewReset.js';

const controlInitialThemeSelect = function () {
  const initialTheme = model.setInitialTheme();
  model.setTheme(initialTheme);
  viewRenderTheme.renderTheme(initialTheme);
};

const controlThemeSelect = function (theme) {
  model.setTheme(theme);
  viewRenderTheme.renderTheme(theme);
};

const controlUpdateDisplay = function () {
  updateDisplay.updateDisplay(model.state.displayValue);
};

const controlOperand = function (operand) {
  model.setOperand(operand);
  updateDisplay.updateDisplay(model.state.displayValue);
};

const controlOperation = function (operator) {
  model.setOperator(operator);
  updateDisplay.updateDisplay(model.state.displayValue);
};

const controlDelete = function (operand) {
  model.deleteOperand(operand);
  updateDisplay.updateDisplay(model.state.displayValue);
};

const controlReset = function () {
  model.resetCalculator();
  updateDisplay.updateDisplay(model.state.displayValue);
};

const init = function () {
  controlInitialThemeSelect();
  controlUpdateDisplay();
  viewSetTheme.addHandlerThemeSelect(controlThemeSelect);
  viewAddHandlerOperand.handlerNums(controlOperand);
  viewAddHandlerOperation.handlerOperation(controlOperation);
  viewDelete.addHandlerDelete(controlDelete);
  viewReset.addHandlerReset(controlReset);
};

init();
