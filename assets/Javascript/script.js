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

function computerPick() {

}

function checkResult() {
    
}