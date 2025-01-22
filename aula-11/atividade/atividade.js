// 1. Crie três variáveis: a, b e c. Estas variáveis armazenam números. Exiba qual destes números é o maior.
let a = 8,
  b = 6,
  c = 19;
if (a > b && a > c) {
  console.log(a, "é maior.");
} else if (b > a && b > c) {
  console.log(b, "é maior.");
} else if (c > a && c > b) {
  console.log(c, "é maior.");
}

// 2. Crie três variáveis que representam os três lados de um triângulo. Aplica a seguinte regra para definir se o triângulo é possível: Se a soma de dois lados é maior que o terceiro lado.
let ladoA = 12;
let ladoB = 8;
let ladoC = 5;

if (ladoB + ladoC > ladoA && ladoA + ladoC > ladoB && ladoA + ladoB > ladoC) {
  console.log("É possível formar um triângulo.");
} else {
  console.log("Não é possível formar um triângulo.");
}

// 3. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.
const idade = 23;
if (idade < 0 || idade > 130) {
  console.log("Idade inválida.");
}

// 4. Crie uma variável para armazenar um mes do ano (1 - Janeiro, 2 - Fevereiro, ... 12 - Dezembro). Com base no valor indique o mês correspondente.
const mes = 15;

switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;
  default:
    console.log("Mês inexistente.");
}

// 5. Faça um script que verifique se uma letra é vogal ou consoante.
const l = "o";
if (l == "a" || l == "e" || l == "i" || l == "o" || l == "u") {
  console.log("Vogal");
} else {
  console.log("Consoante");
}

// 6. Faça um script que tenha duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Reprovado", se a média for menor do que sete;
// A mensagem "Aprovado com Distinção", se a média for igual a dez.
let n1 = 4;
let n2 = 6;
let media = (n1 + n2) / 2;

if (media == 10) {
  console.log("Aprovado com Distinção");
} else if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// 7. Faça um script que verifica em que turno você estuda. M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
const turno = "M";
switch (turno) {
  case "M":
    console.log("Bom dia!");
    break;
  case "V":
    console.log("Boa tarde!");
    break;
  case "N":
    console.log("Boa noite!");
    break;
  default:
    console.log("Valor inválido!");
}

// 8. Defina uma variável para armazenar um número de 1 a 4 e imprima o nome da estação do ano correspondente. Use um switch-case para implementar a lógica.
const estacao = 1;
switch (estacao) {
  case 1:
    console.log("Verão");
    break;
  case 2:
    console.log("Outono");
    break;
  case 3:
    console.log("Inverno");
    break;
  case 4:
    console.log("Primavera");
    break;
  default:
    console.log("Valor inválido");
}

// 9. Defina uma variável para armazenar uma nota (de 0 a 10) e imprima a menção correspondente. Use um switch-case para implementar a lógica. Considere as seguintes faixas de notas: de 0 a 4 - Insuficiente, de 5 a 6 - Regular, de 7 a 8 - Bom, de 9 a 10 - Excelente.

const nota = 3;
switch (nota) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Insuficiente");
    break;
  case 5:
  case 6:
    console.log("Regular");
    break;
  case 7:
  case 8:
    console.log("Bom");
    break;
  case 9:
  case 10:
    console.log("Excelente");
}

// 10. Faça um script que tenha o valor de salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5%
// Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.

const salario = 2000;
let salarioComReajuste;
let reajuste;
let percentual;

if (salario <= 280) {
  percentual = 0.2;
} else if (salario > 280 && salario <= 700) {
  percentual = 0.15;
} else if (salario > 700 && salario <= 1500) {
  percentual = 0.1;
} else {
  percentual = 0.05;
}
reajuste = salario * percentual;
salarioComReajuste = salario + reajuste;

console.log("Salário:", salario);
console.log("Reajuste:", reajuste);
console.log("Percentual de Aumento:", percentual * 100 + "%");
console.log("Salário com Reajuste:", salarioComReajuste);
