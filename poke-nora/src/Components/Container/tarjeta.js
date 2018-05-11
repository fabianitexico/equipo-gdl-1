import React, { Component } from 'react';
import {Tarjeta, Imagen} from './contenedor.style.js'
import './cont.css'

class TarjetaContainer extends Component {
  render() {
    return (
              <Tarjeta className='tarjeta'>
                <h4>{this.props.nombre}</h4>
                <Imagen src={this.props.imagen}/>
              </Tarjeta>      
    );
  }
};


export default TarjetaContainer;
