let computerScore = 0;
let drawScore = 0;
let userScore = 0;

let buttons = document.querySelectorAll("button");
let group = document.querySelector("#group");
let user = document.querySelector("#user");
let computer = document.querySelector("#computer");
let draws = document.querySelector("#draws");
let result = document.querySelector("#outcome");
let resetGame = document.querySelector("#playAgain");

draws.textContent = "Draws: " + drawScore;
computer.textContent = "Computer: " + computerScore;
user.textContent = "User: " + userScore;
result.textContent = "First to 5 wins!";

function winner(a, b) {
  if (a > 4 || b > 4) {
    resetGame.style.display = "block";
    group.style.visibility = "hidden";
    if (a > b) {
      let winner = document.createElement("div");
      winner.classList.add("winner");
      winner.textContent = "User Wins";
      draws.appendChild(winner);
    } else {
      let winner = document.createElement("div");
      winner.classList.add("winner");
      winner.textContent = "Computer Wins";
      draws.appendChild(winner);
    }
  }
}

function reset() {
  let gameWinner;
  userScore = 0;
  user.textContent = "User: " + userScore;
  computerScore = 0;
  computer.textContent = "Computer: " + computerScore;
  drawScore = 0;
  draws.textContent = "Draws: " + drawScore;
  resetGame.style.display = "none";
  group.style.visibility = "visible";
  result.textContent = "First to 5 wins!";
}

resetGame.addEventListener("click", () => {
  reset();
});

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

function computerPlay() {
  random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "scissors";
  } else {
    return "paper";
  }
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();

  if (playerSelection === "rock" && computerSelection === "rock") {
    drawScore += 1;
    draws.textContent = "Draws: " + drawScore;
    result.textContent = "rock vs rock, DRAW!";
    winner(userScore, computerScore);
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    userScore += 1;
    user.textContent = "User: " + userScore;
    result.textContent = "rock vs scissors, you WIN!";
    winner(userScore, computerScore);
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    computer.textContent = "Computer: " + computerScore;
    result.textContent = "rock vs paper, you LOSE!";
    winner(userScore, computerScore);
  }
  if (playerSelection === "scissors" && computerSelection === "scissors") {
    drawScore += 1;
    draws.textContent = "Draws: " + drawScore;
    result.textContent = "scissors vs scissors, DRAW!";
    winner(userScore, computerScore);
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    computer.textContent = "Computer: " + computerScore;
    result.textContent = "rock vs paper, you LOSE!";
    winner(userScore, computerScore);
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    userScore += 1;
    user.textContent = "User: " + userScore;
    result.textContent = "scissors vs paper, you WIN!";
    winner(userScore, computerScore);
  }
  if (playerSelection === "paper" && computerSelection === "paper") {
    drawScore += 1;
    draws.textContent = "Draws: " + drawScore;
    result.textContent = "paper vs paper, DRAW!";
    winner(userScore, computerScore);
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    computer.textContent = "Computer: " + computerScore;
    result.textContent = "rock vs paper, you LOSE!";
    winner(userScore, computerScore);
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    userScore += 1;
    user.textContent = "User: " + userScore;
    result.textContent = "paper vs rock, you WIN!";
    winner(userScore, computerScore);
  }
}
