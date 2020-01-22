import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Formulario from './formulario';
import Datos from './datos.js'

class MyRouter extends Component{
    render() {
        return (
          <div>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Formulario}/>
                <Route exact path="/datos" component={Datos}/>
              </Switch>
            </BrowserRouter>
          </div>
        );
      }
}

export default MyRouter;