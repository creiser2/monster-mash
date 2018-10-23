import React, { Component } from 'react';
import { SketchField, Tools } from 'react-sketch';

class MonsterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPart: 'heads'
    };
  }

  changePart = part => {
    this.setState(
      {
        currentPart: part
      },
      () => console.log('partstate', this.state)
    );
  };

  getImage = e => {
    e.preventDefault();
    const canvas = document.getElementsByTagName('canvas')[0];
    const pngURI = canvas.toDataURL();
    const data = {
      user_id: this.props.userid,
      url: pngURI,
      username: this.props.username
    };
    console.log('data before fetch', data);
    console.log(
      'fetch url',
      `http://localhost:3000/api/v1/${this.state.currentPart}`
    );
    fetch(
      `http://localhost:3000/api/v1/${this.state.currentPart}`,
      {
        method: 'POST',

        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(data)
      }
    )
      .then(r => r.json())
      .then(r => console.log('drawing post response', r));

    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  };

  render() {
    return (
      <React.Fragment>
        <div className="x f">
          <div className="fa ac">
            <button
              className="px1 my1 h5"
              onClick={() => this.changePart('heads')}
            >
              Head
            </button>
          </div>
          <div className="fa ac">
            <button
              className="px1 my1 h5"
              onClick={() => this.changePart('hands')}
            >
              Body
            </button>
          </div>
          <div className="fa ac">
            <button
              className="px1 my1 h5"
              onClick={() => this.changePart('feet')}
            >
              Feet
            </button>
          </div>
        </div>

        <div className="f jic aic mt1">
          <div className="fa dashed border sq">
            <SketchField
              width="100%"
              height="100%"
              tool={Tools.Pencil}
              lineColor="black"
              lineWidth={5}
            />

            {/* <form id="form1">
            <input type="file" name="image" id="image_upload" accept="image/*" />
            <input
              type="submit"
              value="Submit"
              id="submit"
              onClick={this.getImage}
            />
          </form> */}
            <p className="s4">Drawing: {this.state.currentPart}</p>
            <button className="px1 mt1 h5" onClick={this.getImage}>
              Submit
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MonsterContainer;
