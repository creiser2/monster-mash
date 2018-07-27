import React, { Component } from 'react';
import { SketchField, Tools } from 'react-sketch';

class MonsterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dashed border z1 abs sq">
        <SketchField
          width="100%"
          height="100%"
          tool={Tools.Pencil}
          lineColor="black"
          lineWidth={5}
        />
      </div>
    );
  }
}

export default MonsterContainer;
