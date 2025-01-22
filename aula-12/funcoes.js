function mostrar1a5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

mostrar1a5();
mostrar1a5();
mostrar1a5();

// função com parametros e sem retorno
// função com parametros e com retorno
// função sem parametros e sem retorno
// função sem parametros e com retorno

function hello(nome) {
  console.log("Olá", nome);
}

hello("Gabriel");
hello("João");
hello("Maria");

function somar(n1, n2) {
  console.log("Soma:", n1 + n2);
}

somar(22, 17);
somar(45, 25);
somar(20, 30);

function media(n1, n2, n3) {
  let resultado = (n1 + n2 + n3) / 3;
  return resultado;
}

const resultado = media(5, 4, 4);
console.log("Media:", resultado);

function negativoPositivo(n) {
  if (n < 0) {
    return "Negativo";
  } else {
    return "Positivo";
  }
}

const res = negativoPositivo(-1);
console.log(res);

function subtracao(x, y) {
  return;
  return x - y;
}

console.log(subtracao(4, 2)); // undefined
