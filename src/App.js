import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      togleStatus: true
    }
    this.handleClicks = this.handleClicks.bind(this)

  }

  handleClicks() {
    this.setState(state => ({
      togleStatus: !state.togleStatus

    }))
  }

  render() {
    return (
      <button onClick={this.handleClicks}>{this.state.togleStatus ? 'ON' : 'OFF'}</button>

    )
  }
}



function Clicker() {
  function handleClick(e) {
    alert('berhasil mengklik')
    e.preventDefault()
  }
  return (
    <a href="www.facebook.com" onClick={handleClick}>Klik Bro Sis</a>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clicker />
        <Toggle />
      </header>
    </div>
  );
}


export default App;
