function somar(a, b) {
  return a + b;
}
somar(1, 4);

// Função Anônima -> Função que não tem nome
// Callback é uma função criada para ser argumento de outra função
const subtrair = function (a, b) {
  return a - b;
};
subtrair(3, 4);

console.log("Inicio");

setTimeout(() => {
  console.log("Adeus. Fique bem!");
}, 3000);

const cubo = numero => numero ** 3; // arrow function

console.log(cubo(2)); // 8

// n => n;

// () => 0

// a => {
//   console.log("a")
// }

// (a, b) => {
//   return a + b;
// }

// $ => 45;