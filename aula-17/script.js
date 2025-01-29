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

const inputUF = document.querySelector("#uf");
const btnConsulta = document.querySelector("#btn");
const listaCidades = document.querySelector("#cidades");

/// ao clicar no botão execute o seguinte comando para pegar a UF
const uf = inputUF.value;

// ao clicar no botão o programa deve pesquisar as cidades
// referentes a UF de entrada do usuario
// utilize as funções fetch e json para obter os dados
// das cidades e mostre na lista de cidades.