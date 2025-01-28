const options = document.querySelectorAll(".img-option");
const main = document.querySelector(".img-main");

function mudarImagem(src) {
  main.src = src;
}

for (const option of options) {
  option.addEventListener("click", event => {
    const img = event.target;
    mudarImagem(img.src);
  });
}