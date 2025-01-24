// array -> vetor -> matriz
const alunos = ["João", "Maria", "Tiago", "Ana", "Francisco", "Rafael"];
console.log(alunos);

const notas = [8.5, 9.0, 5.4, 3.0, 10.0];
console.log(notas);

console.log(alunos[2], notas[2]);
console.log("Quantidade alunos:", alunos.length);

const numeros = [1, 2, 3, 4];
console.log(numeros);
numeros[1] = 100;
console.log(numeros);
numeros[2]++;
console.log(numeros);
numeros[3] = "Maçã";
console.log(numeros);

for (let i = 0; i < alunos.length; i++) {
  console.log(alunos[i]);
}

// for each
for (let aluno of alunos) {
  console.log(aluno);
}

const cores = ["Azul", "Verde", "Amarelo"];
console.log(cores);
cores.pop(); // remove o ultimo elemento do array
console.log(cores);
cores.push("Amarelo"); // insere um elemento no final do array
cores.push("Branco");
console.log(cores);

console.log(cores.includes("Preto")); // false
console.log(cores.includes("Azul")); // true

console.log(cores.indexOf("Amarelo")); // 2
console.log(cores.indexOf("Marrom")); // -1

cores.forEach((cor) => {
  console.log(cor);
});

console.log(cores);
const coresMaiusculas = cores.map(cor => cor.toUpperCase());
console.log(coresMaiusculas);

const pesos = [2, 4, 5, 9, 7, 17, 22, 34, 31];
const pesos3 = pesos.map((peso) => peso*3);
console.log(pesos);
console.log(pesos3);

const pares = pesos.filter((peso) => peso % 2 == 0);
console.log(pares);

const grandes = pesos.filter(peso => peso > 20);
console.log(grandes);


const centenas = pesos.map(peso => peso*10).filter(peso => peso > 100);
console.log(centenas); // [170, 220, 340, 310]