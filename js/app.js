var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox = require('./components/CommentBox.js');

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
