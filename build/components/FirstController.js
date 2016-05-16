const ListStore = require('../stores/ListStore');
const MyButton = require('./MyButton');
const ButtonActions = require('../actions/ButtonActions');

var FirstController = React.createClass({
  getInitialState() {
    return {items: ListStore.getAll()};
  },

  createNewItem(event) {
    ButtonActions.addNewItem('new item');
  },

  onChange() {
    this.setState({items: ListStore.getAll()});
  },

  componentDidMount(){
    ListStore.addChangeListener(this.onChange);
  },

  componentWillUnmount() {
    ListStore.removeChangeListener(this.onChange);
  },

  render() {
    return (<MyButton
      items={this.state.items}
      onClick={this.createNewItem}
    />);
  }

});

module.exports = FirstController;

