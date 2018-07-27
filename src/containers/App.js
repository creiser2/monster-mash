import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//routes
import MonsterContainer from './MonsterContainer';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

class App extends Component {



  render() {
    return (
      <div className="App">
        <div className="x f aic jce">
          <div className="fa jss">
            <h3>Monster Mash</h3>
          </div>
          <Router>
            <div className="fa jss">
              <NavBar />
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/sign-up" component={SignUp} />
            </div>
          </Router>
        </div>
        <MonsterContainer />
        <div className="guyBG mxa" />
      </div>
    );
  }
}

export default App;
