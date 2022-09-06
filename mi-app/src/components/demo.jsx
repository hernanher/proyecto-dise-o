import React from 'react';
import { Component } from 'react'
import Button from 'react-bootstrap/button'

class Prueba extends Component {
    state = {
        contador : 1
      }
    handleSize(){
        const size = 30
        let style = {
            fontsize : size
        }
        return style
    } 
    render() { 
        return (<Button variant="primary" className="btn" style={this.handleSize()}>{this.state.contador}</Button>);
    }
}
 
export default Prueba;