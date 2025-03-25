/*
Using Math.random() to generate a random decimal between 0 (inclusive) and 1 (exclusive)
Multiplying by 3 to get a number between 0 (inclusive) and 3 (exclusive)
Using Math.floor() to round down to the nearest integer, giving you 0, 1, or 2
*/

let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');
const resetButton = document.getElementById('reset-game-btn');

function getRandomComputerResult() {
  const options = ['Rock', 'Paper', 'Scissors'];
  return options[Math.floor(Math.random() * options.length)];
}
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Scissors' && computer === 'Paper') ||
    (player === 'Paper' && computer === 'Rock')
  );
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById('player-score');
const computerScoreSpanElement = document.getElementById('computer-score');
const roundResultsMsg = document.getElementById('results-msg');
const winnerMsgElement = document.getElementById('winner-msg');
const optionsContainer = document.querySelector('.options-container');
const resetGameBtn = document.getElementById('reset-game-btn');

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  if (playerScore >= 3) {
    winnerMsgElement.innerText = 'Player has won the game!';
  }
  if (computerScore >= 3) {
    winnerMsgElement.innerText = 'Computer has won the game!';
  }
  if (playerScore >= 3 || computerScore >= 3) {
    resetGameBtn.style.display = 'block';
    optionsContainer.style.display = 'none';
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = 'none';
  optionsContainer.style.display = 'block';
  winnerMsgElement.innerText = '';
  roundResultsMsg.innerText = '';
}

rockButton.addEventListener('click', () => {
  showResults('Rock');
});

paperButton.addEventListener('click', () => {
  showResults('Paper');
});

scissorsButton.addEventListener('click', () => {
  showResults('Scissors');
});

resetButton.addEventListener('click', () => {
  resetGame();
});
