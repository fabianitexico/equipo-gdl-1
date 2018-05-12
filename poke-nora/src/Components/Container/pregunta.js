import React, { Component } from 'react';
import {PreguntaCont} from './contenedor.style'

class Pregunta extends Component {
    constructor() {
        super();
        this.state = {
          array: ['hola',
          "¿Que pokémon es de apariencia más fuerte?",
          "¿Que pokémon es más complejo en cuanto su diseño?",
          "¿Que pokémon es más cute?",
          "¿Que pokémon es más rudo?",
          "¿Que pokémon es más malote?",
          "¿Que pokémon es más amigable?",
          "¿Que pokémon es más adorable?",
          "¿Que pokémon es más feo?",
          "¿Que pokémon quieres ser tu?",
          "¿Que pokémon te gusta más?"
        ]
        };
    }

  render() {

    return (
      <PreguntaCont>
            <h2>{this.state.array[Math.floor((Math.random() * 10) + 1)]}</h2>
      </PreguntaCont>         
    );
  }
};


export default Pregunta;
