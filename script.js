const card = document.getElementById("card");
const h1 = document.getElementsByTagName("h1")[0];

function adicionaClasse() {
  card.setAttribute("class", "card")
}

function mudaClasse() {
  h1.classList.toggle("corVermelha");
}