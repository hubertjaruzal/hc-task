import React, { Component } from 'react';

import Box from './Box';
import {reviews} from '../../utils/data';

import './styles.scss';

class Reviews extends Component {
  render() {
    return (
      <ul className="review-list">
        {
          reviews.map((review) => (
            <Box 
              key={review.id}
              review={review}
            />
          ))
        }
      </ul>
    );
  }
}

export default Reviews;
