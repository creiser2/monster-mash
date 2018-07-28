import React, { Component } from 'react';
import { SketchField, Tools } from 'react-sketch';

class MonsterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getImage = () => {
    console.log(document.getElementsByTagName('canvas')[0].toDataURL());
  };
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
        <button onClick={this.getImage}>Get Image</button>
      </div>
    );
  }
}

export default MonsterContainer;
