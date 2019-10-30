import React from 'react';

class Countup extends React.Component {
  constructor(props){
      super(props);
      this.state = {
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

  componentDidMount(){
      this.startTimer();
  }

  render(){
    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return(
      <div className="stopWatch">
        <div className="Stopwatch-display">{hours} : {minutes} : {seconds}</div>
      </div>
        
      )
  }

};

export default Countup;