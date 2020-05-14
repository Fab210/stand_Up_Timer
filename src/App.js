import React from "react";
import "./styles.css";
//import Timer from "react-compound-timer";

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = { minute: 0, second: 0, stopInterval: false };
  }

  test() {
    //alert("test");

    this.interval = setInterval(() => {
      this.setState((state, props) => {
        if (this.state.second === 5) {
          // clearInterval(timer);
          state.stopInterval = true;
          //this.stopCountDown();
          console.log("test");
          clearInterval(this.interval);
        } else {
          return {
            minute: state.second === 59 ? state.minute + 1 : state.minute,
            second: state.second === 59 ? 0 : state.second + 1
          };
        }
      });
    }, 1000);
  }

  render() {
    return (
      <div className="stopwatch">
        <button onClick={this.test.bind(this)}>Timer</button>
        {this.state.minute < 10 ? "0" + this.state.minute : this.state.minute}:
        {this.state.second < 10 ? "0" + this.state.second : this.state.second}
      </div>
    );
  }
}

export default Toggle;
