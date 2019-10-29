import React from 'react';
import AddandSubtract from './Components/AddandSubtract';
import Countup from './Components/Counting';
import './App.css';

class App extends React.Component {

  render() {
    return(
      <div className="app">
        <AddandSubtract/>
        <Countup/>
      </div>
    )
  }
}

export default App;
