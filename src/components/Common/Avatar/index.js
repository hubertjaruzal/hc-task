import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Avatar = (props) => {
  return (
    <img className="user-avatar" src={props.avatar} alt="avatar"></img>
  );
}

Avatar.propTypes = {
  avatar: PropTypes.string,
};

export default Avatar;
