import React from 'react';

class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state={
      inputValue: ''
    }
  }
  
divInput = (evt) =>{
  this.setState({
    inputValue: evt.target.value
  })
}

  render(){
    return(
      <div>
        <h1>Todo List</h1>
        <div>{this.state.inputValue}</div>
        <input value = {this.state.value} onChange= {evt =>{this.divInput(evt)}}/>
      </div>
    )
  }
}

export default Todo;