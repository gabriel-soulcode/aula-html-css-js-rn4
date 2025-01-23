const txt = "Caio";
console.log(txt, "=", txt.length);
console.log(txt[0]); // C
console.log(txt[3]); // o

const lang = "PHP";
console.log(lang[lang.length-1]); // ultimo caractere
console.log(lang[100]); // undefined

let as = 0;
for (let i = 0; i < lang.length; i++) {
  const letra = lang[i];
  console.log(letra);
  
  if (letra == "a" || letra == "A") {
    as++;
  }
}
console.log("A's:", as);

let nome = "Anajara";
for (let letra of nome) {
  console.log(letra);
}

const frase = "Eu amo meu Brasil!";
console.log(frase);
console.log(frase.toLowerCase()); // minusculo
console.log(frase.toUpperCase()); // maiusculo

console.log(frase.endsWith("Brasil!")); // true
console.log(frase.startsWith("Brasil!")); // false

console.log(frase.includes("vida")); // false

console.log(frase.indexOf("maçã")); // -1
console.log(frase.lastIndexOf("m")); // 7

console.log(frase.replaceAll("Brasil", "Chile"));

// Eu amo meu Brasil!
// 0123456789
console.log(frase.slice(6)); //  meu Brasil!
console.log(frase.slice(0, 6)); // Eu amo
console.log(frase.slice(-7)); // Brasil!

const usuario = "Gabriel Braga";
console.log(`Olá ${usuario}. Seja bem-vindo!`);

const a = 5, b = 8;
console.log(`${a} * ${b} = ${a*b}`);