import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleUsernameInput = event => {
    this.setState({
      username: event.target.value
    });
  };

  handlePasswordInput = event => {
    this.setState({
      password: event.target.value
    });
  };

  render() {

    return(
      <form onSubmit = {(event) => this.props.onSubmit(event,this.state)} className="mw-1 mxa">
        <label>
          username:
          <input type = "text" value = {this.state.username} onChange = {this.handleUsernameInput} />
        </label>
        <label>
          password:
          <input type = "password" value = {this.state.password} onChange = {this.handlePasswordInput} />
        </label>
        <input type = "submit" value = "Submit" />
      </form>
    );
  }
}

export default Login;
