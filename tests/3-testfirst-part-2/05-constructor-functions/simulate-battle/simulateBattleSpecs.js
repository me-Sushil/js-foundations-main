/* eslint-env jasmine */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */

describe('Pokemon', () => {
  let pikachu;

  beforeEach(() => {
    // NOTE: the use of the new keyword is an important detail to determine if you should use a factory function or a constructor function
    pikachu = new Pokemon('Pikachu', 250, 4);
  });

  it('should have a name property', () => {
    expect(pikachu.name).toBe('Pikachu');
  });

  it('should have a health and attackBonus property', () => {
    expect(pikachu.health).toBe(250);
    expect(pikachu.attackBonus).toBe(4);
  });

  describe("methods and properties are on the Pokemon Constructor Functions `.prototype` object'", () => {
    it('should have a biteAttack and isDefeated function on its .prototpye', () => {
      expect(typeof pikachu.biteAttack === 'function').toBe(true);
      expect(pikachu.hasOwnProperty('biteAttack')).toBe(false);
      expect(Pokemon.prototype.hasOwnProperty('biteAttack')).toBe(true);

      expect(typeof pikachu.isDefeated).toBe('function');
      expect(pikachu.hasOwnProperty('isDefeated')).toBe(false);
      expect(Pokemon.prototype.hasOwnProperty('isDefeated')).toBe(true);
    });

    it('the `biteAttack` method should return the sum of the `attackBonus` property + 2', () => {
      expect(pikachu.biteAttack()).toBe(6);
    });

    it('the `isDefeated` method returns `false` if the health property is >= 1', () => {
      expect(pikachu.isDefeated()).toBe(false);
    });

    it('the `isDefeated` method returns `true` if the health property is <= 0', () => {
      pikachu.health = pikachu.health - 250;
      expect(pikachu.isDefeated()).toBe(true);
    });
  });
});

// NOTE: REVIEW THE READM.md File in the simulte-battle directory
// the README.md file will add additional context to the simulate battle function
describe('simulateBattle function', () => {
  let pikachu;
  let charizard;

  beforeEach(function () {
    pikachu = new Pokemon('Pikachu', 250, 4);
    charizard = new Pokemon('Charizard', 300, 5);
  });

  it('returns a string', () => {
    expect(typeof simulateBattle(pikachu, charizard, 'Pikachu')).toBe('string');
  });

  it('returns a string', () => {
    expect(typeof simulateBattle(pikachu, charizard, 'Pikachu')).toBe('string');
  });

  it('returns the winner (the pokemon that has health remaining)', () => {
    expect(simulateBattle(pikachu, charizard, 'Pikachu')).toBe(
      'Charizard Wins!'
    );
  });

  it('returns the same winner as the previous example when the first two arguments are in a different position', () => {
    expect(simulateBattle(charizard, pikachu, 'Pikachu')).toBe(
      'Charizard Wins!'
    );
  });

  it('returns the winner', () => {
    expect(simulateBattle(pikachu, charizard, 'Charizard')).toBe(
      'Charizard Wins!'
    );
  });

  it('works on multiple instances', () => {
    let krabby = new Pokemon('Krabby', 400, 5);
    let squirtle = new Pokemon('Squirtle', 600, 2);

    expect(simulateBattle(krabby, squirtle, 'Krabby')).toBe('Krabby Wins!');
    expect(simulateBattle(squirtle, krabby, 'Krabby')).toBe('Krabby Wins!');
  });
});
