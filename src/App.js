import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/header'
import './App.css';
import About from './components/about';
import Home from './components/home';


//ES6
class App extends Component{
  componentDidMount() {
    console.log('Component DID MOUNT')
  }
  render(){
    const name = "Rain"
    return (
      <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Header name = {name} foo = "bar"/>

        {/* <Route path="/List" render={() => {
          <div>List</div>
        }}
        /> */}

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
