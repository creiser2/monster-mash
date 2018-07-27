import React, { Component } from 'react'


class Login extends Component {
  state={
    username: "",
    password: "",
  }

  handleUsernameInput = (event) => {
      this.setState({
        username: event.target.value
      })
  }

  handlePasswordInput = (event) => {
      this.setState({
        password: event.target.value
      })
  }


  render() {

    return(
      <form onSubmit = {this.props.onSubmit} >
        <label>
          username:
          <input value = {this.state.username} onChange = {this.handleUsernameInput} />
        </label>
        <label>
          password:
          <input value = {this.state.password} onChange = {this.handlePasswordInput} />
        </label>
        <input type = "submit" value = "Submit" />
      </form>
    )
  }
}

export default Login
