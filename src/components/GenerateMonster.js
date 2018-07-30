import React, { Component } from 'react';

class GenerateMonster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heads: [],
      body: [],
      feet: []
    };
  }

  componentDidMount() {
    // fetch('http://localhost:3000/api/v1/heads')
    //   .then(r => r.json())
    //   .then(r => this.setState({ heads: [r] }));
    // fetch('http://localhost:3000/api/v1/hands')
    //   .then(r => r.json())
    //   .then(r => this.setState({ hands: [r] }));
    // fetch('http://localhost:3000/api/v1/feet')
    //   .then(r => r.json())
    //   .then(r => this.setState({ feet: [r] }));
  }

  randomPart = (part, alt) => {
    if (part.length) {
      return part[Math.floor(Math.random() * part.length)];
    } else {
      return `http://insta.topset.co/${alt}.png`;
    }
  };

  render() {
    return (
      <div className="monster">
        <img
          src={this.randomPart(this.state.heads, 'head')}
          width="100%"
          height="auto"
          className="block mxa"
          alt="head"
        />
        <img
          src={this.randomPart(this.state.body, 'body')}
          width="100%"
          height="auto"
          className="block mxa"
          alt="body"
        />
        <img
          src={this.randomPart(this.state.feet, 'feet')}
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
