import React, { Component } from 'react';
import {Tarjeta, Imagen, Boton} from './contenedor.style.js'
import './cont.css'
import PokeContainter from './contenedor.js'

class TarjetaContainer extends Component {

  render() {
    return (
              <Tarjeta className='tarjeta'>
                <h4>{this.props.nombre}</h4>
                <Imagen src={this.props.imagen}/>
                <Boton onClick={this.props.save}>Votar</Boton>
                <p>{this.props.numero}</p>
              </Tarjeta>      
    );
  }
};


export default TarjetaContainer;
