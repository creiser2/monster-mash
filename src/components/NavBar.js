import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

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
      <NavLink to="/" className="fa jss no-under">
        <img src={logo} className="logo" />
      </NavLink>
      <div className="fa jss">
        <div className="flr f aic l4">
          <NavLink to="/" className="px05 fa">
            Generate
          </NavLink>
          <NavLink to="/draw" className="px05 fa">
            Draw
          </NavLink>
          {!!props.username ?
            <NavLink to="/draw" className="px05 fa">
              Welcome, {props.username}
            </NavLink>
          :
          <div>
            <NavLink to="/login" className="px05 fa">
              Login
            </NavLink>

            <NavLink to="/sign-up" className="px05 fa">
              Sign Up
            </NavLink>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;
