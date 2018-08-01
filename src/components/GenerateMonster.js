import React, { Component } from 'react';

class GenerateMonster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heads: {},
      hands: {},
      feet: {}
    };
  }

  componentDidMount() {
    this.randomPart(this.props.heads, 'heads');
    this.randomPart(this.props.body, 'hands');
    this.randomPart(this.props.feet, 'feet');
  }

  randomPart = (part, alt) => {
    let selectedPart = '';
    if (part.length) {
      selectedPart = part[Math.floor(Math.random() * part.length)];
    } else {
      selectedPart = { part: `http://insta.topset.co/${alt}.png` };
    }

    this.setState(
      {
        [alt]: selectedPart
      },
      () => console.log('current state', this.state)
    );
  };

  refreshMonster = () => {
    this.randomPart(this.props.heads, 'heads');
    this.randomPart(this.props.body, 'hands');
    this.randomPart(this.props.feet, 'feet');
  };

  render() {
    return (
      <div className="monster ac">
        <button onClick={this.refreshMonster} className="px2 py05 mb1 h5">
          New Monster
        </button>
        <img
          src={this.state.heads.part}
          width="100%"
          height="auto"
          className="block mxa"
          alt="head"
          title={this.state.heads.username}
        />
        <img
          src={this.state.hands.part}
          width="100%"
          height="auto"
          className="block mxa"
          alt="body"
          title={this.state.hands.username}
        />
        <img
          src={this.state.feet.part}
          width="100%"
          height="auto"
          className="block mxa"
          alt="feet"
          title={this.state.feet.username}
        />
      </div>
    );
  }
}

export default GenerateMonster;
