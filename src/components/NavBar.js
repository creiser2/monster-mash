import React from 'react';
import { NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

export const NavBar = (props) => {
  return(
    <div className="x f aic jce">
      <div className="fa jss">
        <h3>Monster Mash</h3>
      </div>
    <div className="fa jss flr">
      <NavLink to="/home" className="px05 fa flr">Home</NavLink>
      <NavLink to="/login" className="px05 fa flr">Login</NavLink>
      <NavLink to="/sign-up" className="px05 fa flr">Sign Up</NavLink>
    </div>
    </div>
  )
}

export default NavBar
