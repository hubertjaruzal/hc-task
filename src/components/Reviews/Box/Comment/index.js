import React, { Component } from 'react';
import User from './User';

import './styles.scss';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFullText: false
    }
    
    this.expandText = this.expandText.bind(this);
  }

  expandText() {
    this.setState({
      showFullDesc: true
    });
  }

  render() {
    return (
      <div className="comment">
        <span className="comment-header">Comment</span>
        <p
          className={`comment-text ${this.state.showFullDesc ? 'comment-text-open' : ''}`}
          onClick={this.expandText}
        >
          {this.props.comment.text}
        </p>
        <User user={this.props.comment.user} />
      </div>
    );
  }
}

export default Comment;
