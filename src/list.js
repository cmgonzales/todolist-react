import React from 'react';
import TodoItems from './TodoItems';




class list extends React.Component{

constructor(props, context){
super(props, context);

this.state = {

    items:[]
};

this.addItem = this.addItem.bind(this);

}

addItem(e){

    var itemArray = this.state.items;

    if(this._inputElement.value !== ""){

        itemArray.unshift(
            {
                text: this._inputElement.value,
                key: Date.now()
            }
        );

        this.setState({
            items: itemArray
        });

        this._inputElement.value = "";
    }

    console.log(itemArray);

    e.preventdefault();

}

    render(){
        return(
            <div className = 'todoListMain'>
            <div className = 'header'>
            <form onSubmit = {this.addItem}>
            <input ref = {(a) => this._inputElement = a} placeholder = 'enter task'>
            </input>
            <button type = 'submit'>add</button>
            </form>
            </div>
            <TodoItems entries = {this.state.items}/>
         </div>
    )
    }
}
export default list;