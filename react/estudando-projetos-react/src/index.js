import React from "react";
import ReactDOM from "react-dom";

import UseEffectt from './useEffect';
import Lista from './lista';
import TestForm from './teste-form';
import Calculador from './converter-temp';

function App() {
  return (
    <div>
      <UseEffectt />
      <Lista/>
      <TestForm />
      <Calculador />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
