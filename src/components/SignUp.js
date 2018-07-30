import React, { Component } from 'react'


class SignUp extends Component {

  state = {
    "bio": "",
    "username": "",
    "password": "",
    "single": false,
  }


  handleBioChange = (event) => {
    this.setState({
      bio: event.target.value
    })
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSingleChange = (event) => {
    console.log(event.target.checked)
    this.setState({
      single: event.target.checked
    })
  }

  render() {
    return(
      <form onSubmit={(event) => this.props.onSubmit(event, this.state)} className="mw-1 mxa">
          Bio:
          <textarea value={this.state.bio} onChange={this.handleBioChange}/>
          Username:
          <input value={this.state.username} onChange={this.handleUsernameChange}/>
          Password:
          <input value={this.state.password} onChange={this.handlePasswordChange}/>
          Single?
          <input className="inline-block x50" type="checkbox" value={this.state.single} onChange={this.handleSingleChange}/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default SignUp
