// 1. Crie um array contendo os números de 10 a 20 e exiba-os no console com for-of e for comum.
const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
for (let numero of numeros) {
  console.log(numero);
}

// 2. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.
const palavras = ["Girafa", "Java", "Amendoim", "Pato", "Excelente", "Amor"];
function filtrarMaiores(palavras) {
  return palavras.filter((p) => p.length > 5);
}

console.log(palavras);
console.log(filtrarMaiores(palavras));

// 3. Crie uma função que recebe um array de números e retorna um novo array com apenas os números que são maiores que a média do array do parâmetro.
const nums = [77, 23, 45, 12, 67, 40];
function filtrarMedia(numeros) {
  let soma = 0;
  numeros.forEach((n) => (soma += n));
  let media = soma / numeros.length;
  return numeros.filter((n) => n > media);
}
console.log(nums);
console.log(filtrarMedia(nums));

// 4. Crie uma função que recebe um array de nomes de arquivos ("arquivo.pdf", "imagem.png"), e recebe também uma extensão (".pdf"), a função deve retornar apenas os nomes de arquivo que forem dessa extensão.
const arquivos = [
  "documento.docx",
  "documento.pdf",
  "perfil.png",
  "relatorio.pdf",
];
function filtrarArquivos(arquivos, ext) {
  return arquivos.filter((arquivo) => arquivo.endsWith(ext));
}
console.log(arquivos);
console.log(filtrarArquivos(arquivos, ".pdf"));

// 5. Crie uma função que recebe um array com nomes de pessoas, e retorne um novo array com as três primeiras letras dos nomes de cada pessoa.
const nomes = ["Rafael", "Carmela", "Fabricio", "Amanda", "Victor"];
function obterInicio(nomes) {
  return nomes.map((nome) => nome.slice(0, 3));
}
console.log(nomes);
console.log(obterInicio(nomes));

// 6. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.
const bases = [7, 2, 9, 4, 6, 1, 5];
function potenciaDois(numeros) {
  return numeros.map((n) => n ** 2);
}
console.log(bases);
console.log(potenciaDois(bases));

// 7. Crie um objeto que representa uma pessoa. Propriedades: nome, idade, peso, altura. Métodos: calcular o IMC com base no peso e altura.
const pessoa = {
  nome: "Daniel",
  idade: 25,
  peso: 80,
  altura: 1.8,
  calcularIMC: function () {
    return this.peso / this.altura ** 2;
  },
};
console.log(pessoa);
console.log("IMC:", pessoa.calcularIMC());

// 8. Crie um objeto que representa uma partida de futebol. Propriedades: mandante e visitante (representa o time com seu nome, cidade, estado e uma lista com os nomes dos 11 titulares), placar (por exemplo "5x1").
const partida = {
  mandante: "Bahia",
  visitante: {
    time: "Fortaleza",
    cidade: "Fortaleza",
    estado: "Ceará",
    titulares: [
      "João Ricardo",
      "Eros Mancuso",
      "Kuscevic",
      "Cardona",
      "Diogo Barbosa",
      "Lucas Sasha",
      "Pol Fernández",
      "Pochettino",
      "Marinho",
      "Moisés",
      "Lucero",
    ],
    placar: "2x2"
  },
};
console.log(partida);
console.log(partida.visitante.titulares[10]);

// 9. Crie um array de objetos pet com as propriedades: nome, idade, peso.
const pets = [
  { nome: "Max", idade: 5, peso: 25 },
  { nome: "Mel", idade: 2, peso: 6 },
  { nome: "Pandora", idade: 4, peso: 20 },
  { nome: "Jack", idade: 8, peso: 15 }
];
console.log(pets);
console.log(pets[2].peso);