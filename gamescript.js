// HP
let hp1 = 100;
let hp2 = 100;

document.querySelector("#hp h1").textContent =
    `HP: ${hp1}/100`;

document.querySelector("#hp h2").textContent =
    `HP: ${hp2}/100`;

var text = document.querySelector("h3");

var actions = document.getElementById("actions");

var fightButton = document.getElementById("fight");
var runButton = document.getElementById("run");

// FUNÇÕES
fightButton.addEventListener("click", function () {
    text.textContent = "Pikachu usou Choque do Trovão!";
    actions.style.display = "none";
    document.querySelector("#hp h2").textContent = `HP: ${hp2 -=20}/100`;
});

runButton.addEventListener("click", function () {
    text.textContent = "Você não pode fugir!";
    actions.style.display = "none";
});