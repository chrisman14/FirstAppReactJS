import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//State
class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: this.props.start
    }
  }


  componentDidMount() {
    this.addInterval = setInterval(() => {
      this.increase()
    }, 1000);
  }


  componentWillUnmount() {
    clearInterval(this.addInterval)
  }


  increase() {
    this.setState((state) => ({
      time: parseInt(state.time)+1
    })
    )
  }



  render() {
    return (
      <div>{this.state.time} Detik</div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer start="0" />
      </header>
    </div>
  );
}


export default App;
