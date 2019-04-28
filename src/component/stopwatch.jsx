import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    secondsElapsed: 0,
    isRunning: false
  };

  handleStart = () => {
    if (this.state.isRunning === false) {
      this.setState({ isRunning: true });
      this.totalTime();
    }
  };

  handleStop = () => {
    clearInterval(this.interval);
    this.setState({isRunning: false})
  }

  handleReset = () => {
    this.setState({secondsElapsed: 0})
  }

  totalTime = () => {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        ...prevState,
        secondsElapsed: prevState.secondsElapsed + 1
      }));
    }, 1000);
  };

  getSeconds = function() {
    return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
  };

  getMinutes = function() {
    return Math.floor(this.state.secondsElapsed / 60);
  };

  render() {
    return (
      <React.Fragment>
        <h1>
          {this.getMinutes()}:{this.getSeconds()}
        </h1>
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStop}>Stop</button>
        <button onClick={this.handleReset}>Reset</button>
      </React.Fragment>
    );
  }
}

export default Stopwatch;
