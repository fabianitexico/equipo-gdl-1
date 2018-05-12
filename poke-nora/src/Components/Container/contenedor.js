import React, { Component } from 'react';
import Request from 'superagent';
import TarjetaContainer from './tarjeta.js'

class PokeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body:"",
      name: "",
      image:'',
      contador: 0,
      // JsonPokemon:{
      //   name: this.name,
      //   numeroPoke: this.numero,
      //   image: this.image,
      //   counter: this.Contador
      // }
    };

    this.NameSolicitud = this.NameSolicitud.bind(this);
    this.ImageSolictud = this.ImageSolictud.bind(this);
    this.SaveCounter = this.SaveCounter.bind(this)

  }

  NameSolicitud() {
    var url = "https://pokeapi.co/api/v2/pokemon/" + this.props.numero;
    Request.get(url).then((response) => {
      this.setState({
        name: response.body.name.charAt(0).toUpperCase() + response.body.name.slice(1),
      });
    });
  }

  ImageSolictud() {
    var url = "https://pokeapi.co/api/v2/pokemon/" + this.props.numero;
    Request.get(url).then((response) => {
      this.setState({
        image: response.body.sprites.front_default
      });
    });
  }

  SaveCounter(event){
    ++ this.state.contador
    event.preventDefault()
  }



  componentWillMount(){
    this.NameSolicitud();
    this.ImageSolictud();
  }

  render() {
    return (
      <TarjetaContainer 
        nombre={this.state.name} 
        imagen={this.state.image}
        save={this.SaveCounter}
        numero={this.state.contador}
      />
    );
  }
};


export default PokeContainer;
