import React from "react";
import ReactDOM from "react-dom";

import Count from './Count';
import TextInput from './Input';
import CalculadoraGorjeta from './calculadora-gorjeta';

function App() {

  return (
    <div>
      <Count />
      <TextInput />
      <CalculadoraGorjeta />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
