import React, { Component } from 'react'


class Login extends Component {
  render() {
    console.log(this.props)
    return(
      <form onSubmit={this.props.onSubmit}>
        <label>
          username:
          <input value={""} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Login
