import React, { Component } from 'react';
import PropTypes from 'prop-types';

import User from './User';
import Thumb from './Thumb';
import Rate from './Rate';
import Comment from './Comment';
import AddComment from './AddComment';

import './styles.scss';

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFullDesc: false,
    }
    
    this.expandDesc = this.expandDesc.bind(this);
  }

  expandDesc() {
    this.setState({
      showFullDesc: true
    });
  }

  render() {
    return (
      <li className="box">
        <User
          avatar={this.props.review.user.avatar}
          name={this.props.review.user.name}
        />
        <span className="box-creation-date">{this.props.review.creation_date}</span>
        <h2 className="box-title">{this.props.review.title}</h2>
        <div className="box-opinion">
          <Thumb like={this.props.review.like}/>
          <Rate rate={this.props.review.rate}/>
        </div>
        <p 
          className={`box-desc ${this.state.showFullDesc ? 'box-desc-open' : ''}`}
          onClick={this.expandDesc}
        >
          {this.props.review.desc}
        </p>
        {
            this.props.review.comment ?
            <Comment comment={this.props.review.comment}/> :
            <AddComment reviewID={this.props.review.id}/>
        }
      </li>
    );
  }
}

Box.propTypes = {
  review: PropTypes.object,
};

export default Box;
