
// This is RockPaperScissorsv2.1a branch


let playerWins = 0;
let computerWins = 0;
let ties = 0;
let replayButtonAmount = 0;
let done = true;

const score = document.querySelector(".score");
let buttons = Array.from(document.getElementsByClassName("buttons"));
const roundResults = document.querySelector(".roundWonResults");
const gameResults = document.querySelector(".gameWonResults");

buttons.forEach(e => {
    e.addEventListener("click", (e) => {
        playRound(e);
        buttons.forEach(e => {
            e.addEventListener("click", e => {
                if (e.target.textContent == "Replay") {
                    location.reload();
                }
            })
        });
    });
});

function checkWins() {
    if (playerWins == 5) {
        gameResults.textContent = "Player won the game!";
        addReplayButton();
    } else if (computerWins == 5) {
        gameResults.textContent = "Computer won the game!";
        addReplayButton();
    } else if (ties == 5 && ties > computerWins && ties > playerWins) {
        gameResults.textContent = "No one won the game!";
        addReplayButton();
    }
}

function addReplayButton() {
    done = false;
    if (!(replayButtonAmount > 0)) {
        const replay = document.querySelector(".replay");
        const button4 = document.createElement("button");
        button4.textContent = "Replay";
        button4.className = "buttons";
        replay.appendChild(button4);
        buttons = Array.from(document.getElementsByClassName("buttons"));
        replayButtonAmount++;
    }
}

function playRound(e) {
    if (done) {
        compareChoices(e.target.textContent, getComputerChoice());
        score.textContent = "Player score: " + playerWins + " Computer score: " + computerWins + " Ties: " + ties;
        checkWins();
    }
}

function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function compareChoices(humanResult, computerResult) {
    if ((humanResult == "Rock" && computerResult == "Scissors")
        || (humanResult == "Scissors" && computerResult == "Paper")
        || (humanResult == "Paper" && computerResult == "Rock")) {
        playerWins++;
        roundResults.textContent = "You win " + humanResult + " beats " + computerResult;
    }
    else if (humanResult == computerResult) {
        ties++;
        roundResults.textContent = "It's a tie";
    } else {
        computerWins++;
        roundResults.textContent = "You lost " + computerResult + " beats " + humanResult;
    }
}