import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const BoxContainer = (props) => {
  return (
    <div className="box-container">
      {props.children}
    </div>
  );
}

BoxContainer.propTypes = {
  children: PropTypes.node,
};

export default BoxContainer;
