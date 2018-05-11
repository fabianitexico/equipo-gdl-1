import React, { Component } from 'react';
import './App.css';
import PokeContainer from '../Container/contenedor.js'

class App extends Component {
  render() {
    return (
      <div className='body'>
        <header className="header">
          <img src='https://cdn.bulbagarden.net/upload/2/21/SugimoriMasterBall.png' id="pokemaster" alt="logo" />
          <img src='https://vignette.wikia.nocookie.net/logopedia/images/2/2b/Pokemon_2D_logo.svg/revision/latest?cb=20170115063554' id="logo" alt="logo" />
        </header>
        <PokeContainer/>
         </div>
    );
  }
}

export default App;
