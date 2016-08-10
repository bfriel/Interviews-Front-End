const AppDispatcher = require('../dispatcher/dispatcher'),
      Store = require('flux/utils').Store;

let _params = {filter: ""};

const FilterStore = new Store(AppDispatcher);

FilterStore.params = function () {
  return Object.assign({}, _params);
};

FilterStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "UPDATE_FILTER":
      _params.filter = payload.filter;
      FilterStore.__emitChange();
      break;
  }
};

module.exports = FilterStore;
