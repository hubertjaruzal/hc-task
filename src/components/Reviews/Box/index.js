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
        <User/>
        <Thumb/>
        <Rate/>
        <Comment/>
      </li>
    );
  }
}

export default Box;
