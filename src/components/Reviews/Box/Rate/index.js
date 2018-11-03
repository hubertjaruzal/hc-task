import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

const Rate = (props) => {
  return (
    <div className="rate">
      <div>
        {
          [...Array(6).keys()].map((rate) => (
            <FontAwesomeIcon
              key={rate}
              icon="star"
              className={`star ${(rate + 1) > props.rate ? 'star-unfilled' : 'star-filled'}`}
            />
          ))
        }
      </div>
      <span className="rate-text">{`${props.rate}/6`}</span>
    </div>
  );
}

Rate.propTypes = {
  rate: PropTypes.number,
};

export default Rate;
