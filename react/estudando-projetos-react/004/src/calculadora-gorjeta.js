import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  margin-top:20px;
`;

function CalculadoraGorjeta() {
  const [number, setNumber] = useState(0);
  const [percent, setPercent] = useState(10);
  const [gorjeta, setGorjeta] = useState(0);
  const [total, setTotal] = useState(0);

  const handleNumber = (e) => {
    setNumber(e.target.value);
    calcularGorjeta(e.target.value, percent);
  };

  const handlePercent = (e) => {
    setPercent(e.target.value);
    calcularGorjeta(number, e.target.value);
  };

  const calcularGorjeta = (conta, percent) => {
    let gorjeta = parseInt(conta)*parseInt(percent)/100;
    let total = parseInt(conta) + parseInt(gorjeta);
    setGorjeta(gorjeta);
    setTotal(total);
  };

  return (
      <div>
        <br /><br /><br /><br />
        <h2>CalculadoraGorjeta</h2>
        <Input type="number" value={number} onChange={handleNumber} />
        <br />
        <Input type="number" value={percent} onChange={handlePercent} />
        {
        number > 0 &&
          <>
            <p>Sub-total: R$ {number}</p>
            <p>Gorjeta ({percent}%): R$ {gorjeta}</p>
            <h3>Total: R$ {total}</h3>
          </>
        }
      </div>
  );
}

export default CalculadoraGorjeta;