import React, {Component} from 'react';
import './formulario.css'

class Datos extends Component{  
    
      constructor(props)
      {
        super(props);
        this.state = {
          datos:""
        }
      }
      componentDidMount(){
        var datosLocal = JSON.parse(localStorage.getItem("datos"));
        this.setState({
          datos:datosLocal
        })
      }
      
      render() {
        return (
          <div className="div-principal">
            <ul>
              {
                this.state.datos.map((it)=>(
                <li>{it.nombre}</li>
                ))
              }
            </ul>              
          </div>
        );
      }
}

export default Datos;