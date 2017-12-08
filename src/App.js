import React, { Component } from 'react';
import './App.css';
import List from './list';


var destination = document.querySelector('#container')
class App extends Component {

  
      render(){
          return(
              <div>
              <List/>
        
              </div>,
           destination
          )
      }
  }

export default App;
