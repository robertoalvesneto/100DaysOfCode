import React, { useState } from "react";
import styled from 'styled-components';

const HelloWorld = styled.h2``;

function Count() {
  //contagem armazena o valor e o setContagem é por onde podemos atualizar
  //os dados armazenados. Dentro de useState passamos o valor inicial.
  const [contagem, setContagem] = useState(0);
  //Função que utiliza o setContagem
  const buttonAction = () => {
    setContagem(contagem + 1);
  };

  //O texto na tela é atualizado automaticamente ao usarmos o setContagem.
  return (
    <div>
      <HelloWorld>{contagem} Hello World</HelloWorld>
      <button onClick={buttonAction}>incrementar</button>
    </div>
  );
}

export default Count;
