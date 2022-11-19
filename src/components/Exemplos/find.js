/* eslint-disable no-unused-vars */
export default function ExemploFind() {
  var pessoas = [
      { nome: "jullia", sobrenome: "izidorio", idade: 24 },
      { nome: "juliana", sobrenome: "paiva", idade: 24 },
      { nome: "junior", sobrenome: "izidorio", idade: 30 },
      { nome: "joyce", sobrenome: "lima", idade: 22 },
      { nome: "jullia", sobrenome: "lima", idade: 18 },
    ];

  const meuFind = pessoas.find((item) => {
    return item.idade === 22;
  });
  console.log(meuFind)
  return <div></div>;
}
