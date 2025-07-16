# The guessing game

The Guessing Game Project is a two-part project. The game is simple. The user guesses a number between 1-100. The app should respond and indicate if their guess is 'hot' or 'cold' based on how close the guess is to the number they are trying to guess. The game should also keep track of previous guesses, and give the user a way to reset the game or get a hint.

## PART 1: HTML / CSS

### ASSIGNMENT

The first portion involves creating the HTML and CSS for the Guessing Game. During this section, do not worry about adding any functionality (JavaScript), focus on adding the HTML and CSS elements and an appealing design to your project

### PROJECT REQUIREMENTS:

<details><summary>Click to expand</summary>

- A header
- 2-4 Buttons
- 1 Input Field and submit button
- A list of previous guesses
- A fun design! (this is optional)
- A new Github Repository for the Guessing Game
- When you're finished with Part 1, your guessing game can look something like this (or fancier!):

  ![guessing game image](/readings/images/guessing-game.png)

</details>

### PROJECT SETUP

<details><summary>Click to expand</summary>

Even though you already have the project directory in this repo, lets create a new git repository and project from scratch. Then do part 1 of this project, which is to add the HTML and CSS. Move on to part 2 after you are done with part 1 to to add the JS functionality.

- create a new folder called 'guessing-game'
- go to this folder using your terminal
- start a new git repository in your local machine for this folder: type `git init` in the terminal
- create the file `.prettierrc` - this will initiate prettier file formatting
  - inside the file, put the line `{}` - this tells prettier to use default formatting rules
- create the file `.gitignore`
- create an `index.html` in the root directory
  - start typing `html:5`, and select the suggestion which will create an html boiler plate for you
- create a new director called `styles` inside the root directory
  - create a `main.css` inside this directory
  - link this `main.css` to the `index.html` file
- create a new `js` directory inside the root directory
  - copy the files `guessing-game.js` and `guessing-game-specs.js` from the js-foundations repository inside `tests\9-guessing-game\js` folder into our js folder; and copy `testem.json` to our root directory
- start a new npm project for the `guessing-game` folder: from the terminal in the root directory, type `npm init -y`
  - this will create a `package.json` file for you that will help to manage the project
- now, commit all the files created so far into git
- in github, create a repo called `guessing-game`, and push your local git repository into this github repo
- let's add the `testem` npm library to your project so that you can run the tests in `guessing-game-spec.js`

  - in the terminal go to the root directory and type `npm install testem --save-dev` - this will install the npm library `testem` as a dev dependency. If you look at package.json now, you will see `testem` has been added as a `devDependencies`
  - lets include the command to start testem in our package.json file
    - in package.json, where you see the `scripts` key, lets update it to
    ```json
    "scripts": {
      "test": "testem"
    }
    ```
    - now in the terminal, if you type `npm run test`, testem will run the test specs in `guessing-game-spec.js`

- using .gitignore
  - at this point, in your git window in VSCode, you will see over 2000 files to commit. That is because git sees all the testem library files in `node_modules` directory. We don't need to commit these files, since we can always install them from the `testem` reference in package.json.
  - let's ignore this folder by entering `node_modules` in our .gitignore file; now the number of files to commit should come down to only 3 or 4 files
  - commit again at this point - you have just created a javascript project from scratch with a git repository committed into github!

</details>

---

## PART 2: DOM

### ASSIGNMENT

It's time to add javascript functionality to our guessing game project! The goal of this project isn't to gain a deep understanding of HTML, CSS and using JavaScript with the DOM, the goal is to learn the basics of a few separate technologies and piece them together in a project. The bootcamp will dive into HTML, CSS and using JS in the browser in more depth!

Here are some examples of what the finished product will look like

- [example 1](https://jmunoz1992.github.io/Guessing-Game-Final/)
- [example 2](https://tkbrooks.github.io/guessing-game/)

### PROJECT REQUIREMENTS:

<details><summary>Click to expand</summary>

Here is how the guessing-game operates:

- A number between 1-100 will be randomly generated and is the winning number.
- The player inputs their guess in a text input field and then submits their guess.
- If the number submitted is the winning number, the player wins! Otherwise, they are allowed to try again.
- The game should give the player a hint after each guess, helping them know whether to guess lower or higher and how close they are.
- After five unsuccessful guesses, the game is over, and the player loses.

Here are a few features we suggest adding to your game (they are not required):

- Hint Button - Create a hint button that provides two random numbers between 1 and 100 and the "winning" number
- Reset/Play Again - Create a Play Again button that removes all the information from the page and restarts the game

You may have noticed there is a JS directory with a guess-game-specs.js. This file is intended to be a guide to set up the base functionality of the guessing game. It is up to you to decide to use it. If you use the specs to create the basic logic and functionality of your game, don't forget you need to add the event listeners to add the functionality to the document, you can add the event listeners in your guessing-game.js file (along with the "solution" code from the guessing-game-spec.js file).

</details>

---
