import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    secondsElapsed: 0,
    isRunning: false
  };

  handleToggle = () => {
    if (this.state.isRunning === false) {
      this.setState({ isRunning: true });
      this.totalTime();
    }
    else{
      this.handleStop();
    }
  };

  handleStop = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  };

  handleReset = () => {
    this.setState({ secondsElapsed: 0 });
  };

  totalTime = () => {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        ...prevState,
        secondsElapsed: prevState.secondsElapsed + 1
      }));
    }, 100);
  };

  getSeconds = function() {
    return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
  };

  getMinutes = function() {
    return Math.floor(this.state.secondsElapsed / 60);
  };

  buttonName = function(){
    //return "Start";
    return this.state.isRunning===false ? "Start" : "Stop";
  }
  render() {
    return (
      <React.Fragment>
        <h1>
          {this.getMinutes()}:{this.getSeconds()}
        </h1>
        <button onClick={this.handleToggle}>{this.buttonName()}</button>
        <button onClick={this.handleReset}>Reset</button>
      </React.Fragment>
    );
  }
}

export default Stopwatch;
