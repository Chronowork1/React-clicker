import React from 'react';

class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state={
      inputValue: ''
    }
  }


  handleSubmit = (event) =>{
    event.preventDefault(); // prevent default action of the form
    const data = this.state
    console.log("Final data is", data)
  }

  handleInputChange = (event) =>{
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount(){
    this.setState({
      inputValue: "Kevin"
    })
  }

  render(){
    const {inputValue} = this.state

    return(
      <div>
        <h1>Todo List</h1>
        <form onSubmit = {this.handleSubmit}>
          <div>{inputValue}</div>
          <input type="text" placeholder="Your Name" name ="inputValue" onChange = {this.handleInputChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Todo;