// 1. Escreva uma função que receba uma string e retorne o número de caracteres contidos nela.
function calculaCaracteres(texto) {
  return texto.length;
}
const texto = "JavaScript";
console.log("Caracteres:", calculaCaracteres(texto));

// 2. Escreva uma função que receba uma string e retorne a mesma string em letras maiúsculas.
function maiuscula(texto) {
  return texto.toUpperCase();
}
const nome = "Fátima";
console.log(maiuscula(nome));

// 3. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.
const minuscula = texto => texto.toLowerCase();
console.log(minuscula(nome));

// 4. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.
function iguais(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
const str1 = "Java";
const str2 = "java";
console.log(`"${str1}" é igual a "${str2}"? ${iguais(str1, str2)}`);

// 5. Escreva uma função que receba uma string e um número e retorne os primeiros caracteres da string de acordo com o número informado.
function recorte(str, num) {
  return str.slice(0, num);
}
console.log(recorte("JavaScript", 4));

// 6. Escreva uma função que recebe uma frase e uma palavra. Retorne a frase com as ocorrências da palavra censuradas/trocadas por ****.
const frase = "A linguagem HTML é simples. HTML trouxe facilidade. Aprendi HTML.";
function censura(frase, termo) {
  return frase.replaceAll(termo, "****");
}
console.log(censura(frase, "HTML"));

// 7. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.
function calcCaractere(frase, caractere) {
  let ocorrencias = 0;
  for (let letra of frase) {
    if (letra === caractere) {
      ocorrencias++;
    }
  }
  return ocorrencias;
}
const teste = "Gabriel Braga";
console.log(teste, calcCaractere(teste, "r"));

// 8. Escreva uma função que receba um número e retorne seu dobro. Utilize arrow function.
const dobro = numero => numero * 2;
console.log(`O dobro de 28 é ${dobro(28)}`);

// 9. Escreva uma função que receba um número e retorne seu quadrado. Utilize arrow function.
const quadrado = numero => numero ** 2;
console.log(`O quadrado de 15 é ${quadrado(15)}`);