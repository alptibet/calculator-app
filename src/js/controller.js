import * as model from './model';
import * as viewSetTheme from './Views/viewSetTheme';
import * as viewInitialThemeSelect from './Views/viewInitialThemeSelect';
import * as viewRenderTheme from './Views/viewRenderTheme';
import * as updateDisplay from './Views/viewDisplay';
import * as viewAddHandlerOperand from './Views/viewAddHandlerOperand';
import * as viewAddHandlerOperation from './Views/viewAddHandlerOperation';
import { update } from 'lodash';

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

const controlOperand = function (operand) {
  model.setOperand(operand);
  updateDisplay.updateDisplay(model.state.displayValue);
};

const controlOperation = function (operator) {
  model.setOperator(operator);
  updateDisplay.updateDisplay(model.state.displayValue);
};

const init = function () {
  viewInitialThemeSelect.initialThemeSelect(controlInitialThemeSelect);
  viewSetTheme.addHandlerThemeSelect(controlThemeSelect);
  controlUpdateDisplay();
  viewAddHandlerOperand.handlerNums(controlOperand);
  viewAddHandlerOperation.handlerOperation(controlOperation);
};
init();
