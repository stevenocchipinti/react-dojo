var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox = require('./components/CommentBox.js');

require('../css/style.sass');

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
