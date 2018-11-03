import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../../../../Common/Avatar';

import './styles.scss';

const User = (props) => {
  return (
    <div className="comment-user">
      <Avatar avatar={props.avatar}/>
      <span className="user-name">{props.name}</span>
      <span className="user-role">{props.role}</span>
    </div>
  );
}

User.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
};

export default User;
