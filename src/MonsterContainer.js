import {SketchField, Tools} from 'react-sketch';
import React, { Component } from 'react'
// import SketchField from "./SketchField.jsx"

class MonsterContainer extends Component {

  handleImage = () => {
    console.log(document.getElementsByTagName("canvas")[0].toDataURL())
    console.log(document.getElementsByTagName("canvas")[0].toDataURL().length)
    document.getElementById('testing').src=document.getElementsByTagName("canvas")[0].toDataURL()
  }
     render() {
       // console.log(SketchField)
        return (<div>
            <SketchField width='402px'
                         height='268px'
                         tool={Tools.Pencil}
                         lineColor='black'
                         lineWidth={3}/>
                         <p>testing:</p>

                         <img id="testing" src="" alt="please run your test"/>
                         <button onClick={this.handleImage}>get image</button>
                         </div>
        )
     }
}


export default MonsterContainer
