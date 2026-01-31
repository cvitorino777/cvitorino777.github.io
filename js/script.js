console.log("JS conectado com sucesso 🚀");

window.addEventListener("load", () => {
  const container = document.querySelector(".container");
  if (container) {
    container.classList.add("show");
  }
});
const btn = document.querySelector("#btnProjetos");
const sec = document.querySelector("#secProjetos");

if (btn && sec) {
  btn.addEventListener("click", () => {
    sec.classList.toggle("open");
    btn.textContent = sec.classList.contains("open") ? "Fechar projetos" : "Meus projetos";
  });
}
document.getElementById("year").textContent = new Date().getFullYear();
