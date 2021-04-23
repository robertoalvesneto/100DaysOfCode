import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import "./style.css";


//Outra forma de declarar componentes, dessa vez usando classes do ES6.
class Clock extends React.Component {
  //Método construtor que é chamado ao instanciar a classe.
  constructor(props) {
    super(props);
    //state é um tipo de variável com significado importante assim como
    //props.
    this.state = { date: new Date() };
  }

  //Chamada após o componente ter sido montado.
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //Chamada após o componente ser descartado.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //Função que atualiza o estado de state.data.
  tick() {
    this.setState({ date: new Date() });
  }

  init() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  stop() {
    clearInterval(this.timerID);
  }

  //Retorno do elemento a ser renderizado.
  render() {
    return (
      <Group ai = 'center'>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <div>
          <Toggle stopClock={this.stop.bind(this)} startClock={this.init.bind(this)} />
        </div>
      </Group>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //A função aqui é necessária pois o setState é uma função assíncrona,
    //e para garantir que vamos ter o comportamento que queremos precisamos
    //pegar o estado anterior do objeto que queremos mudar.
    this.setState(function (state) {
      if (state.isToggleOn) {
        this.props.stopClock();
      } else {
        this.props.startClock();
      }
      return {
        isToggleOn: !state.isToggleOn,
      };
    });
  }

  render() {
    const Button = styled.button`
      color: #282c34;
      font-weight: 400;
      font-size: calc(10px + 2vmin);
      border-radius: 15px 15px;
    `;

    return (
      <Button onClick={this.handleClick}>
        {this.state.isToggleOn ? "STOP" : "UPDATE"}
      </Button>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));



//Usando biblioteca styled-components para estilizar dentro do js
const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(20px + 2vmin);
  color: white;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;


//Testando passar valores para ele e extender de outros componentes
const Group = styled(Column)`
  align-items: ${props => props.ai};
  justify-content: flex-start;
`;



function App() {
  return (
    <Container>
      <Clock />
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
