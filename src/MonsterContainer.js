import {SketchField, Tools} from 'react-sketch';
import React, { Component } from 'react'

class MonsterContainer extends Component {
     render() {
        return (
            <SketchField width='1024px'
                         height='768px'
                         tool={Tools.Pencil}
                         lineColor='black'
                         lineWidth={3}/>
        )
     }
}


export default MonsterContainer
