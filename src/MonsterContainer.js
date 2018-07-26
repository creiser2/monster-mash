import React, { Component } from 'react';
import Two from 'two.js';

class MonsterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.line = null;
    this.two = null;
  }

  componentWillMount() {
    let two = new Two({
      type: Two.Types[this.props.type],
      fullscreen: true
    });
    this.two = new Two();
  }

  componentDidMount() {
    const stage = this.refs;
    console.log(stage);
    // this.two.appendTo(stage);
  }

  render() {
    return (
      <div>
        <div ref="stage" style={{ height: 100 + '%' }} />
      </div>
    );
  }
}

export default MonsterContainer;
