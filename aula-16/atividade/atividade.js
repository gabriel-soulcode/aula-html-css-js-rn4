// 1. Crie uma página HTML com uma <div> contendo um texto qualquer. Adicione um botão que, ao ser clicado, mude o texto da <div> para "Texto alterado com sucesso!".
const divTexto = document.getElementById("texto");
const btnTexto = document.querySelector("#btn-text");

btnTexto.addEventListener("click", () => {
  const texto = divTexto.textContent;
  divTexto.textContent = "Texto alterado com sucesso!";
  
  // voltar para texto inicial depois de 5 segundos
  setTimeout(() => {
    divTexto.textContent = texto;
  }, 5000);
});

// 2. Crie uma página com um parágrafo e um botão. Ao clicar no botão, altere a cor de fundo do parágrafo para amarelo e o texto para negrito.
const paragrafo = document.querySelector("#paragrafo");
const btnContraste = document.querySelector("#btn-contraste");
let contraste = false;

btnContraste.addEventListener("click", () => {
  if (contraste) {
    paragrafo.style.backgroundColor = "";
    paragrafo.style.fontWeight = "";
    contraste = false;
  } else {
    paragrafo.style.backgroundColor = "yellow";
    paragrafo.style.fontWeight = "bold";
    contraste = true;
  }
});

// 3. Faça uma página com uma lista não ordenada (<ul>). Inclua um botão que adicione um novo item à lista sempre que for clicado.
const lista = document.querySelector("#lista");
const btnItem = document.querySelector("#btn-item");

// btnItem.addEventListener("click", () => {
//   const item = document.createElement("li");
//   item.textContent = "Novo Item";
//   lista.appendChild(item);
// });

btnItem.addEventListener("click", () => {
  const posicao = lista.childElementCount + 1;
  lista.innerHTML += `<li>Item ${posicao}</li>`;
});

// 4. Crie uma tabela com três linhas e um botão de "Remover Linha". Toda vez que o botão for clicado, remova a última linha da tabela.
const tabela = document.querySelector("#linhas");
const btnRemover = document.querySelector("#btn-remover");

// btnRemover.addEventListener("click", () => {
//   const index = tabela.children.length - 1;
//   const ultimo = tabela.children.item(index);
//   tabela.removeChild(ultimo);
// });

btnRemover.addEventListener("click", () => {
  const linhas = tabela.innerHTML;
  const index = linhas.lastIndexOf("<tr>");
  tabela.innerHTML = linhas.slice(0, index);
});

// 5. Crie uma página com uma imagem e dois botões: "Mostrar" e "Ocultar". Use os botões para alterar o atributo src da imagem e exibir ou esconder o conteúdo.
const imagem = document.querySelector("#imagem");
const btnOcultar = document.querySelector("#btn-ocultar");
const btnMostrar = document.querySelector("#btn-mostrar");

btnOcultar.addEventListener("click", () => {
  imagem.src = "";
});

btnMostrar.addEventListener("click", () => {
  imagem.src = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
});