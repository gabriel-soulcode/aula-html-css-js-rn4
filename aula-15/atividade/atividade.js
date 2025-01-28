// 1. Crie um programa que exiba no console a data e hora atual.
const hoje = new Date();
console.log(hoje);

// 2. Escreva uma função que receba uma data no formato yyyy-mm-dd e retorne a data formatada como dd/mm/yyyy.
function formatarData(dataStr) {
  const data = new Date(dataStr);
  return data.toLocaleDateString();
}
function formatarDataSplit(dataStr) {
  const [ano, mes, dia] = dataStr.split("-");
  return `${dia}/${mes}/${ano}`;
}
const finalJaneiro = "2025-01-31T00:00:00";
console.log(formatarData(finalJaneiro));

// 3. Crie um programa que mostre a data e horas daqui a 50 dias.
const ha50dias = Date.now() + (50 * 24 * 60 * 60 * 1000);
const data50dias = new Date(ha50dias);
console.log(data50dias);

const data50dias2 = new Date();
data50dias2.setDate(data50dias2.getDate() + 50);
console.log(data50dias2);

// 4. Exiba no console a hora atual no formato hh:mm:ss e atualize automaticamente a cada segundo. Use a função setInterval.
function mostrarHoras() {
  const agora = new Date();
  console.log(agora.toLocaleTimeString());
}
// setInterval(mostrarHoras, 1000);

// 5. Crie uma função que recebe um numero fracionado e exiba o valor de:
// Um número arredondado para o inteiro mais próximo.
// Um número arredondado para baixo.
// Um número arredondado para cima.
function arredondar(numero) {
  console.log("Mais proximo:", Math.round(numero));
  console.log("Abaixo:", Math.floor(numero));
  console.log("Acima:", Math.ceil(numero));
}
arredondar(17.6)

// 6. Gere um número aleatório entre 1 e 100. Exiba o número no console.
const aleatorio = Math.floor(Math.random() * 100 + 1);
console.log(aleatorio);

// 7. Crie uma função que receba um número como parâmetro e retorne a sua raiz quadrada.
function raizQuadrada(numero) {
  return Math.sqrt(numero);
}
console.log(raizQuadrada(200)); // 14.14...

// 8. Com o array [12, 45, 67, 23, 89, 2, 77], use os métodos de Math para determinar o maior e o menor número.
const numeros = [12, 45, 67, 23, 89, 2, 77];
console.log(Math.max(...numeros));
console.log(Math.min(...numeros));

// 9. Escreva uma função que receba um objeto produto com as propriedades nome, preco e estoque. Use desestruturação para acessar esses valores e exiba-os no console.
const produto = {
  nome: "PlayStation 5",
  preco: 3800,
  estoque: 300
};
const { nome, preco, estoque } = produto;
console.log(`produto: ${nome} preço: R$ ${preco} disponiveis: ${estoque}`);

// 10. Faça uma cópia do array [1, 2, 3, 4, 5] usando o operador spread e adicione o número 6 ao final.
const naturais = [1, 2, 3, 4, 5];
const copia = [...naturais, 6];
console.log(naturais);
console.log(copia);