// objeto => abtração de algo real
const garrafa = {
  nome: "Garrafa Azul",
  preco: 30,
  quantidade: 200,
  validade: "Indeterminada",
  codigo: "6448759505",
  categoria: "Cozinha",
  totalPreco: function() {
    return this.preco * this.quantidade;
  }
};

console.log(garrafa);
console.log(garrafa.nome);
console.log(garrafa["nome"]);

// console["log"]("Olá");

garrafa.nome = "Garrafa Azul Piscina";
garrafa.quantidade++;
console.log(garrafa);

console.log(garrafa.totalPreco()); // método do objeto

// const print = console.log;
// print("Hi!");

const pessoa = {
  nome: "Maria Estefane",
  idade: 32,
  adm: true,
  endereco: {
    logradouro: "R. 35 de Março",
    bairro: "Sede",
    cidade: "São Paulo"
  },
  contatos: ["88 90909090", "77 89898989"]
}
console.log(pessoa.nome);
console.log(pessoa.endereco.cidade);
console.log(pessoa.contatos[0]);