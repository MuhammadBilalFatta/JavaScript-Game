let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options [randIdx];
}

const drawGame = () => {
    msg.innerText = "Game Was Draw. play again.";
    msg.style.backgroundColor = "blue"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else{
        compScore++;
        compScorePara.innerText = compScore; 
        msg.innerText = `You lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    
    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice ) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice); 
        playGame(userChoice);
    });
});