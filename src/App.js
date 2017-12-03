import React, { Component } from 'react';
import './App.css';
import Todo from './todo';





class App extends Component {

 
constructor(props){
  super(props)
  this.state = {
    Todo: '',
    
  }

}


  render() {
    return (
      <div className="App">
        <h1>To do list</h1>
        <Todo
        Todo = {this.state.Todo}
        />
      </div>
    );
  }
}

export default App;
