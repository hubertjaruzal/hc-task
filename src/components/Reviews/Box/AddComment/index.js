import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../../../Common/Spinner';

import { addComment } from '../../../../redux/actions/Reviews';

import './styles.scss';

class AddComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCommentArea: false,
      commentValue: '',
      isLoading: false
    }

    this.handleAddCommentClick = this.handleAddCommentClick.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
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

  setIsLoading(value) {
    this.setState({
      isLoading: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setIsLoading(true);
    this.props.addComment(this.props.reviewID, this.state.commentValue, () => this.setIsLoading(false));
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
            <button
              disabled={!this.state.commentValue.length || this.state.isLoading}
              className="add-comment-btn"
              type="submit"
            >
              {
                this.state.isLoading ?
                <Spinner/> :
                <span>Add Comment</span>
              }
            </button>
          </form>
        }
      </div>
    );
  }
}

AddComment.propTypes = {
  revaddCommentiew: PropTypes.func,
  reviewID: PropTypes.number,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addComment,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddComment);
