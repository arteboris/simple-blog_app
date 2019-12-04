import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const activeStyle = {
  color: 'palevioletred',
};

const Navigation = () => (
  <ul className={css.navigation}>
    <li>
      <NavLink to="/home" activeStyle={activeStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Posts
      </NavLink>
    </li>
    <li>
      <NavLink to="/posts/new" activeStyle={activeStyle}>
        Create Post
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
