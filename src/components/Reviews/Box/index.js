import React, { Component } from 'react';

import User from './User';
import Thumb from './Thumb';
import Rate from './Rate';
import Comment from './Comment';

import './styles.scss';

class Box extends Component {
  render() {
    return (
      <li className="box">
        <User user={this.props.review.user}/>
        <span className="box-creation-date">{this.props.review.creation_date}</span>
        <h2 className="box-title">{this.props.review.title}</h2>
        <div className="box-opinion">
          <Thumb like={this.props.review.like}/>
          <Rate rate={this.props.review.rate}/>
        </div>
        <p className="box-desc">
          {this.props.review.desc}
        </p>
        {
            this.props.review.comment ?
            <Comment thumb={this.props.review.comment}/> :
            <button>Add Comment</button>
        }
      </li>
    );
  }
}

export default Box;
