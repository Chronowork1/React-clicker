import React from 'react';

class AddandSubtract extends React.Component{
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
          this.setState({
              input: this.state.input
          })
          return alert("can't add more")
        }
      }
      
      lessThan5 = () => {
          if(this.state.input <= -5){
              this.setState({
                  input: this.state.input
              })
              return alert("can't subtract more")
          }
      }

    render() {
        return(
            <div>
                <h1>{this.state.input}</h1>
                <button onClick={()=> {
                    this.addOne(); 
                    this.moreThan5()
                }}>+
                </button>
                <button onClick={()=>{
                    this.minusOne()
                    this.lessThan5();
                }}>-
                </button>
            </div>
        )
    }
}

export default AddandSubtract;