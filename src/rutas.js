import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Datos from './datos.js'
import Bienvenido from './bienvenido';
import Formulario from './formulario.js';

class MyRouter extends Component{
    render() {
        return (
          <div>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Bienvenido}/>
                <Route exact path="/datos" component={Datos}/>
                <Route exact path="/formulario" component={Formulario}/>
              </Switch>
            </BrowserRouter>
          </div>
        );
      }
}

export default MyRouter;