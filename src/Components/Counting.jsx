import React from 'react';

class Countup extends React.Component {
  constructor(props){
      super(props);
      this.state={
        timerOn: false,
        timeStart: 0,
        timerTime: 0
      }
  }

  startTime = () => {
    this.setState({
        timerOn: true,
        timerTime: this.state.timerTime,
        timeStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
        this.setState({
            timerTime: Date.now() - this.state.timerStart
        })
    }, 10);
  }

  stopTimer = () => {
    this.setState({
        timerOn: false
    });
    clearInterval(this.timer);
  }



  render(){

    const {timerTime} = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return(
      <div>
        <div>{hours}:{minutes}:{seconds}:{centiseconds}</div>
        {this.state.timerOn === false && this.state.timerTime === 0
        && (
            <button onClick={this.startTime}>Start</button>
        )}

        {this.state.timerOn === true && (
            <button onClick={this.stopTime}>Stop</button>
        )}

        {this.state.timerOn === false && this.state.timerTime > 0 && (
            <button onClick = {this.startTime}>Resume</button>
        )}

        {this.state.timerOn === false && this.state.timerTime > 0 && (
            <button onclick = {this.resetTime}>Reset</button>
        )}
      </div>
      )
  }

}

export default Countup;