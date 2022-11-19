/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
// // import CardPost from "./components/CardPost";
// // import ArrayDeArray from "./components/Exemplos/arrayDeArray";
// // import ExemploFind from "./components/Exemplos/find";
// // import ExemploForEach from "./components/Exemplos/forEach";
// import ExemploIncludes from "./components/Exemplos/includes";
import { useState } from 'react';
import ExemploForEach from './components/Exemplos/forEach';
import ArrayDeArray from './components/Exemplos/arrayDeArray';

function App() {  
  // const carros = ["uno", "palio", "celta", "gol", "fiesta"];
  // const meuMap = carros.map((item, i) => {
  //   return ( 
  //   <li>
  //     0 carro {item} ocupa o index {i} na lista
  //   </li>
  //   );
  // });
  // const [busca, setBusca] = useState("");

  // const carrosFiltrados = carros.filter((carro) => carro.includes(busca));
  // const carrosMap = carrosFiltrados.map((item) => {
  //   return <li>{item}</li>;
  // });

  return (
    <div>
      <ArrayDeArray /> 
    </div>
  );
}

export default App;
