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
    <div className="x f aic jce px1">
      <div className="fa jss">
        <h3>Monster Mash</h3>
      </div>
      <div className="fa jss">
        <div className="flr f aic l4">
          <NavLink to="/" className="px05 fa">
            Generate
          </NavLink>
          <NavLink to="/draw" className="px05 fa">
            Draw
          </NavLink>
          <NavLink to="/login" className="px05 fa">
            Login
          </NavLink>
          <NavLink to="/sign-up" className="px05 fa">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
