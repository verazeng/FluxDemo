window.React = require('react');
const ReactDom = require('react-dom');
const FirstController = require('./components/FirstController');

ReactDom.render(<FirstController/>, document.querySelector('#entrance'));