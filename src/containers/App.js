import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//routes
import NavBar from '../components/NavBar';
import Home from './Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

class App extends Component {

  //when someone signs up this is triggered
  onSubmit = (event) => {
    event.preventDefault()
  }

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
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/sign-up" render={(routerProps)=><SignUp {...routerProps} onSubmit={this.onSubmit}/>} />
            </div>
          </Router>
        </div>
    </div>
    );
  }
}

export default App;
