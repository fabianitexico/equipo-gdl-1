import React, { Component } from 'react';
import './App.css';
import PokeContainer from '../Container/contenedor.js'
import logo from './logo.png'
import pokelogo from './logopoke.png'


class App extends Component {
  render() {
    return (
      <div className='head'>
        <header className="header">
          <img src={logo} id="pokemaster" alt="logo" />
          <img src={pokelogo} id="logo" alt="logo" />
        </header>

        <PokeContainer/>
        </div>
    );
  }
}

export default App;
