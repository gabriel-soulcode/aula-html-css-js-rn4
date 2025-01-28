document.title = "HTML é moleza";

document.body.style.background = "yellowgreen";

const h1 = document.getElementById("titulo");
h1.textContent += "🤯";
h1.style.fontFamily = "Arial";
h1.style.color = "white";

const itens = document.querySelectorAll("ul li");
itens[0].textContent = "<b>PHP</b>";
itens[1].innerHTML = "<b>C++</b>";

itens[0].style.color = "red";
itens[1].style.color = "blue";
itens[2].style.color = "purple";

setTimeout(() => {
  const img = document.querySelector("img");
  img.src = "https://images.unsplash.com/photo-1511185307590-3c29c11275ca?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  img.alt = "Deserto"
}, 3000);

for (let item of itens) {
  item.style.fontFamily = "Calibri";
  item.style.fontSize = "24px";
}

const titulo = document.querySelector("#titulo");
titulo.style.textAlign = "center";

const msg = document.querySelector(".msg");
msg.classList.add("erro");
msg.textContent = "Aconteceu algo errado."

const btn2 = document.querySelector("#btn-2");
btn2.onclick = () => alert("CLICOU DE NOVO!");

const btn3 = document.querySelector("#btn-3");
btn3.addEventListener("dblclick", () => {
  alert("CLICOU. Obrigado.");
});

// click -> clique com mouse
// dblclick -> duplo clique
// mousenter -> mouse ao entrar no elemento
// mouseout -> mouse ao sair no elemento
// keypress -> pressionar uma tecla