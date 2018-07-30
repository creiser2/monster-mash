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
    this.state = {
      token: "",
      username: "",
      bio: "",
      single: false,
      logged_in: false,
    };
  }

  //when someone logs in this is triggered
  handleLogin = (event, loginState) => {
    event.preventDefault();
  };

  //when someone signs up this is triggered
  handleSignUpSubmit = (event, formInfo) => {
    event.preventDefault();
    fetch('http://localhost:4000/api/v1/users', {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({
        username: formInfo.username,
        password: formInfo.password,
        bio: formInfo.bio,
        single: formInfo.single
      })
    }).then(response => response.json())
    .then(json => {
      localStorage.setItem("token", json.token)
      this.setState({
        token: json.token,
        username: json.user_details.username,
        bio: json.user_details.bio,
        single: json.user_details.single,
        logged_in: true
    })})
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
