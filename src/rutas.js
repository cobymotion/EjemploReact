import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Formulario from './formulario';

class MyRouter extends Component{
    render() {
        return (
          <div>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Formulario}/>
              </Switch>
            </BrowserRouter>
          </div>
        );
      }
}

export default MyRouter;