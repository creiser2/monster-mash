import React, { Component } from 'react';

class GenerateMonster extends Component {
  randomPart = (part, alt) => {
    if (part.length) {
      return part[Math.floor(Math.random() * part.length)];
    } else {
      return `http://insta.topset.co/${alt}.png`;
    }
  };

  refreshMonster = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <div className="monster ac">
        <button onClick={this.refreshMonster} className="px2 py05 mb1 h5">
          New Monster
        </button>
        <img
          src={this.randomPart(this.props.heads, 'head')}
          width="100%"
          height="auto"
          className="block mxa"
          alt="head"
        />
        <img
          src={this.randomPart(this.props.body, 'body')}
          width="100%"
          height="auto"
          className="block mxa"
          alt="body"
        />
        <img
          src={this.randomPart(this.props.feet, 'feet')}
          width="100%"
          height="auto"
          className="block mxa"
          alt="feet"
        />
      </div>
    );
  }
}

export default GenerateMonster;
