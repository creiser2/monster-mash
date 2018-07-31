import React, { Component } from 'react'

import MonsterContainer from './MonsterContainer'

class Home extends Component {
  render() {
    return(
      <MonsterContainer userid={this.props.userid} username={this.props.username}/>
    )
  }
}

export default Home
