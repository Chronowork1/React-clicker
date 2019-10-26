import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      input: 0
    }
  }

  addOne = () => {
    this.setState({
      input: this.state.input + 1
    })
  }

  minusOne = () => {
    this.setState({
      input: this.state.input - 1
    })
  }

  moreThan5 = () => {
    if(this.state.input >= 5){
      return alert("Hello")
    }
  }

  render() {
    return(
      <div className="app">
        <h1>{this.state.input}</h1>
        <button onClick={()=> {
          this.addOne(); 
          this.moreThan5()
          }}>+
        </button>
        <button onClick={this.minusOne}>-</button>
        
      </div>
    )
  }
}

export default App;
