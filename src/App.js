import React, { Component } from 'react';
import './App.css';
import UserForm from './Components/UserForm';
import Mainhomepage from './HomePage/homepage';
import Homepage from './HomePage/homepage';
import { homedir } from 'os';

class App extends Component{
  render(){
  return (
    <div >
      <Homepage/>
    </div>
  );
  }
}

export default App;
