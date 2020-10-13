import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld, { GoodBye } from "./components/HelloWorld.js";
import Greet from "./components/Greet";


function App() {
  const userInfo = {
    name: "Pamela",
    lastName: "Ruíz",
    age: "23"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <GoodBye />
        <Greet user={userInfo} />
      </header>
    </div>
  );
}

export default App;
