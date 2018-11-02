import React, { Component } from 'react';

import './styles.scss';

class User extends Component {
  render() {
    return (
      <div className="comment-user">
        <img className="user-avatar" src={this.props.user.avatar} alt="avatar"></img>
        <span className="user-name">{this.props.user.name}</span>
        <span className="user-role">{this.props.user.role}</span>
      </div>
    );
  }
}

export default User;
