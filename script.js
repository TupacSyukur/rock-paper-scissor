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