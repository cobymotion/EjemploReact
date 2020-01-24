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
          arrayDatos:[],
        }
        this.handleClick = this.handleClick.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
      }
    
      handleClick() {

        if(this.state.nombre!=="" && this.state.curp!=="" && this.state.apellidos!=="" && this.state.edad!==""){
        var objForm = {
          nombre : this.state.nombre,
          apellido: this.state.apellidos,
          curp: this.state.curp,
          edad:this.state.edad  
        }

        var objFormString = JSON.stringify(objForm); 
        this.state.arrayDatos.push(objFormString);

        localStorage.setItem("datos",JSON.stringify(this.state.arrayDatos));        
      } else
        {alert('Datos incompletos');
        
        }
      } 
    
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
              <div className="header-img">
                <img src={logo} className="App-logo logo-tec" alt="logo" />
              </div>
              <h1>PRIMER PRACTICA</h1>
              <p>Primer practica del curso de react.js Unidad Academica Tequila</p>
              <div className="div-input">
                <label>Nombre: </label>
                <input value={this.state.nombre} name="nombre" type="text" onChange={this.handleChange.bind(this)} placeholder="Nombre" className="input-text" />
              </div>
              <div className="div-input" >
                <span><label>Apellidos: </label></span>
                <input value={this.state.apellidos} name="apellidos" type="text" onChange={this.handleChange.bind(this)} placeholder="Apellidos" className="input-text" />
              </div>
              <div className="div-input" >
              <label>Edad: </label>
                <input value={this.state.edad} name="edad" type="text" onChange={this.handleChange.bind(this)} placeholder="Edad" className="input-text" />
              </div>
              <div className="div-input" >
              <label>Curp: </label>
                <input value={this.state.curp} name="curp" type="text" onChange={this.handleChange.bind(this)} placeholder="Curp" className="input-text"/>
              </div>
              <div>
                <button onClick={this.handleClick.bind(this)}  className="input-buttons" id="btn-guardar">Guardar</button>
                <button className="input-buttons" id="btn-cancelar">Borrar</button>
              </div>            
          </div>
        );
      }
}
export default Formulario;