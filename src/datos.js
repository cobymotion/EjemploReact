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
      UNSAFE_componentWillMount(){
        var arrayDatos  = []
        var datosLocal = JSON.parse(localStorage.getItem("datos"));
        console.log(typeof(datosLocal))
        console.log(datosLocal)
        datosLocal.map((it,index)=>(
          arrayDatos.push(JSON.parse(it))
        ));

       /* for(var i=0; i<datosLocal.legth;i++)
          arrayDatos.push(JSON.parse(datosLocal));*/
        
        console.log(arrayDatos)

        this.setState({
          datos:arrayDatos
        })
      }
      
      render() {
        return (
          <div className="div-principal">
            <ul>
              {
                this.state.datos.map((it,index)=>(
      <li key={index}>{it.nombre} {it.apellidos} {it.edad}</li>
                ))
              }
            </ul>              
          </div>
        );
      }
}

export default Datos;