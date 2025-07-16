/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

document.getElementById('');

class Game {
  constructor() {
    this.playersGuess = null;
    this.winningNumber = generateWinningNumber();
    this.pastGuesses = [];
  }

  difference() {
    return Math.abs(this.playersGuess - this.winningNumber);
  }

  isLower() {
    return this.playersGuess < this.winningNumber;
  }

  playersGuessSubmission(guess) {
    if (typeof guess !== 'number' || guess < 1 || guess > 100) {
      throw 'That is an invalid guess.';
    }
    this.playersGuess = guess;
    
        
    return this.checkGuess();
  }

  checkGuess() {
    
    
    let feedbackText = '';
    
    if (this.playersGuess === this.winningNumber) {
      feedbackText = 'You Win!';
    } else if (this.pastGuesses.includes(this.playersGuess)) {
      feedbackText = 'You have already guessed that number.';
    } else {
      this.pastGuesses.push(this.playersGuess);
      if (this.pastGuesses.length === 5) {
        feedbackText = 'You Lose.';
      } else {
        let diff = this.difference();
        if (diff < 10) feedbackText = "You're burning up!";
        else if (diff < 25) feedbackText = "You're lukewarm.";
        else if (diff < 50) feedbackText = "You're a bit chilly.";
        else feedbackText = "You're ice cold!";
      }
    }
    // these lines will make the test specs fail
    document.querySelector('#guess-feedback > h4').innerHTML = feedbackText;
    document.querySelector(`#guess-list li:nth-child(${this.pastGuesses.length})`).innerHTML = this.playersGuess
    
    return feedbackText; // mainly keeping the return statement to satisfy test specs
  }

  provideHint() {
    const hintArray = [
      this.winningNumber,
      generateWinningNumber(),
      generateWinningNumber(),
    ];
    return shuffle(hintArray);
  }
}

function generateWinningNumber() {
  return Math.ceil(Math.random() * 100);
}

function newGame() {
  return new Game(); //check that old game !== new game
}

function shuffle(arr) {
  //Fisher-Yates - https://bost.ocks.org/mike/shuffle/
  for (let i = arr.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
}

function playGame() {
  const game = newGame();
  
  // We are grabbing the button from our html
  const button = document.querySelector('button');

  // We are listening for when the use clicks on our button.
  // When they click, we will check in the input field to see if they have guessed a number. Then we will run the function `checkGuess`, and give it the player's guess, the winning number, and the empty array of guesses!
  button.addEventListener('click', function() {
    const playersGuess = +document.querySelector('input').value;
    document.querySelector('input').value = '';

    game.playersGuessSubmission(playersGuess);
  });
}

// start up the game!
playGame(); // note: running this function will cause the test specs to fail
