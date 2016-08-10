const AppDispatcher = require('../dispatcher/dispatcher'),
      VacayUtil = require('../utils/vacay_util');

const VacayActions = {
  receiveAllVacays(vacays) {
    AppDispatcher.dispatch({
      actionType: "VACAYS_RECEIVED",
      vacays: vacays
    });
  }
};

module.exports = VacayActions;
