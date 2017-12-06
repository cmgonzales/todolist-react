import React, { Component } from 'react';
import './App.css';






class App extends Component {

 
constructor(props){
  super(props)
  this.state = {
    Todo: '',
    
  }
   
  this.charge = this.charge.bind(this);
  this.add = this.add.bind(this);
      }
  
           charge(e) {
           var result = e.target.value;
           this.setState({input: result});  
  
           }
           add(e){
            console.log(this.state.input);

           }
  
      render(){
          return(
              <div>
              <h1>Enter </h1>
              <input value ={this.state.input} onChange={this.charge}/>
              <button onClick={this.add}>submit</button>
              <ul></ul>
              <li>{this.state.input}</li>
              <li>{this.state.input}</li>
              </div>
          )
      }
  }

export default App;
