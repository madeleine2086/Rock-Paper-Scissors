//Variables

const yourChoice = document.getElementById("yourChoice");
const computerChoice = document.getElementById("computerChoice");
const seeResult = document.getElementById("result");
const buttons = document.getElementsByTagName("button");
let player;
let computer;
let result;

for (let button of buttons) {
    button.addEventListener("click", () => {
        player = button.textContent;
        computerPick();
    })
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computer = "paper"
    }
    if (randomNumber === 2) {
        computer = "rock"
    }
    if (randomNumber === 3) {
        computer = "scissors"
    }
}

function checkResult() {

}