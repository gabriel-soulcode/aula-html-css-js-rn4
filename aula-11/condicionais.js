let idade = 10;

if (idade >= 18) {
  console.log("Maior de idade.");
}
else {
  console.log("Menor de idade.");
}

const salario = 2500;
const graducao = false;

if (salario > 2000 && graducao) {
  console.log("Liberar crédito.");
} else {
  console.log("Crédito bloqueado.");
}

const digito = -4;
const resultado = digito > 0 ? "Positivo" : "Negativo";
console.log(resultado);

const nota = 4;
if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Muito bem.");
} else if (nota >= 5) {
  console.log("Precisa melhorar.");
} else {
  console.log("Indo mal.");
}

if (true) {
  if (true) {
    console.log("Verdadeiro");
  }
}

// indentação
let dia = 9;
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-Feira");
    break;
  case 3:
    console.log("Terça-Feira");
    break;
  case 4:
    console.log("Quarta-Feira");
    break;
  case 5:
    console.log("Quinta-Feira");
    break;
  case 6:
    console.log("Sexta-Feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Esse dia não existe.");
}