let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let generateTarget = () => Math.floor(Math.random() * 9) + 1;

const compareGuesses = (human, computer, target) => {
  const humanGuess = Math.abs(target - human);
  const compuGuess = Math.abs(target - computer);
  return humanGuess <= compuGuess;
};

const updateScore = winner =>
  winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;
