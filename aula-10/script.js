console.log("Olá Node.js.🤖👾");

// console.log("Comentário"); Comentário

/*
Tudo isso
se tornou
um comentário
*/

// Convenção
let nota_do_aluno; // snake case (Python)
let notaDoAluno; // camel case (Java, C, C#, JavaScript)
let NotaDoAluno; // pascal case
let notadoaluno; // não faça isso

let nome = "Gabriel Braga";
let telefone = "(99) 9 9999-9999";
let idade;
idade = 29;

console.log(nome, telefone, idade);

let a = 1, b = 2, c = 3;
console.log(a, b, c);

console.log(nome); // Gabriel Braga

nome = "João";
console.log(nome);

const PI = 3.14;
console.log(PI);

var email = "gabriel@email.com";
email = "joao@email.com";
console.log(email);

let cpf = "48409812345"; // string
let quantidade = 304; // number
let altura = 1.95; // number
let ativo = false; // boolean
let sorteio = [45, 67, 23, 12]; // array
let pessoa = { nome: "Gabriel", idade: 23 }; // object
let carro = null; // null
let moto; // undefined
let peso = NaN; // number

let fruta = "Morango";
fruta = 567;
console.log(typeof fruta); // number

const x = 6;
const y = 3;
console.log(x * y); // 18
console.log(x + y); // 9
console.log(x - y); // 3
console.log(x / y); // 2
console.log(30 % 20); // 10
console.log(x ** y); // 216
console.log("Ola" + "Mundo");

let numero = 5;
console.log(numero); // 5
console.log(numero++); // 5
console.log(++numero); // 7
console.log(numero--); // 7
console.log(--numero); // 5
numero++;
console.log(numero); // 6

let num = 2;
console.log(num); // 2

num += 4;
console.log(num); // 6

num -= 3;
console.log(num); // 3

num *= 6;
console.log(num); // 18

num /= 2;
console.log(num); // 9