//Variables

const yourChoice = document.getElementById("yourChoice");
const computerChoice = document.getElementById("computerChoice");
const seeResult = document.getElementById("result");
const buttons = document.getElementsByTagName("button");
let player;
let computer;
let result;

buttons.forEach(button => button.addEventListener("click", () => {
        player = button.textContent;
        generateComputerChoice();
        yourChoice.textContent = `Player: ${player}`;
        computerChoice.textContent = `Computer: ${computer}`;
        seeResult.textContent = generateResult();
}));

function generateComputerChoice() {
    const randomNumber =  Math.floor(Math.random() * 3) + 1;
    switch(randomNumber) {
        case 1:
            computer = "PAPER";
            break;
        case 2:
            computer = "SCISSORS";
            break;
        case 3:
            computer = "ROCK"
            break;
    }
}

