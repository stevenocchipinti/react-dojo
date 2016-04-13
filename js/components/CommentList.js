var React = require('react');

var Comment = require('./Comment.js');

var CommentList = React.createClass({
  commentNodes() {
    return this.props.data.map((comment, i) => {
      return (
        <Comment author={comment.author} key={i}>
          {comment.text}
        </Comment>
      );
    });
  },

  render() {
    return (
      <div className="commentList">
        {this.commentNodes()}
      </div>
    );
  }
});

module.exports = CommentList;
