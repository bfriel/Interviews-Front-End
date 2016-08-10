const VacayActions = require('../actions/vacay_actions');

const VacayUtil = {
  fetchAllVacays() {
    $.ajax({
      url: "http://localhost:3000/static/search.json",
      success(vacays) {
        VacayActions.receiveAllVacays(vacays);
      }
    });
  }
};

module.exports = VacayUtil;
