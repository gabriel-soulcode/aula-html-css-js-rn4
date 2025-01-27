function Pet(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const max = new Pet("Max", 12);
console.log(max);

const curso1 = {
  nome: "Barbeiro Obsoluto",
  preco: 1500,
};

const curso2 = { ...curso1, nome: "Barbeiro 100%" };

console.log(curso1); // Barbeiro Obsoluto
console.log(curso2); // Barbeiro 100%

const peixes = ["tubarão", "salmão", "tilápia"];
const aves = ["falcão", "papagaio", "galinha"];
const animais = [...peixes, ...aves, "elefante", "leão"];
console.log(animais);

const usuario = {
  nome: "Gabriel",
  email: "gabriel@email.com",
  role: "administrador"
};

const { nome, email } = usuario;
console.log(nome); // Gabriel
console.log(email); // gabriel@email.com

const { role, dataNascimento } = usuario;
console.log(role);
console.log(dataNascimento);

const alunos = ["Maria", "João", "Ana"];
const [primeiro, segundo, terceiro] = alunos;
console.log(segundo); // João
console.log(primeiro); // Maria

const pessoa = {
  nome: "Gabriel",
  "ano-nascimento": 2001
}
console.log(pessoa.nome); // Gabriel
console.log(pessoa["ano-nascimento"]); // 2001