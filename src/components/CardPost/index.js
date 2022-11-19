import React, { useState } from "react";
import { DATA_POST } from "./DATA_POST";
import {
  CardComentarios,
  CardMain,
  CardPostContain,
  WrapperCard,
} from "./style";

export default function CardPost() {
  //array que contém os posts, o map e filter deve ser feito a partir dele
  const [post, setPost] = useState(DATA_POST);

  //array que guarda o que vai ser buscado, o OnChange deve apontar para ele
  const [busca, setBusca] = useState("");

  //const que vai fazer o filtro no map
  const filtrados = post.filter(() => {});

  //cont que guarda o map do post
  const lePosts = filtrados.map((item, i) => {
    return (
      <WrapperCard>

        <CardMain>
          {/* coloque aqui o titulo e a img */}
          </CardMain>

        <CardComentarios>
          {/* coloque aqui a avaliação e o comentario */}
        </CardComentarios>
      </WrapperCard>
    );
  });

  return (
    <CardPostContain>
      <input
        placeholder={"Busca por palavras contidas no primeiro comentário"}
      />
      {lePosts}
    </CardPostContain>
  );
}
