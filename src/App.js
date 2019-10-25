import React from 'react';
import add from './Clicker/Clicker';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      input: ''
    }
  }

  render() {
    return(
      <div className="app">
        <add />
      </div>
    )
  }
}

export default App;
