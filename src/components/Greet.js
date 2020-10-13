import React from "react";

export default function Greet(prop) {
  console.log(prop);

  return (
    <div >
      <h2 >Hola {prop.user.name} {prop.user.lastName}, Edad: {prop.user.age}</h2>
      <button onClick={() => prop.saludo(prop.user.name)}>Saludar</button>
    </div>


  );
}