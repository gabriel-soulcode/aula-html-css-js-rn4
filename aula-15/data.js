const agora = new Date();
console.log(agora);

const aniversario = new Date(2024, 11, 25);
console.log(aniversario);

const nascimento = new Date("1995-05-15");
console.log(nascimento);

const hojeMs = Date.now() + 10 * 60 * 1000; // 10min a frente
const hoje = new Date(hojeMs);

console.log(hojeMs);
console.log("Fuso US", hoje);
console.log("Fuso BR", hoje.toLocaleString());

const inicio = new Date("2025-01-01T14:30:00");
console.log(inicio);
console.log(inicio.toDateString()); // Data em String
console.log(inicio.toUTCString());
console.log(inicio.toISOString());
console.log(inicio.toLocaleString()); // Data e Hora BR
console.log(inicio.toLocaleDateString()); // Data BR
console.log(inicio.toLocaleTimeString()); // Horas BR
