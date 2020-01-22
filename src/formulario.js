import React, {Component} from 'react';
import logo from './logo.svg';
import './formulario.css'

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state={
          nombre:"",
          apellidos:"",
          edad:"",
          curp:"",
        }
        this.handleClick = this.handleClick.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
      }
    
      handleClick() {} 
    
      handleChange(evt){
    
        var campo = evt.target.name; 
        var valor = evt.target.value; 
    
        console.log(campo + " : " + valor);
    
        this.setState({
          [campo]:valor
        });
    
      }
        
      render() {
        return (
          <div className="div-principal">
            <form>
              <div className="header-img">
                <img src={logo} className="App-logo logo-tec" alt="logo" />
              </div>
              <h1>PRIMER PRACTICA</h1>
              <p>Primer practica del curso de react.js Unidad Academica Tequila</p>
              <div className="div-input" id="nombre">
                <label>Nombre: </label>
                <input value={this.state.nombre} name="nombre" type="text" onChange={this.handleChange.bind(this)} placeholder="Nombre" className="input-text" />
              </div>
              <div className="div-input" id="apellidos">
                <span><label>Apellidos: </label></span>
                <input value={this.state.apellidos} name="apellidos" type="text" onChange={this.handleChange.bind(this)} placeholder="Apellidos" className="input-text" />
              </div>
              <div className="div-input" id="edad">
              <label>Edad: </label>
                <input value={this.state.edad} name="edad" type="text" onChange={this.handleChange.bind(this)} placeholder="Edad" className="input-text" />
              </div>
              <div className="div-input" id="curp">
              <label>Curp: </label>
                <input value={this.state.curp} name="curp" type="text" onChange={this.handleChange.bind(this)} placeholder="Curp" className="input-text"/>
              </div>
              <div>
                <button className="input-buttons" id="btn-guardar">Guardar</button>
                <button className="input-buttons" id="btn-cancelar">Borrar</button>
              </div>
            </form>
          </div>
        );
      }
}
export default Formulario;