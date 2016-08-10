const AppDispatcher = require('../dispatcher/dispatcher');

const FilterActions = {
  updateFilter(filter) {
    AppDispatcher.dispatch({
      actionType: "UPDATE_FILTER",
      filter: filter
    });
  }
};

module.exports = FilterActions;
