import React from "react";

export default function Greet(prop) {
  const { user, saludo } = prop;
  const { name = "Usuario", lastName, age } = user;
  console.log(prop);

  return (
    <div >
      <h2 >Hola {name} {lastName}, Edad: {age}</h2>
      <button onClick={() => saludo(name)}>Saludar</button>
    </div>


  );
}