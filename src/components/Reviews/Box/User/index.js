import React, { Component } from 'react';

import Avatar from '../../../Common/Avatar';

import './styles.scss';

class User extends Component {
  render() {
    return (
      <div className="review-user">
        <Avatar avatar={this.props.user.avatar}/>
        <span className="user-name">{this.props.user.name}</span>
      </div>
    );
  }
}

export default User;
