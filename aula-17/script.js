// JavaScript Assincrono = Promise em JavaScript
// Funções Assicronas

async function buscarEstadosBR() {
  const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
  const resposta = await fetch(url);
  const estados = await resposta.json();
  
  const lista = document.querySelector("#estados");
  for (const estado of estados) {
    lista.innerHTML += `<li>${estado.sigla} - ${estado.nome}</li>`
  }
}

buscarEstadosBR();

// Ao clicar no botão o programa deve pesquisar as cidades
// referentes a UF de entrada do usuario
// utilize as funções fetch e json para obter os dados
// das cidades e mostre na lista de cidades.

const inputUF = document.querySelector("#uf");
const btnConsulta = document.querySelector("#btn");
const listaCidades = document.querySelector("#cidades");

btnConsulta.addEventListener("click", async () => {
  const uf = inputUF.value;
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;
  listaCidades.textContent = "Carregando...";

  const resposta = await fetch(url);
  const cidades = await resposta.json();

  listaCidades.innerHTML = "";
  for (const cidade of cidades) {
    listaCidades.innerHTML += `<li>${cidade.nome}</li>`;
  }
});