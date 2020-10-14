import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld, { GoodBye } from "./components/HelloWorld.js";
import Greet from "./components/Greet";
import { Button } from 'react-bootstrap';
import { ReactComponent as IconName } from "./assets/svg/react.svg"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacto from "./pages/Contacto";
import QuienSoy from "./pages/QuienSoy";

function App() {
  //Estados
  const [state, setState] = useState(false);
  const [count, setCount] = useState(0);
  const userInfo = {
    name: "Pamela",
    lastName: "Ruíz",
    age: "23"
  }
  const saludo = (name, age) => {
    //alert("Hola " + name + " tiene " + age + " años.");
    alert(`Hola ${name} tiene ${age} años.`)
  }
  const encenderApagar = () => {
    //setState(true); //Solo enciende
    // setState(!state); //Manda lo contrario
    setState(prevValue => !prevValue); //si el componente state no tuviera acceso 
    setCount(count + 1);
  }
  useEffect(() => {
    //
  }, [count]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <GoodBye />
        <Greet user={userInfo} saludo={saludo} />
      </header>
      <h1>React Bootstrap</h1>
      <h3>El coche está: {state ? "Encendido" : "Apagado"}</h3>
      <h3>{count} Clicks</h3>
      <Button variant="info" size="lg" block onClick={encenderApagar}>Encender/Apagar</Button>
      <Router>
        <div>
          <Link to="/contacto">
            <Button>Contacto</Button>
          </Link>
          <Link to="/quien-soy">
            <Button>Quien soy</Button>
          </Link>
        </div>
        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/quien-soy">
            <QuienSoy />
          </Route>
        </Switch>
      </Router>
      <IconName />
    </div>
  );
}

export default App;


