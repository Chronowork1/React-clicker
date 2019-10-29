import React from 'react';

class Countup extends React.Component {
  constructor(props){
      super(props);
      this.state ={
        timerOn: false,
        timerStart: 0,
        timerTime: 0
      }
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

stopTimer = () => {
  this.setState({ timerOn: false });
  clearInterval(this.timer);
};
resetTimer = () => {
  this.setState({
    timerStart: 0,
    timerTime: 0
  });
};

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    const max = 216000000;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < max) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < max) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < max) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };
  render(){
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return(
      <div className="stopWatch">
        <div className="stopwatch-header">Stopwatch</div>
        <div className="Stopwatch-display">{hours} : {minutes} : {seconds} : {centiseconds}</div>

        {this.state.timerOn === false && this.state.timerTime === 0 && (
        <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerOn === true && (
        <button onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
        <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
        <button onClick={this.resetTimer}>Reset</button>
        )}
        

      </div>
        
      )
  }

};

export default Countup;