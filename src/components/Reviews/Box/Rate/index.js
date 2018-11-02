import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

class Rate extends Component {
  render() {
    return (
      <div className="rate">
        <div>
          {
            [...Array(6).keys()].map((rate) => (
              <FontAwesomeIcon
                key={rate}
                icon="star"
                className={`star ${(rate + 1) > this.props.rate ? 'star-unfilled' : 'star-filled'}`}
              />
            ))
          }
        </div>
        <span className="rate-text">{`${this.props.rate}/6`}</span>
      </div>
    );
  }
}

export default Rate;
