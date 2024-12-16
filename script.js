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

let humanScore = 0;
let computerScore = 0;

const result = document.querySelector(".result");
let options = document.querySelectorAll("button");
const winner = document.querySelector('.winner');
const score = document.querySelector('.score');

score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

options.forEach(option => {
    option.addEventListener("click", function(e) {
        let selection = e.target.innerText;
        let computerChoice = getComputerChoice();

        let humanChoice = selection.toLowerCase();

        console.log(humanChoice);
        console.log(computerChoice);

        if (humanChoice === 'rock' && computerChoice === 'scissor') {
            result.textContent = "You win! Rock beats scissor";
            humanScore++;
        } else if (humanChoice === 'scissor' && computerChoice === 'paper') {
            result.textContent = "You win! Scissor beats paper";
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            result.textContent = "You win! Paper beats rock";
            humanScore++;
        } else if (humanChoice === 'scissor' && computerChoice === 'rock') {
            result.textContent = "You lose! Scissor beats paper";
            computerScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'scissor') {
            result.textContent = "You lose! Scissor beats paper";
            computerScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'scissor') {
            result.textContent = "You lose! Scissor beats paper";
            computerScore++;
        } else {
            result.textContent = "It's a tie";
        }

        score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

        if (computerScore === 5) {
            humanScore = 0;
            computerScore = 0;
            score.textContent = ``;
            winner.textContent = "Computer wins!";
        } else if (humanScore === 5) {
            humanScore = 0;
            computerScore = 0;
            score.textContent = ``;
            winner.textContent = "Human wins!";
        }
    });
});