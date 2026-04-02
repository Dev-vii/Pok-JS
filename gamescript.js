
var text = document.querySelector("h1");

var actions = document.getElementById("actions");

var fightButton = document.getElementById("fight");
var runButton = document.getElementById("run");

// FUNÇÕES
fightButton.addEventListener("click", function() {
    text.textContent = "Pikachu usou Choque do Trovão!";
    actions.style.display = "none";
}); return turnOponent();

runButton.addEventListener("click", function() {
    text.textContent = "Você não pode fugir!";
    actions.style.display = "none";
}); return turnOponent();