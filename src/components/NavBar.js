import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

class NavBar extends Component {
  constructor(props) {
    super(props);
    console.log('navbar', this.props);
    this.state = {
      displayValue: this.props.username
    };
  }

  handleMouseEnterUsername = () => {
    this.setState({
      displayValue: 'LOGOUT'
    });
  };

  handleMouserLeaveUsername = () => {
    this.setState(
      {
        displayValue: this.props.username
      },
      () => console.log('mouseover', this.props)
    );
  };

  render() {
    return (
      <div className="x f aic jce px1">
        <NavLink to="/" className="fa jss no-under">
          <img src={logo} className="logo" alt="Monster Mash" />
        </NavLink>
        <div className="fa jss">
          <div className="flr f aic l4">
            <NavLink to="/" className="px05 fa">
              Generate
            </NavLink>
            <NavLink to="/draw" className="px05 fa">
              Draw
            </NavLink>
            {!!this.props.username ? (
              <NavLink to="/" className="px05 fa">
                <button
                  onClick={this.props.onClick}
                  onMouseEnter={this.handleMouseEnterUsername}
                  onMouseLeave={this.handleMouserLeaveUsername}
                >
                  {this.state.displayValue === ''
                    ? this.props.username
                    : this.state.displayValue}
                </button>
              </NavLink>
            ) : (
              <div>
                <NavLink to="/login" className="px05 fa">
                  Login
                </NavLink>

                <NavLink to="/sign-up" className="px05 fa">
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
