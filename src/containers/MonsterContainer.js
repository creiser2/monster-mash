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
    const pngURI = document.getElementsByTagName('canvas')[0].toDataURL();
    const data = { user_id: 1, url: pngURI };
    console.log('data before fetch', data);
    console.log(
      'fetch url',
      `http://localhost:3000/api/v1/${this.state.currentPart}`
    );
    fetch(`http://localhost:3000/api/v1/${this.state.currentPart}`, {
      method: 'POST',

      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(r => console.log('drawing post response', r));

    // const form = document.querySelector('#form1');
    // const data = new FormData(form);
    // const blob = new Blob([pngURI], {
    //   type: 'image/png',
    //   filename: 'monster.png'
    // });

    // console.log(blob);

    // data.append('user_id', 1);
    // data.append('image', blob);
    // console.log(data);
  };

  render() {
    return (
      <React.Fragment>
        <div className="x f">
          <div className="fa ac">
            <button
              className="px2 py05 mt1 h5"
              onClick={() => this.changePart('heads')}
            >
              Head
            </button>
          </div>
          <div className="fa ac">
            <button
              className="px2 py05 mt1 h5"
              onClick={() => this.changePart('hands')}
            >
              Body
            </button>
          </div>
          <div className="fa ac">
            <button
              className="px2 py05 mt1 h5"
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

            <button className="px2 py05 mt1 h5" onClick={this.getImage}>
              Submit
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MonsterContainer;
