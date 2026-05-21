function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        return ("rock");
    } else if (randomNumber <= 0.66) {
        return ("paper");
    } else {
        return ("scissors");
    }
}

function getHumanChoice () {
    let choice = prompt("Rock, Paper, Scissors", " ");
    return choice;
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0; 

    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        
        console.log(`You: ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} | Computer: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") 
        ) {
            console.log("You win!");
            humanScore++;
        } else if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            console.log("You lose!");
            computerScore++;
        } else {
            console.log("It's a tie!");
        }

        console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log("You win! Congratulations.");
    } else if (humanScore < computerScore) {
        console.log("Computer wins! Try again next time.");
    } else {
        console.log("It's a tie! GG");
    }

}

playGame();



