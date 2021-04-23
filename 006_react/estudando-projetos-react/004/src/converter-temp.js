import React, { useState } from "react";
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

function BoilingVerdict(props) {
  const texto =
    props.celsius >= 100 ? "A água ferveria." : "A água não ferveria.";

  return <p>{texto}</p>;
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function TemperatureInput(props) {
  return (
    <Input
      type="number"
      value={props.temperature}
      onChange={(e) => props.onTemperatureChange(e.target.value)}
      placeholder={"Informe a temperatura em " + scaleNames[props.scale]}
    />
  );
}

function Calculador() {
  //Matem o estado atual do input que esta sendo editado
  const [cal, setCal] = useState({ temperature: 0, scale: "c" });

  //Controladores dos campos de input
  const handleCelsiusChange = (temp) =>
    setCal({ temperature: temp, scale: "c" });
  const handleFahrenheitChange = (temp) =>
    setCal({ temperature: temp, scale: "f" });

  //Calcular a conversão entre as unidades de medida
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  //Conversão dos valores
  const celsius =
    cal.scale === "f"
      ? tryConvert(cal.temperature, toCelsius)
      : cal.temperature;
  const fahrenheit =
    cal.scale === "c"
      ? tryConvert(cal.temperature, toFahrenheit)
      : cal.temperature;

  return (
    <Div>
      <h2>Converter temperatura:</h2>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </Div>
  );
}

export default Calculador;
