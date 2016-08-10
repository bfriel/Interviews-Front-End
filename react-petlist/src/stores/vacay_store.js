const Store = require('flux/utils').Store,
      AppDispatcher = require('../dispatcher/dispatcher');

let _vacays = [];

const VacayStore = new Store(AppDispatcher);

VacayStore.all = function () {
  return _vacays.slice();
};

VacayStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "UPDATE_VACAYS":
      _vacays = payload.vacays.search;
      VacayStore.__emitChange();
      break;
  }
};

module.exports = VacayStore;
