function activate(id) {
  clear();
  document.getElementById(id).classList.add("active");
}

function clear() {
  document.getElementById("card1").classList.remove("active");
  document.getElementById("card2").classList.remove("active");
  document.getElementById("card3").classList.remove("active");
}
