import React, { Component } from 'react';
import { SketchField, Tools } from 'react-sketch';

class MonsterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SketchField
        width="1024px"
        height="768px"
        tool={Tools.Pencil}
        lineColor="black"
        lineWidth={6}
      />
    );
  }
}

export default MonsterContainer;
