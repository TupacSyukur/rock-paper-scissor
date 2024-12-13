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