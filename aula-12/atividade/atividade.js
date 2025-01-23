// 1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.
let numero = 2;
while (numero <= 10) {
  if (numero % 2 == 0) {
    console.log(numero);
  }
  numero++;
}

// 2. Use um laço for para imprimir na tela a tabuada do 7 (de 1 a 10).
for (let n = 1; n <= 10; n++) {
  console.log("7 *", n, "=", 7 * n);
}

// 3. Use um laço for para imprimir na tela a sequência de Fibonacci até o décimo termo.
let b = 0; // ultimo
let c = 0; // atual
for (let i = 0; i < 10; i++) {
  console.log(c);

  if (c == 0) {
    c = 1;
    b = 0;
  } else {
    let aux = c;
    c = c + b;
    b = aux;
  }
}

// 4. Mostre a seguinte figura com utilização de laços:
// *
// **
// ***
// ****
// *****
let asteriscos = "";
for (let i = 1; i <= 5; i++) {
  asteriscos = asteriscos + "*";
  console.log(asteriscos);
}

// 5. Escreva uma função que receba um número e retorne seu dobro.
function dobrar(n) {
  return n * 2;
}
const dobro = dobrar(15);
console.log(dobro);

// 6. Escreva uma função que receba um número e retorne seu quadrado.
function quadrado(n) {
  return n ** 2;
}
const potencia = quadrado(9);
console.log(potencia);

// 7. Escreva uma função que receba nome, idade, endereço e retorne uma mensagem no formato: "Olá, eu sou X, tenho X ano(s) e moro em X".
function dados(nome, idade, cidade) {
  return (
    "Olá, eu sou " + nome + ", tenho " + idade + " anos e moro em " + cidade
  );
}
const mensagem = dados("João", 23, "Tianguá");
console.log(mensagem);

// 8. Escreva uma função que receba dia, mês e ano e retorne a data por extenso no formato "DD/MM/AAAA".
function data(dia, mes, ano) {
  let diaN;
  let mesN;

  if (dia < 10) {
    diaN = "0" + dia;
  } else {
    diaN = dia;
  }

  if (mes < 10) {
    mesN = "0" + mes;
  } else {
    mesN = mes;
  }

  return diaN + "/" + mesN + "/" + ano;
}

console.log(data(10, 10, 2000));

// 9. Escreva uma função que receba um preço de um produto e um percentual de desconto. Retorne o valor aplicado ao desconto.
function descontar(preco, percentual) {
  const desconto = preco * (percentual / 100);
  return preco - desconto;
}
const precoFinal = descontar(1000, 25);
console.log(precoFinal);

// 10. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batata batata batata".
function repetir(palavra, quantidade) {
  for (let i = 0; i < quantidade; i++) {
    console.log(palavra);
  }
}

repetir("Hello World", 10);
