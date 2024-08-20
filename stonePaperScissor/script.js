let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const userScoreElem = document.querySelector("#user-score");
const compScoreElem = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const genComputerChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
};

const drawGame = () => {
  msg.innerText = "Game was a draw. Play again :) ";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScoreElem.innerText = userScore;
    msg.innerText = "Hurrey!You win.";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreElem.innerText = compScore;
    msg.innerText = "Oops! :( You lose the game";
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genComputerChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});



