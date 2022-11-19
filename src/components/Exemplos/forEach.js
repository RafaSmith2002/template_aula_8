export default function ExemploForEach() {
  var pessoas = [
    { nome: "jullia", sobrenome: "izidorio", idade: 24 },
    { nome: "juliana", sobrenome: "paiva", idade: 24 },
    { nome: "junior", sobrenome: "izidorio", idade: 30 },
    { nome: "joyce", sobrenome: "lima", idade: 22 },
    { nome: "jullia", sobrenome: "lima", idade: 18 },
  ];

  //alterando todos os dados
  //  () => {};
  //  pessoas.forEach((item) => {
  //   return (item.idade = 22);
  // });
  // console.log(pessoas)

  //alterando um dado por vez

  // console.log(pessoas[3]);
  
  //   // const lucas = pessoas;
    
  //   // lucas[3].nome = 'lucas';
  //   // lucas[3].idade = 25;

  // console.log(pessoas[3]);

  pessoas.forEach((item, i) => {
    if (i === 3) {
      return (item.nome = "maria");
    }
  });
  console.log(pessoas[3]);

  return <div></div>;
}
