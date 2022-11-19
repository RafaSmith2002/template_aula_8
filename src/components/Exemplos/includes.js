/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function ExemploIncludes() {
    var pessoas = [
        { nome: "jullia", sobrenome: "izidorio", idade: 24 },
        { nome: "juliana", sobrenome: "paiva", idade: 24 },
        { nome: "junior", sobrenome: "izidorio", idade: 30 },
        { nome: "joyce", sobrenome: "lima", idade: 22 },
        { nome: "jullia", sobrenome: "lima", idade: 18 },
      ];
    const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);
    const busca = "Jull"
    console.log(busca)

    // const includesInNumeros = numeros.includes(9);
    // console.log(includesInNumeros)

  const meuIncludes = pessoas.filter((item) => 
    item.nome.toUpperCase().includes(busca.toUpperCase())
  );
  console.log(meuIncludes)
  return(<div></div>)
}