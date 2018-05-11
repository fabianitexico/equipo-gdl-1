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
      localNumber: this.props.numero
    };

    this.NameSolicitud = this.NameSolicitud.bind(this);
    this.ImageSolictud = this.ImageSolictud.bind(this);

  }

  NameSolicitud() {
    var url = "https://pokeapi.co/api/v2/pokemon/" + this.state.localNumber;
    Request.get(url).then((response) => {
      this.setState({
        name: response.body.name.charAt(0).toUpperCase() + response.body.name.slice(1),
      });
    });
  }

  ImageSolictud() {
    var url = "https://pokeapi.co/api/v2/pokemon/" + this.state.localNumber;
    Request.get(url).then((response) => {
      this.setState({
        image: response.body.sprites.front_default
      });
    });
  }

  componentWillReceiveProps(props) {
    this.setState({
      localNumber: this.props.numero
    });

    this.NameSolicitud();
    this.ImageSolictud();
  }

  componentWillMount() {
    this.NameSolicitud();
    this.ImageSolictud();
  }

  render() {
    return (
      <TarjetaContainer 
        nombre={this.state.name} 
        imagen={this.state.image}
      />
    );
  }
};


export default PokeContainer;
