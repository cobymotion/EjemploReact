import React, {Component} from 'react';
import './App.css';
import MyRouter from './rutas';

class App extends Component{

  state={
    loaded:false
  }; 

  
  componentDidMount=()=>{
    this.setState({loaded:true});
  }

  render() {
    return (
      <div>
        <MyRouter />
      </div>
    );
  }
}
export default App;
