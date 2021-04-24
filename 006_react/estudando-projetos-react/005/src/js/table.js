import React, { useState } from "react";
import styled from "styled-components";

import PRODUCTS from "../data/products.json";

const Div = styled.div`
  padding: 10px;
  border: 1px solid yellow;
`;
export default function FilterableProductTable() {
  // A state fica em um nivel mais alto, ja que os dados são recebidos por um
  // filho e implementados pelo outro.
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (filterText) => setFilterText(filterText);
  const handleInStockChange = (inStockOnly) => setInStockOnly(inStockOnly);

  return (
    <Div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={PRODUCTS}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </Div>
  );
}

const Container = styled.div`
  border: 1px solid purple;
  padding: 10px;
  padding-right: 30px;
`;

const InputText = styled.input`
  width: 130px;
  border: 1px solid gray;
  padding: 5px;
  margin-bottom: 5px;
`;
function SearchBar(props) {
  // Implementa a callback recebida
  function handleFilterTextChange(e) {
    props.onFilterTextChange(e.target.value);
  }
  const handleInStockChange = (e) => props.onInStockChange(e.target.checked);

  return (
    <Container>
      <form>
        <InputText
          type="text"
          placeholder="Search..."
          value={props.filterText}
          onChange={handleFilterTextChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={props.inStockOnly}
            onChange={handleInStockChange}
          />
          Only show products in stock
        </label>
      </form>
    </Container>
  );
}

const Container2 = styled.div`
  border: 1px solid purple;
  padding: 10px;
  padding-right: 30px;
`;
function ProductTable(props) {
  const rows = [];
  let lastCategory = null;

  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  // Analisa cada produto e cria o componente correto com base nele
  props.products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <Container2>
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </Container2>
  );
}

function ProductCategoryRow(props) {
  // Exibe o nome da categoria
  const category = props.category;
  return (
    <tr>
      <th colSpan="2" style={{ paddingTop: "20px" }}>
        {" "}
        {category}
      </th>
    </tr>
  );
}

const SpanRed = styled.span`
  color: red;
`;
function ProductRow(props) {
  // Exibe um item com seu nome e preço

  const product = props.product;
  const name = product.stocked ? product.name : <SpanRed>{product.name}</SpanRed>;

  return (
    <tr>
      <td>{name}</td>
      <td style={{ paddingLeft: "60px" }}>{product.price}</td>
    </tr>
  );
}
