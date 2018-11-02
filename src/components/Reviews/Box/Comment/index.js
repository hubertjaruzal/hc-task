import React, { Component } from 'react';
import User from './User';

import './styles.scss';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <span className="comment-header">Comment</span>
        <p className="comment-text">{this.props.comment.text}</p>
        <User user={this.props.comment.user} />
      </div>
    );
  }
}

export default Comment;
