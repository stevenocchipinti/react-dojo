var React = require('react');

var CommentList = require('./CommentList.js');
var CommentForm = require('./CommentForm.js');

var CommentBox = React.createClass({
  getInitialState() {
    return {
      comments: [
        {author: "Joe", text: "This is a comment"},
        {author: "Jack", text: "This is *another* comment"}
      ]
    };
  },

  addComment(newComment) {
    var comments = this.state.comments;
    comments.push(newComment);
    this.setState(comments);
  },

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.comments} />
        <CommentForm onSubmit={this.addComment} />
      </div>
    );
  }
});

module.exports = CommentBox;
