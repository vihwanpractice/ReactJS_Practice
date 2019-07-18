import React, { Component } from 'react';
import Header from './components/header'
import './App.css';


//ES6
class App extends Component{
  componentDidMount() {
    console.log('Component DID MOUNT')
  }
  render(){
    const name = "Rain"
    return (
      <div className="App">
        <Header name = {name} foo = "bar"/>
      </div>
    );
  }
}

export default App;
