let humanScore = 0, computerScore = 0;

//Creating computer choice
function getComputerChoice() {

    const cpu = Math.floor(Math.random() * 3);

    if (cpu === 0) {
        return "rock";
    }
    else if (cpu === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }

}

//Creating human choice
let human;
function humanChoice(event) {
    let target = event.target;

    switch (target) {
        case rock:
            human = "rock";
            break;
        case paper:
            human = "paper";
            break;
        case scissors:
            human = "scissors";
            break;
        default:
            return;
    }
    
    playRound(human, getComputerChoice);
    finalScores.innerHTML = `Human: ${humanScore} / Computer: ${computerScore}
    <br>
    <br>
    ${result}`;
}

//Main game
let result;
function playRound(humanAnswer, computerChoice) {

    //GAME START
    computerAnswer = computerChoice();
    
    if (humanAnswer === computerAnswer) {
        result = "This is a tie";
    }
    else if (humanAnswer === "rock" && computerAnswer === "scissors") {
        result = "Human wins";
        humanScore++;
    }
    else if (humanAnswer === "paper" && computerAnswer === "rock") {
        result = "Human wins";
        humanScore++;
    }
    else if (humanAnswer === "scissors" && computerAnswer === "paper") {
        result = "Human wins";
        humanScore++;
    }
    else {
        result = "Computer wins";
        computerScore++;
    }

    //GAME OVER
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore >= 5) {
            result = "Game's over. You win!"
        }
        else {
            result = "TERMINATOR wins. Fatality";
        }
        options.removeEventListener("click", humanChoice);
    }

}

//Creating UI
let options = document.createElement("div");
options.classList.add("options");

let rock = document.createElement("button");
rock.textContent = "🪨";
let paper = document.createElement("button");
paper.textContent = "📝";
let scissors = document.createElement("button");
scissors.textContent = "✂️";

options.append(rock, paper, scissors);
document.body.append(options);

options.addEventListener("click", humanChoice);

//Div for showing final results
let results = document.createElement("div");
results.textContent = "Final Results";
let finalScores = document.createElement("p");
results.appendChild(finalScores);
document.body.appendChild(results);