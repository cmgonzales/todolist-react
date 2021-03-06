import React from 'react';


class TodoItems extends React.Component{
    constructor(props, context){
        super(props, context);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item){
        return <li key={item.key}>{item.text}</li>
    }

    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);


        return(
            <ul className = 'thisList'>
            {listItems}
            </ul>
        );
    }
};

export default TodoItems;