const Dispacther = require('flux').Dispatcher;
var AppDispacther = new Dispacther();
const ListStore = require('./stores/ListStore');

AppDispacther.register(function(action) {
  switch (action.type) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItem(action.text);
      ListStore.emitChange();
      break;
    default:
  }
});

module.exports = AppDispacther;
