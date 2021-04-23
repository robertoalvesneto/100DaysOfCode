import React, { useState } from 'react';
import styled from 'styled-components';


const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  margin-top:20px;
`;

function TextInput() {
    const [texto, setTexto] = useState('');

    const handleInput = (e) => {setTexto(e.target.value)};

    //Condição IF dentro do jsx:
    // {condição && <O que exibir />}
    //Ou para IF e Else:
    // {condição ? <Exibir se True /> : <Exibir se False />}
    return (
      <div>
        <Input type="text" value={texto} onChange={handleInput} />
        {texto.length>0 &&
          <p>{texto.length} caractere{texto.length>=2 ? 's' : ''}</p>
        }
      </div>
    );
}


export default TextInput;