var MyButton = React.createClass({

  render: function () {
    var items = this.props.items.map((item, i)=>(<li key={i}>{item}</li>));
    return (
      <div>
        <button onClick={this.props.onClick}>my button</button>
        <ul>{items}</ul>
      </div>
    );
  }

});

module.exports = MyButton;