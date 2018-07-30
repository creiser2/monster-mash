import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//routes
import NavBar from '../components/NavBar';
import Home from './Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import GenerateMonster from '../components/GenerateMonster';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //when someone logs in this is triggered
  handleLogin = (event, loginState) => {
    event.preventDefault();
  };

  //when someone signs up this is triggered
  handleSignUpSubmit = (event, formInfo) => {
    event.preventDefault();
    console.log(formInfo);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="gutter">
            <Route exact path="/" component={Home} />
            <Route exact path="/draw" component={Home} />
            <Route
              exact
              path="/login"
              render={routerProps => (
                <Login {...routerProps} onSubmit={this.handleLogin} />
              )}
            />
            <Route
              exact
              path="/sign-up"
              render={routerProps => (
                <SignUp
                  {...routerProps}
                  value={this.state.signUpValue}
                  onSubmit={this.handleSignUpSubmit}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
