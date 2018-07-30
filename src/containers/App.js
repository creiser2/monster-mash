import React, { Component } from 'react';
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

  //when someone signs up this is triggered
  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="gutter">
            <Route exact path="/" component={GenerateMonster} />
            <Route exact path="/draw" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/sign-up"
              render={routerProps => (
                <SignUp
                  {...routerProps}
                  value={this.state.signUpValue}
                  onSubmit={this.onSubmit}
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
