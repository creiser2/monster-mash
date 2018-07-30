import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    bio: '',
    username: '',
    password: '',
    single: false
  };

  handleBioChange = event => {
    this.setState({
      bio: event.target.value
    });
  };

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSingleChange = event => {
    console.log(event.target.checked);
    this.setState({
      single: event.target.checked
    });
  };

  render() {
    return (
      <form
        className="mw-1 mxa"
        onSubmit={event => this.props.onSubmit(event, this.state)}
      >
        <label>Bio:</label>
        <textarea value={this.state.bio} onChange={this.handleBioChange} />
        <label>Username:</label>
        <input
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <label>Password:</label>
        <input
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <label>Single?</label>
        <input
          className="inline-block x50"
          type="checkbox"
          value={this.state.single}
          onChange={this.handleSingleChange}
        />
        <label className="x">Profile Pic:</label>
        <input type="file" name="image" id="image_upload" accept="image/*" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignUp;
