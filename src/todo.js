import React from 'react';


class todo extends React.Component{

    constructor(props){
        super(props)
        
        }
      

    render(){
        return(
            <div>
            <li>{props.state.Todo}</li>
            </div>
        )
    }
}
export default todo;