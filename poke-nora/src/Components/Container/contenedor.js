import React, { Component } from 'react';
import Request from 'superagent';
import corazon from './heart.png'
import {Tarjeta, Imagen, Siguiente} from './contenedor.style.js'
import './cont.css'

class PokeContainer extends Component {
 constructor(props) {
    super(props);
    this.state = {
      value: Math.floor((Math.random() * 150) + 1),
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
      <div >
              <Tarjeta className='tarjeta'>
              <p>{this.state.name}</p>
              <Imagen src={this.state.image}/>
              </Tarjeta>
      </div>          
    );
  }
};


export default PokeContainer;
