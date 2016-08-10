const AppDispatcher = require('../dispatcher/dispatcher'),
      VacayUtil = require('../utils/vacay_util');

const VacayActions = {
  receiveAllVacays(vacays) {
    // Leaving console logs in to show API interaction
    console.log("receving all vacays");
    console.log(vacays.search);
    AppDispatcher.dispatch({
      actionType: "UPDATE_VACAYS",
      vacays: vacays
    });
  },

  receiveFilteredVacays(vacays, type) {
    // Leaving console logs in to show API interaction
    console.log("receiving " + type + " vacays");
    console.log(vacays.search);
    AppDispatcher.dispatch({
      actionType: "UPDATE_VACAYS",
      vacays: vacays
    });
  }
};

module.exports = VacayActions;
