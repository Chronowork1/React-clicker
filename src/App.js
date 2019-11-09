import React from 'react';
import AddandSubtract from './Components/AddandSubtract';
import Countup from './Components/Counting';
import Todo from './Components/Todo';
import './App.css';

class App extends React.Component {

  render() {
    return(
      <div className="app">
        <AddandSubtract/>
        <Countup/>
        <Todo/>
      </div>
    )
  }
}

export default App;
