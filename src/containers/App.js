import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//routes
import NavBar from '../components/NavBar';
import Home from './Home';
import Login from '../components/Login';
import UserPage from '../components/UserPage'
import SignUp from '../components/SignUp';
import GenerateMonster from '../components/GenerateMonster';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      username: '',
      bio: '',
      single: false,
      logged_in: false,
      userid: null,
      heads: [],
      body: [],
      feet: []
    };
  }

  createPartsArray = (json, partName) => {
    const partsArray = json.map(part => part.url);
    this.setState({ [partName]: partsArray });
  };

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/heads')
      .then(r => r.json())
      .then(r => this.createPartsArray(r, 'heads'));
    fetch('http://localhost:3000/api/v1/hands')
      .then(r => r.json())
      .then(r => this.createPartsArray(r, 'body'));
    fetch('http://localhost:3000/api/v1/feet')
      .then(r => r.json())
      .then(r => this.createPartsArray(r, 'feet'));
  }

  //when someone logs in this is triggered
  handleLogin = (event, loginState) => {
    event.preventDefault();
    fetch('http://localhost:3000/api/v1/login', {
      headers: { 'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({
        username: loginState.username,
        password: loginState.password
      })
    }).then(response => response.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      this.setState({
      token: json.token,
      username: json.user_details.username,
      bio: json.user_details.bio,
      single: json.user_details.single,
      userid: json.user_details.id,
      logged_in: true
    })})
  };

  //when someone signs up this is triggered
  handleSignUpSubmit = (event, formInfo) => {
    event.preventDefault();
    fetch('http://localhost:3000/api/v1/users', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        username: formInfo.username,
        password: formInfo.password,
        bio: formInfo.bio,
        single: formInfo.single
      })
    })
      .then(response => response.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          token: json.token,
          username: json.user_details.username,
          bio: json.user_details.bio,
          single: json.user_details.single,
          userid: json.user_details.id,
          logged_in: true
        });
      });
  };

  render() {

    return (
      <Router>
        <div className="App">
          <NavBar username={this.state.username}/>
          <div className="gutter">
            <Route
              exact
              path="/"
              component={() => (
                <GenerateMonster
                  heads={this.state.heads}
                  body={this.state.body}
                  feet={this.state.feet}
                />
              )}
            />
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
