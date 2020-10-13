import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld, { GoodBye } from "./components/HelloWorld.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <GoodBye />
      </header>
    </div>
  );
}

export default App;
