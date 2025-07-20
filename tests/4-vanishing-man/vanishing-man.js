/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `

  O   
 /|\\  
 / \\  

=========`,
  `

  O   
 /|\\  
 /    

=========`,
  `

  O   
 /|\\  


=========`,
  `

  O   
 /|   

=========`,
  `

  O   
  |   

=========`,
  `

  O   


=========`,
  `



=========`,
];

class VanishingMan {
  constructor(secretWord) {
    this.remainingGuesses = 6;
    this.secretWord = secretWord.toLowerCase().split("");
    this.lettersGuessed = [];
    this.gameState = "playing";
  }

  submitGuess(char) {
    char = char.toLowerCase();
    if (this.gameState !== "playing") return;
    if (this.lettersGuessed.includes(char)) return;

    this.lettersGuessed.push(char);

    if (!this.secretWord.includes(char)) {
      this.remainingGuesses--;
    }
  }

  computeGameState() {
    const allGuessed = this.secretWord.every(
      (char) => char === " " || this.lettersGuessed.includes(char)
    );

    if (allGuessed) {
      this.gameState = "won";
    } else if (this.remainingGuesses <= 0) {
      this.gameState = "lost";
    } else {
      this.gameState = "playing";
    }
  }

  getSecretWordPuzzle() {
    return this.secretWord
      .map((char) =>
        char === " " ? " " : this.lettersGuessed.includes(char) ? char : "#"
      )
      .join("");
  }

  getGameStateMessage() {
    const ascii = ASCIIART[6 - this.remainingGuesses];
    if (this.gameState === "won") {
      return "Winner Winner Chicken Dinner, you won!";
    } else if (this.gameState === "lost") {
      return `Game Over, the word was "${this.secretWord.join("")}":${ascii}`;
    } else {
      return `There is a total of ${this.remainingGuesses} guesses remaining:${ascii}`;
    }
  }
}

function simulateVanishingMan(wordToGuess) {
  const word = wordToGuess || "defaultword";
  const game = new VanishingMan(word);

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const guessed = new Set();

  while (game.gameState === "playing") {
    let guess = alphabet[Math.floor(Math.random() * alphabet.length)];
    while (guessed.has(guess)) {
      guess = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    guessed.add(guess);
    game.submitGuess(guess);
    game.computeGameState();
  }

  return game.gameState;
}
