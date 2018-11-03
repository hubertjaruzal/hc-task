import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

const Thumb = (props) => {
  return (
    <div className={`thumb thumb${props.like ? '-positive' : '-negative'}`}>
      { props.like ? <FontAwesomeIcon icon="thumbs-up"/> : <FontAwesomeIcon icon="thumbs-down"/>}
    </div>
  );
}

Thumb.propTypes = {
  review: PropTypes.number,
};

export default Thumb;
