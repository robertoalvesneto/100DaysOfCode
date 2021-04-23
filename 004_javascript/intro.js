// variavel normal, acessivel em todo codigo
var a = 30;

if (a == 30) {
  // let declara dentro de um escopo especifico
  let b = 12;
  var c = 15;
}

console.log(b); // n foi declarada nesse escopo, n esta acessivel
console.log(c);

// nao pode ter seu valor alterado, vetores objetos nao podem ter sua estrutura
// alterada, mas  o conteudo sim
const d = 15;
const e = { nome: "rob", idade: 21 };

d = 19;
e.nome = "carlos";

function query() {
  //document eh uma referencia a toda a arvore do doc
  //a partir dela podemos selecionar e manipular os elementos
  console.log(document.getElementsByClassName("lista"));
  let li = document.querySelectorAll("li");
  console.log(li);
  for (let i in li) {
    console.log(li[i]);
    li[i].style.color = "#FF0000";
  }
}

function digitou(e) {
  //evento pelo teclado
  //ao apertar "ctrl enter" retorna o valor do campo
  if (e.keyCode == 13 && e.ctrlKey == true) {
    console.log(document.getElementById("campo").value);
  }
}

function over() {
  document.getElementById("botao").innerHTML = "entrou no botão";
}

function out() {
  document.getElementById("botao").innerHTML = "saiu do botão";
}

//TRABALHANDO COM VETORES
lista = [1, 2, 3, 4, 5, 6];

//aplica a função a cada elemento do array e cria um novo
lista2 = lista.map((item) => item * 2);
console.log(lista2);

//caso retornar true retorna o valor, caso false, ignora o valor
lista3 = lista.filter((item) => (item % 2 == 0 ? true : false));
console.log(lista3);
