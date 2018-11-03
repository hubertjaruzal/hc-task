import React from 'react';
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/images/hc-logo.svg';
import './styles.scss';

const Header = () => {
  return (
    <nav>
      <Logo className="logo"/>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/reviews" activeClassName="active">Reviews</NavLink>
        </li>
        <li>
          <NavLink to="/hotel-manager" activeClassName="active">Hotel Manager</NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName="active">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
