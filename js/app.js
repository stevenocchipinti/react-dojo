var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');


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


var Comment = React.createClass({
  rawMarkup() {
    var rawMarkup = marked(
      this.props.children.toString(),
      {sanitize: true}
    );
    return { __html: rawMarkup };
  },

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});


var CommentForm = React.createClass({
  getInitialState() {
    return {author: '', text: ''};
  },

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  },

  handleTextChange(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onSubmit(this.state);
    this.setState({author: '', text: ''});
  },

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});


ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);