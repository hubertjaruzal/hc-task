import React, { Component } from 'react';

import './styles.scss';

class AddComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCommentArea: false,
      commentValue: ''
    }

    this.handleAddCommentClick = this.handleAddCommentClick.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddCommentClick() {
    this.setState({
      showCommentArea: true
    });
  }

  handleCommentChange(e) {
    this.setState({
      commentValue: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="add-comment">
        {
          !this.state.showCommentArea ?
          <button className="add-comment-btn" onClick={this.handleAddCommentClick}>
            Add Comment
          </button> :
          <form className="add-comment-form" onSubmit={this.handleSubmit}>
            <textarea 
              className="add-comment-textarea"
              placeholder="Add your comment..."
              value={this.state.commentValue}
              onChange={this.handleCommentChange}
            />
            <button className="add-comment-btn" type="submit">
              Add Comment
            </button>
          </form>
        }
      </div>
    );
  }
}

export default AddComment;
