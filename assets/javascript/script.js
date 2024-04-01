const play = () => {
    //Declare variables
    let allButtons = document.querySelectorAll('.button');
    let winner = document.getElementById('winner');
    let playerResult = document.getElementById('player-result');
    let computerResult = document.getElementById('computer-result');
    let resultSection = document.getElementById('result');
    let userScoreDisplay = document.getElementById('player-score');
    let computerScoreDisplay = document.getElementById('computer-score');
    let userScore = 0;
    let computerScore = 0;
    let computerChoice = "";
    let userChoice = "";
    let time = 3;

        /**This function is responsible for playing the game
         * Add event listener to the buttons
         * set the timer
         */
    const startPlaying = () => {
        allButtons.forEach(user => {
            user.addEventListener("click", () => {
            prepareToPlay(user);
            let timeInterval = setInterval(() => {
                if (time === 0) {
                    clearInterval(timeInterval);
                    let computer = Math.floor(Math.random() * 3);
                    playerAndComputerDisplay(user.id, allButtons[computer].id);
                    checkWinner(user.id, allButtons[computer].id);
                    resultSection.classList.add('result');
                } else {
                    winner.textContent = time;
                    time--;
                }
            }, 800);
            });
        });
    }
    //function is displaying players choices.
    playerAndComputerDisplay = (user, computer) => {
        playerResult.classList.remove('fa-hand-' + userChoice);
        computerResult.classList.remove('fa-hand-' + computerChoice);
        playerResult.classList.add('fa-hand-' + user);
        computerResult.classList.add('fa-hand-' + computer);
        userChoice = user;
        computerChoice = computer;
    };

    //function is highlighting selected button with red colour for 3 seconds, just before displaying the result.
    prepareToPlay = (user) => {
        allButtons.forEach(val => val.classList.remove('red'));
        time = 3;
        winner.textContent = time;

        user.classList.add('red');
        resultSection.classList.remove('result');
    };
    /** Function is checking who wins the round and displays the result by comparing
     * player's choice with computer's choice
     */
    checkWinner = (user, computer) => {
        if (user === computer) {
            winner.textContent = "Draw!";
            return;
        }
        if (user === "rock") {
            if (computer === "scissors") {
                winner.textContent = "You Win!";
                userScore++;
                userScoreDisplay.textContent = userScore;
                return;
            } else {
                winner.textContent = "Computer Wins!";
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                return;
            }
        }
        if (user === "paper") {
            if (computer === "scissors") {
                winner.textContent = "Computer Wins!";
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                return;
            } else {
                winner.textContent = "You Win!";
                userScore++;
                userScoreDisplay.textContent = userScore;
                return;
            }
        }
        if (user === "scissors") {
            if (computer === "rock") {
                winner.textContent = "Computer Wins!";
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                return;
            } else {
                winner.textContent = "You Win!";
                userScore++;
                userScoreDisplay.textContent = userScore;
                return;
            }
        }
    };
    startPlaying();
};
play();