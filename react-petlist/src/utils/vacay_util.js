const VacayActions = require('../actions/vacay_actions');

const VacayUtil = {
  fetchAllVacays() {
    $.ajax({
      url: "http://localhost:3000/static/search.json",
      success(vacays) {
        VacayActions.receiveAllVacays(vacays);
      }
    });
  },

  fetchFilteredVacays(queryString){
    let type = queryString.slice(9);
    $.ajax({
      url: "http://localhost:3000/static/search.json" + queryString,
      success(vacays) {
        VacayActions.receiveFilteredVacays(vacays, type);
      }
    });
  }
};

module.exports = VacayUtil;
