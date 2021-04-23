import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid black;
`;

class TestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      numero: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    alert("nome: " + this.state.nome + "\nemail: " + this.state.email + "\nnumero: " + this.state.numero);
    event.preventDefault();
  };

  render() {
    return (
      <Div>
        <h2>Formulario</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={this.state.nome}
              onChange={this.handleInputChange}
              name="nome"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
            />
          </label>
          <br />
          <label>
            N°:
            <input
              type="number"
              value={this.state.numero}
              onChange={this.handleInputChange}
              name="numero"
            />
          </label>
          <br />
          <br />
          <input type="submit" value="Enviar" />
        </form>
      </Div>
    );
  }
}

export default TestForm;
