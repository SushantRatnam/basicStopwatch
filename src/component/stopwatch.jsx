import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../component/stopwatch.css'
class Stopwatch extends Component {
  state = {
    secondsElapsed: 0,
    isRunning: false
  };

  handleToggle = () => {
    if (this.state.isRunning === false) {
      this.setState({ isRunning: true });
      this.totalTime();
    } else {
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
    }, 1000);
  };

  getSeconds = function() {
    return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
  };

  getMinutes = function() {
    return Math.floor(this.state.secondsElapsed / 60);
  };

  buttonName = function() {
    //return "Start";
    return this.state.isRunning === false ? "Start" : "Stop";
  };
  render() {
    return (
      <React.Fragment className="content">
        <h1 >
          {this.getMinutes()}:{this.getSeconds()}
        </h1>
   <div className="btnGrp">
        <button className="btn btn-primary" onClick={this.handleToggle}>
          {this.buttonName()}
        </button> &nbsp;
        <button className="btn btn-primary" onClick={this.handleReset}>Reset</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Stopwatch;
