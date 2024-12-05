function getComputerChoice() {
    
    const a = Math.floor(Math.random() * 3);
    let computer;

    if (a === 0) {
        computer = "rock";
        return computer;
    }
    else if (a === 1) {
        computer = "paper";
        return computer;
    }
    else {
        computer = "scissors";
        return computer;
    }

}

function getHumanChoice() {
    
    let human = prompt("Choose your option").toLowerCase();

    if (human === "rock" || human === "paper" || human === "scissors") {
        return human;
    }
    else {
        console.log("Invalid answer");
    }

}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {

    humanAnswer = humanChoice();
    computerAnswer = computerChoice();
    
    if (humanAnswer === computerAnswer) {
        console.log("This is a tie.");
    }
    else if (humanAnswer === "rock" && computerAnswer === "scissors") {
        console.log("Human wins");
        humanScore++;
    }
    else if (humanAnswer === "paper" && computerAnswer === "rock") {
        console.log("Human wins");
        humanScore++;
    }
    else if (humanAnswer === "scissors" && computerAnswer === "paper") {
        console.log("Human wins");
        humanScore++;
    }
    else {
        console.log("Computer wins");
        computerScore++;
    }

    console.log(`Human: ${humanScore} / Computer: ${computerScore}`);

}

function playGame() {   
    playRound(getHumanChoice, getComputerChoice);
    playRound(getHumanChoice, getComputerChoice);
    playRound(getHumanChoice, getComputerChoice);
    playRound(getHumanChoice, getComputerChoice);
    playRound(getHumanChoice, getComputerChoice);
}

playGame();