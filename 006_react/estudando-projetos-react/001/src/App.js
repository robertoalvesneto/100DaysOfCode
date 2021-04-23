import logo from "./logo.svg";
import "./App.css";

const pessoa1 = {name: "João", age: "22"};
const pessoa2 = {name:"Paulo", age: "24"};
const pessoa3 = {name:"Roberto", age: "21"};

///Isso é um componente, é basicamente uma classe reutilizável responsável por
///retornar um único elemento React. Eles podem receber um único argumento,
///chamado props.
///
///Se quiser que ele retorne vários elementos basta envolver todos com uma div:
/// <div><div id="1" /><div id="2"><div id="3"></div>
///
///A chamada desse componente é feita como os elementos do JSX:
/// <nome-do-componente atributo1="valor" atributo2="valor" ... />
///Os atributos são todos transformados em objetos e passados para o componente.
function Name(props) {
  return <h1>Hello, {props.name} {props.age} years old!</h1>;
}

function App() {
  const text = {
    first: "Edit",
    second: " <code>src/App.js</code>",
    third: " and save to reload.",
  };

  return (
    ///Isso não é uma tag html, mas sim um JSX, que é uma sintaxe própria feita
    ///para nos deixar familiarizado a DOM do html e a estrutura de criação,
    ///porém, nada disso será passado para o navegador interpretar. Esse código
    ///sera convertido pelo Babel para um código javascript.

    ///Esses blocos de JSX foram elementos.

    ///No elemento <p> eu removei o texto que estava inserido diretamente nele e
    ///adicionei a um objeto para mostrar como fica a inserção. Como isso é de
    ///fato jsx e não html, a inserção é feita usando chaves e é possível
    ///realizar qualquer operação ali dentro.
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text.first + text.second + text.third}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Name name={pessoa1.name} age={pessoa1.age}/>
        <Name name={pessoa2.name} age={pessoa2.age}/>
        <Name name={pessoa3.name} age={pessoa2.age}/>
        <Name name="Carla" age="19"/>
      </header>
    </div>
  );
}

export default App;
