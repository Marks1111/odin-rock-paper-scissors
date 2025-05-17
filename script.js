
let player1 = "";
let player2 = "";
let round = 0;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {

    const choice = ["Rock", "Paper", "Scissors"];
    player2 = choice[Math.floor(Math.random() * choice.length)];
    return player2;

}


function getHumanChoice() {

    const choice = prompt("Your move");
    player1 = choice;
    return player1;

}


function compareChoices(humanChoice, computerChoice) {

    let humanCompare = humanChoice.toLowerCase();
    let computerCompare = computerChoice.toLowerCase();

    let humanResult = humanCompare[0].toUpperCase() + humanCompare.slice(1);
    let computerResult = computerCompare[0].toUpperCase() + computerCompare.slice(1);

    if ((humanCompare == "rock" && computerCompare == "scissors")
        || (humanCompare == "scissors" && computerCompare == "paper")
        || (humanCompare == "paper" && computerCompare == "rock")) {

        playerWins++;
        alert("You win " + humanResult + " beats " + computerResult);
        console.log("You win " + humanResult + " beats " + computerResult);
    }


    else if (humanCompare == computerCompare) {

        alert("It's a tie");
        console.log("It's a tie");

    } else {
        computerWins++;
        alert("You lost " + computerResult + " beats " + humanResult);
        console.log("You lost " + computerResult + " beats " + humanResult);
    }
}


function playRound() {

    for (let i = 0; i < 5; i++) {

        round++;
        compareChoices(getHumanChoice(), getComputerChoice());

        alert("Player score: " + playerWins + "\n" + "Computer score: " + computerWins + "\n" + "Round: " + round);
        console.log("Player score: " + playerWins + "\n" + "Computer score: " + computerWins + "\n" + "Round: " + round);
    }

    if (playerWins > computerWins) {
        alert("Player won the match");
        console.log("Player won the match");
    } else {
        alert("Computer won the match");
        console.log("Computer won the match");
    }
}

playRound();



