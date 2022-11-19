/* eslint-disable no-undef */
import React from "react";

export default function ArrayDeArray() {
  const paletasDeCores = [
    { name: "outono", cores: ["marrom", "laranja", "bordô"] },
    { name: "verão", cores: ["amarelo", "vermelho", "branco"] },
    { name: "inverno", cores: ["azul", "preto", "cinza"] },
  ];

  //mapdentrodomap
  const mapDoMap = paletasDeCores.map((item) => {
    return (
      <div>
        <h1> name: {item.name}</h1>
        {item.cores.map((item) => (
          <li>{item}</li>
        ))}
      </div>
    );
  });
  //mappeloindex
  // const mapPeloIndex = paletasDeCores.map((item) => {
  //   return (
  //     <div>
  //       <h1> name: {item.name}</h1>
  //       <li>{item.cores[0]}</li>
  //     </div>
  //   );
  // });

  return <div>{mapDoMap}</div>;
}
