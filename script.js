function getComputerChoice() {
    let num = Math.random();
    console.log(num);
    if (num <= 0.33) {
        return "rock";
    } else if (num > 0.33 && num <= 0.66) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("Please input 'rock', 'paper', or 'scissor'");

    if (choice == 'rock' || choice == 'paper' || choice == 'scissor') {
        return choice;
    } else {
        return null;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let selectedHuman = humanChoice.toLowerCase();

    if (selectedHuman == 'rock' && computerChoice == 'scissor') {
        console.log("You win! Rock beats scissor");
        humanScore++;
    } else if (selectedHuman == 'scissor' && computerChoice == 'paper') {
        console.log("You win! Scissor beats paper");
        humanScore++;
    } else if (selectedHuman == 'paper' && computerChoice == 'rock') {
        console.log("You win! Paper beats rock");
        humanScore++;
    } else if (selectedHuman == 'scissor' && computerChoice == 'rock') {
        console.log("You lose! Scissor beats paper");
        computerScore++;
    } else if (selectedHuman == 'paper' && computerChoice == 'scissor') {
        console.log("You lose! Scissor beats paper");
        computerScore++;
    } else if (selectedHuman == 'paper' && computerChoice == 'scissor') {
        console.log("You lose! Scissor beats paper");
        computerScore++;
    } else {
        console.log("It's a tie");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);