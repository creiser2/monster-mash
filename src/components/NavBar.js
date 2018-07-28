import React from 'react';
import { NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
};

export const NavBar = props => {
  return (
    <div className="px05 fa f flr">
      <NavLink className="px05 fa flr" to="/">
        Home
      </NavLink>
      <NavLink className="px05 fa flr" to="/login">
        Login
      </NavLink>
      <NavLink className="px05 fa flr" to="/sign-up">
        Sign Up
      </NavLink>
    </div>
  );
};

export default NavBar;
