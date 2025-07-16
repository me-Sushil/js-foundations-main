### Simulate Battle

#### 1) Pokemon Constructor Function

In order to have Pokemon battle one another, first you need a way to create the Pokemon! **Create the constructor function `Pokemon` that creates a `Pokemon`
with the following properties**:

- Name
- Health
- Attack Bonus

In addition, add the following **two methods on the Pokemon's Constructor Function's `.prototype` property** so all instances of the `Pokemon` can access them. The two methods are:

- `biteAttack`: returns the value of a bite attack. The value of a `biteAttack` is the `attackBonus` value + 2.
- `isDefeated`: returns `true` or `false` depending on the Pokemon's `health` property. - If the `health` value is greater than `0`, return `false` - If the Pokemon's health is less than or equal to `0` return `true`, the Pokemon is defeated.

#### 2) Simulate Battle Function

**Create the function `simulateBattle` that simulates a Pokemon Battle!** How does the battle work?

The `simulateBattle` function accepts three arguments:

    - Pokemon 1
    - Pokemon 2
    - Pokemon name that gets first move

```js
simulateBattle(
  { name: 'Krabby', health: 100, attackBonus: 50 },
  { name: 'Squirtle', health: 50, attackBonus: 0 },
  'Krabby'
);
```

- The **first two arguments are instances of the `Pokemon` Constructor function**.
- These are the two Pokemon thatwill battle each other.
- The **last argument** is the name of the Pokemon that will make the **first attack** in the battle.
- The last argument is a string (the name of the Pokemon).
- The battle will end when one of the two Pokemon in the battle reaches `0`or negative health.

Each Pokemon has the ability called `biteAttack`. `biteAttack` is a method that calculates the sum of a Pokemon's `attackBonus` value and adds `2` to it. Each turn, a Pokemon uses their `biteAttack` ability. The value of the `biteAttack` is subtracted from their opponent's health, e.g.

```js
const krabby = new Pokemon('Krabby', 100, 50);
const squirtle = new Pokemon('Squirtle', 50, 0);

const currentAttacker = krabby;
const opponent = squirtle;

const totalValueOfAttack = krabby.biteAttack();

// totalValueOfAttack = 50+2;
// totalValueOfAttack is subtracted from squirtle's health property
```

Each Pokemon will alternate attacks, e.g:

```
...the name past in as the 3rd (last argument) is the pokemon that attacks first
Krabby attacks Squirtle
Squirtle attacks Krabby
Krabby attacks Squirtle
Squirtle attacks Krabby
...the battle continues until a pokemon reaches 0 or negative health
```

At the end of the battle, state the name of the Winner.

**Example**:

```
simulateBattle(new Pokemon("Krabby", 100, 50), new Pokemon("Squirtle", 50, 0), "Krabby"); // returns `"Krabby Wins!"`
```
