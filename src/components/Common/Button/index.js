import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import './styles.scss';

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className="common-btn"
      type={props.type}
      onClick={props.onClick}
    >
      {
        props.isLoading ?
        <Spinner/> :
        <span>{props.text}</span>
      }
    </button>
  );
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  value: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  isLoading: false,
  disabled: false
};

export default Button;
