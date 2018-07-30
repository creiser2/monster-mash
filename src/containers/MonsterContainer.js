import React, { Component } from 'react';
import { SketchField, Tools } from 'react-sketch';

class MonsterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getImage = e => {
    e.preventDefault();
    console.log(document.getElementsByTagName('canvas')[0].toDataURL());

    const form = document.querySelector('#form1');
    const data = new FormData(form);
    data.append('user_id', 1);
    data.append(
      'image',
      document.getElementsByTagName('canvas')[0].toDataURL()
    );
    console.log(data);

    fetch(`http://localhost:3000/api/v1/heads`, {
      method: 'POST',
      mode: 'no-cors',
      body: data
    })
      .then(r => r.json())
      .then(r => console.log(r));
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

        <form id="form1">
          <input
            type="submit"
            value="Submit"
            id="submit"
            onClick={this.getImage}
          />
        </form>

        {/* <button onClick={this.getImage}>Submit</button> */}
      </div>
    );
  }
}

export default MonsterContainer;
