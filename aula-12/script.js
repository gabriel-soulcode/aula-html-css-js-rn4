let idade = 10;

while (idade <= 20) {
  console.log("Idade:", idade);
  idade++;
}

let i = 0; // iterator ou index (indice)
while (i < 30) {
  console.log("Repetição:", i);
  i++;
}

let num = 40;
while (num <= 80) {
  if (num % 2 == 1) {
    console.log(num);
  }
  num++;
}

let a = 0;
while (a < 1) {
  console.log("Loop");
  a++;
}

while (true) {
  break;
}

// while -> indeterminadas
// for -> determinadas

for (let x = 0; x < 10; x++) {
  console.log(x);
}

// Escreva um script que imprime os numeros de 15 a 5. Utilize a estrutura for.
// decrescente
for (let i = 15; i >= 5; i--) {
  console.log(i);
}
// crescente
for (let x = 5; x <= 15; x++) {
  console.log(x);
}

for (let i = 100; i <= 500; i++) {
  if (i % 8 == 0) {
    console.log(i);
    break;
  }
}

for (let i = 50; i <= 100; i++) {
  if (i >= 70 && i <= 80) {
    continue;
  }
  console.log(i);
}

{
  let a = 1;
  {
    let a = 2;
    {
      let a = 3;
      console.log(a);
    }
  }
}
