import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Div = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid black;
`;

const HelloWorld = styled.h2``;

function UseEffectt() {
  const [contagem, setContagem] = useState(0);
  
  const buttonAction = () => {
    setContagem(contagem + 1);
  };

  useEffect(() => {
    //Monitora a variável contagem e quando ela é alterada realiza alguma ação.
    document.title = "Contagem:" + contagem;

  }, [contagem]);

  return (
    <Div>
      <HelloWorld>{contagem} olhe o titulo da</HelloWorld>
      <button onClick={buttonAction}>incrementar</button>
    </Div>
  );
}

export default UseEffectt;
