import React, { Component } from 'react';
import './App.css';
import PokeContainer from '../Container/contenedor.js'
import Pregunta from '../Container/pregunta.js'

class App extends Component {

constructor(){
  super()
  this.state={
    numeroPoke1: Math.floor((Math.random() * 151) + 1),
    numeroPoke2: Math.floor((Math.random() * 151) + 1),
  };
  this.Refresh = this.Refresh.bind(this)

}

  Refresh(){
    this.setState({
      numeroPoke1: Math.floor((Math.random() * 151) + 1),
      numeroPoke2: Math.floor((Math.random() * 151) + 1),
    })
  }

  render() {
    return (
      <div className='body'>
        <header className="header">
          <img src='https://cdn.bulbagarden.net/upload/2/21/SugimoriMasterBall.png' id="pokemaster" alt="logo" />
          <img src='https://vignette.wikia.nocookie.net/logopedia/images/2/2b/Pokemon_2D_logo.svg/revision/latest?cb=20170115063554' id="logo" alt="logo" />
        </header>
        <Pregunta />
        <div className="row grid">
          <PokeContainer numero={this.state.numeroPoke1} />

          <img
            id="heart"
            src="https://png.icons8.com/color/1600/heart-pokemon.png" 
            alt='logo' 
            onClick={this.Refresh} 
          />

          <PokeContainer numero={this.state.numeroPoke2} />
        </div>  
      </div>
    );
  }
}

export default App;
