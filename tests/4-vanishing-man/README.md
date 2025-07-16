The VanishingMan project is designed just like the TestFirst test specs. After you fork and clone the repository, run the `npm install` then use the `npm test` command to begin reviewing and tackling the specs.

In the `vanishing-man.js` file you will notice a global variable called `ASCIIART`. This is an array that holds different formations of the vanishing man board and is primarily used in the `getGameStateMessage` method. You are welcome to refactor the `ASCIIART` array to an object or any type of data structure you desire.

Here is an overview of the VanishingMan class and each method:

**VanishingMan Instance:**

An instance has the following properties:

- `remainingGuesses` - a player gets 6 total guesses to try an guess the secret word
- `secretWord` - the secret word is passed as an argument and is the secret word (or phrase) a player tries to guess. The argument passed to the class is a string, but the string is stored as an array to the `secretWord` property.
- `lettersGuessed` - this is a memory bank of all the letters guessed. This is useful when determining a valid guess. A guess does not count if the character was already guessed.
- `gameState` - tracks the state of the game, there are three states `'playing'`, `'lost'`, `'won'`.

**computeGameState**

- The `computeGameState` method determines if the player `'won'`, `'lost'`, or has remaining guesses to continue playing. The `computeGameState` is responsible for updating the `gameState` property.

**getSecretWordPuzzle**

- The `getSecretWordPuzzle` method returns the "puzzle" string that represents how many characters of the string are revealed. Characters of the `secretWord` that were not guessed should be represented with a `"#"`. A space character should be displayed as a space (not a "#").
- Tip: Regular Expressions are a powerful part of a programming language but is comparable to learning a programming language in itself. Use methods you are familiar with such as `indexOf` and `includes` to determine if a string or array contains a character.
- Comparing characters in the `secretWord` property and `lettersGuessed` property can be very useful :)

**getGameStateMessage**

- The `gameStateMessage` method determines returns a string to update the game status to a player.
- The string returned uses the global `ASCIIART` variable. If you prefer to convert the `ASCIIART` variable to a different data type, you are welcome to change the data type.
- Template strings and ternary operators are useful to construct the string returned.
- The `gameState` property can be used to determine the state of the game (which will determine the string returned).

**submitGuess**

- The `submitGuess` method determines if a guess is valid. A guess is valid as long as it is a unique guess and there are remaining guesses.
- Tip: this is a good location to add guesses (characters) to the lettersGuessed array. If a letter was already guessed, the guess is not valid.

**simulateVanishingMan**

- The `simulateVanishingMan` simulates playing a game of VanishingMan.
- The simulation should simulate the following actions:
  - create a new VanishingMan instance
  - call the `submitGuess` method, passing it a random character
  - call the `computeGameState` method to determine the state of the game
  - return the final status of the game (whether the simulation won or lost)
- This method is open-ended and there are limited test specs to provide you flexibility.
- Optional:
  - create a for loop that simulates multiple games (the for loop calls the simulateVanishingMan function)
  - Can you solve the simulation function using recursion? Can you leverage concepts such as closure?
