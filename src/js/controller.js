import * as model from './model.js';
import * as viewSetTheme from './Views/viewSetTheme';
import * as viewInitialThemeSelect from './Views/viewInitialThemeSelect';
import * as viewRenderTheme from './Views/viewRenderTheme';
import * as viewScreen from './Views/viewScreen';
import * as viewAddition from './Views/viewAddHandlerAddition';
import * as viewSubstraction from './Views/viewAddHandlerSubstraction';
import * as viewMultiplication from './Views/viewAddHandlerMultiplication';
import * as viewDivision from './Views/viewAddHandlerDivision';
import * as viewDeletion from './Views/viewAddHandlerDeletion';

const controlInitialThemeSelect = function () {
  const initialTheme = model.setInitialTheme();
  viewRenderTheme.renderTheme(initialTheme);
};

const controlThemeSelect = function (theme) {
  model.setTheme(theme);
  viewRenderTheme.renderTheme(theme);
};

const controlScreen = function () {
  // model
};

const controlAddition = function () {
  //
};

const controlSubstraction = function () {
  //
};

const controlMultiplication = function () {
  //
};

const controlDivision = function () {
  //
};

const controlDeletion = function () {
  //
};

const init = function () {
  viewInitialThemeSelect.initialThemeSelect(controlInitialThemeSelect);
  viewSetTheme.addHandlerThemeSelect(controlThemeSelect);
  viewScreen.addHandlerUpdateScreen(controlScreen);
  viewAddition.viewAddHandlerAddition(controlAddition);
  viewSubstraction.viewAddHandlerSubstraction(controlSubstraction);
  viewMultiplication.viewAddHandlerMultiplication(controlMultiplication);
  viewDivision.viewAddHandlerDivision(controlDivision);
  viewDeletion.viewAddHandlerDeletion(controlDeletion);
};

init();
