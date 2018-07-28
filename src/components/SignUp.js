import React, { Component } from 'react'


class SignUp extends Component {
  render() {
    console.log(this.props.route)
    return(
      <form onSubmit={this.props.onSubmit}>
        <label>
          Essay:
          <textarea value={""} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default SignUp
