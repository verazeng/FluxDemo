const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
  items: [],

  getAll() {
    return this.items;
  },

  addNewItem(data) {
    this.items.push(data);
  },

  emitChange() {
    this.emit('change');
  },

  addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
});

module.exports = ListStore;