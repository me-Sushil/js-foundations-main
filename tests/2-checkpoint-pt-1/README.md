## Foundations Checkpoint 1

### Getting Started:

1. **Clone** the Checkpoint and `cd` (change directories) so you are in the checkpoint directory in your terminal.

2. Before solving a problem, read the `README.md` file located in the problem's directory (folder). The `README.md` file provides a general overview of the problem and will give you additional context when reading the Test Specs.

3. Write your solution code in the `solution_${problem-name}.js` file.

4. Run the test specs to test your code. Prior to starting the checkpoint, it was instructed that you are are responsible for your development environment. Follow the instructions below to run the test specs.

### Setup Test First

- **Fork the repository to your personal GitHub Account**
- **Clone** the repository to your local machine
- **OPTIONAL** - Install the VSCode [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Extensions (if they aren't already installed)
- Run the command `npm install` inside of the TestFirst directory (this will install packages to this project such as `ESLint`, `Pettier`, `testem`)
- Run `testem` with the `npm run test` command or `npx testem` command

### Run Testem with npx testem

In your TestFirst directory run the command:

```sh
$ npm run test
```

OR

```sh

$ npx testem

```

After `testem` initiates, connect to `http//localhost:7357` in your web browser and your test specs will load.

Note: the command **needs to be executed inside of the foundations-checkpoint-pt-1 directory**.

<hr>
<br>

### Point Distribution Overview:

The total amount of points for each problem are listed below. Keep in mind, each test spec has a different "weight" or amount of points it is worth. In addition, you can receive partial credit even if your code isn't passing!

- 00 Find Object Properties: 6.00
- 01 Create a Multiplication Table: 7.00
- 02 Create Book: 8.00
- 03 Alphabet Soup: 7.00

<hr>
<br>

### Submission

When your time limit expires, **commit your changes and push them to your repository on GitHub to be graded in Learndot**.

Make sure you press **Done** on the Checkpoint Page to finalize your Checkpoint submission when you are finished!

**Example**

```
$ git add -A
$ git commit -m 'completed exercises'
$ git push origin master
```

Good luck!
