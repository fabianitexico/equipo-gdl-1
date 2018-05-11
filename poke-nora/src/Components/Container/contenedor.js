import React, { Component } from 'react';
import TarjetaContainer from './tarjeta.js'

class PokeContainer extends Component {

  render() {

    return (
      <div class="row grid">
              <TarjetaContainer/>>
              <img src="https://png.icons8.com/color/1600/heart-pokemon.png" id="heart"/>
              <TarjetaContainer/>>
      </div>         
    );
  }
};


export default PokeContainer;
