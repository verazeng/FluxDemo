const AppDispatcher = require('../AppDispatcher');

var ButtonActions = {
  addNewItem(text) {
    AppDispatcher.dispatch({
      type: 'ADD_NEW_ITEM',
      text: text
    });
  }
};

module.exports = ButtonActions;