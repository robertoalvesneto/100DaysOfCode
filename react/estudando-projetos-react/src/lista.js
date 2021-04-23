import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 400px;
  margin: 30px 0px 30px 0px;
  padding: 20px;
  border: 1px solid black;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  margin-top: 20px;
`;

const Spam = styled.span`
  margin-left: 20px;
  color: red;
`;

function Lista(props) {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  function handleKeyUp(e) {
    if (e.keyCode === 13) {
      const newItem = {
        "texto": texto,
        "isDone": false,
      };
      setLista([...lista, newItem]);
      setTexto("");
    }
  }

  function handleToggleDone(index) {
    const newList = lista;
    newList[index].isDone = !newList[index].isDone;
    setLista([...newList]);
  }

  function handleDelete(index) {
    const newList = lista;
    newList.splice(index, 1);
    setLista([...newList]);
  }

  //Executa assim que a pagina carrega, add os primeiros elementos a lista
  useEffect(() => {
    setLista([
      { "texto": "item 1", "isDone": false },
      { "texto": "item 2", "isDone": false },
      { "texto": "item 3", "isDone": false },
    ]);
  }, []);

  //Carregando uma lista de itens
  return (
    <Div>
      <h2>Lista</h2>

      <Input
        type="text"
        value={texto}
        onChange={(event) => setTexto(event.target.value)}
        onKeyUp={handleKeyUp}
        placeholder="Digite ao para add a lista"
      />

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            <spam onClick={() => handleToggleDone(index)}>
              { item.isDone ? <del>{item.texto}</del> : item.texto }
            </spam>
            <Spam onClick={() => handleDelete(index)}>del</Spam>
          </li>
        ))}
      </ul>
    </Div>
  );
}

export default Lista;
