import React, {Component} from 'react';
import './formulario.css'

class Bienvenido extends Component{
    render() {
        return (
          <div className="div-principal">
              <h1>Bienvenido</h1>
              <div>
                <a href="/formulario">
                    <button className="input-buttons" id="btn-guardar">Formulario</button>
                </a>
                <a href="/datos">  
                    <button className="input-buttons" id="btn-guardar">Datos</button>
                </a>
              </div>
          </div>
        );
      }
}

export default Bienvenido;