import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Greeting nama="Chrisman" age="22"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         coba Learn React
        </a>
      </header>
    </div>
  );
}
function Greeting(props){
  return <h1>Hallo nama saya{props.nama} <Age age={props.age}/></h1>
}
function Age(props){
  return <span> umurnya {props.age}</span>
}

export default App;
