import React, { Component } from 'react';
import ArtistHover from './ArtistHover';

class GenerateMonster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heads: {},
      hands: {},
      feet: {},
      artistHover: false,
      hoverSelect: '',
      coordX: null,
      coordY: null
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

    this.setState({
      [alt]: selectedPart
    });
  };

  refreshMonster = () => {
    this.randomPart(this.props.heads, 'heads');
    this.randomPart(this.props.body, 'hands');
    this.randomPart(this.props.feet, 'feet');
  };

  setCoords = event => {
    this.setState(
      {
        artistHover: true,
        hoverSelect: event.target.title,
        coordX: event.clientX,
        coordY: event.clientY
      },
      () => console.log('set coords', this.state)
    );
  };

  trueArtistHover = () => {
    this.setState(
      {
        artistHover: true
      },
      () => console.log(this.state.artistHover)
    );
  };

  toggleArtistHover = () => {
    this.setState(
      {
        artistHover: false
      },
      () => console.log(this.state.artistHover)
    );
  };

  displayArtistHover = () => {
    if (this.state.artistHover) {
      return (
        <ArtistHover
          username={this.state.hoverSelect}
          coordX={this.state.coordX}
          coordY={this.state.coordY}
        />
      );
    }
  };

  render() {
    return (
      <div className="monster ac">
        <button onClick={this.refreshMonster} className="px2 py05 mb1 h5">
          New Monster
        </button>
        {this.displayArtistHover()}
        <img
          src={this.state.heads.part}
          width="100%"
          height="auto"
          className="block mxa"
          alt="head"
          title={this.state.heads.username}
          onMouseEnter={this.trueArtistHover}
          onMouseLeave={this.toggleArtistHover}
          onMouseMove={this.setCoords}
        />
        <img
          src={this.state.hands.part}
          width="100%"
          height="auto"
          className="block mxa"
          alt="body"
          title={this.state.hands.username}
          onMouseLeave={this.toggleArtistHover}
          onMouseMove={this.setCoords}
        />
        <img
          src={this.state.feet.part}
          width="100%"
          height="auto"
          className="block mxa"
          alt="feet"
          title={this.state.feet.username}
          onMouseLeave={this.toggleArtistHover}
          onMouseMove={this.setCoords}
        />
      </div>
    );
  }
}

export default GenerateMonster;
