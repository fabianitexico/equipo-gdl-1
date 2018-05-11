import React, { Component } from 'react';
import Request from 'superagent';
import {Tarjeta, Imagen, Siguiente} from './contenedor.style.js'
import './cont.css'

class TarjetaContainer extends Component {
 constructor(props) {
    super(props);
    this.state = {
      value: Math.floor((Math.random() * 150) + 1),
      value2: Math.floor((Math.random() * 150) + 1),
      body:"",
      name: "",
      image:'',
    };

    this.NameSolicitud = this.NameSolicitud.bind(this);
    this.ImageSolictud = this.ImageSolictud.bind(this);

  }

  NameSolicitud() {
    var url = "https://pokeapi.co/api/v2/pokemon/"+this.state.value;
    Request.get(url).then((response) => {
      this.setState({
        body: response.body,
        name: response.body.name,
      });
    });
  }

  ImageSolictud() {
    var url = "https://pokeapi.co/api/v2/pokemon/"+this.state.value;
    Request.get(url).then((response) => {
      this.setState({
        body: response.body,
        image: response.body.sprites.front_default
      });
    });
  }

  componentDidMount(){
    this.NameSolicitud();
    this.ImageSolictud();
  }

  render() {

    return (
              <Tarjeta className='tarjeta'>
                <h4>{this.state.name}</h4>
                <Imagen src={this.state.image}/>
              </Tarjeta>      
    );
  }
};


export default TarjetaContainer;
