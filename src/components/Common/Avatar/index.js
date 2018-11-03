import React from 'react';

import './styles.scss';

const Avatar = (props) => {
  return (
    <img className="user-avatar" src={props.avatar} alt="avatar"></img>
  );
}

export default Avatar;
