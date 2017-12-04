import React from 'react';


 

class Todo extends React.Component{
// state is the father props is the child

    constructor(props){
        super(props)
        
        this.state ={
           input: "" 
        };
        
        this.charge = this.charge.bind(this);

    }

         charge(e) {
         var result = e.target.value;
         this.setState({input: result}); 

         }

    render(){
        return(
            <div>
            <li> {this.props.Todo}</li>
            <input value ={this.state.input} onChange={this.charge}/>
            <p>{this.state.input}</p>
            </div>
        )
    }
}
export default Todo;