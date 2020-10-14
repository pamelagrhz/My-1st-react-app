import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld, { GoodBye } from "./components/HelloWorld.js";
import Greet from "./components/Greet";
import { Button } from 'react-bootstrap';


function App() {
  const userInfo = {
    name: "Pamela",
    lastName: "Ruíz",
    age: "23"
  }
  const saludo = (name, age) => {
    //alert("Hola " + name + " tiene " + age + " años.");
    alert(`Hola ${name} tiene ${age} años.`)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <GoodBye />
        <Greet user={userInfo} saludo={saludo} />
      </header>
      <h1>React Bootstrap</h1>
      <Button variant="info" size="lg" block>Algo</Button>
    </div>
  );
}

export default App;
