/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('stringPlusPlus', () => {
  it('is a function', () => {
    expect(typeof stringPlusPlus).toBe('function');
  });

  it('returns a string value', () => {
    const returnedValue = stringPlusPlus('test0001');
    expect(typeof returnedValue === 'string').toBe(true);
  });

  it('returns "1" when the string argument is empty', () => {
    const returnedValue = stringPlusPlus('');
    expect(returnedValue).toBe('1');
  });

  it('adds the character "1" to the end of the string when a string does not end with a number character', () => {
    const returnedValue = stringPlusPlus('movie');
    expect(returnedValue).toBe('movie1');
  });

  it('adds "1" to the number character when it exists at the end of the string', () => {
    const returnedValue = stringPlusPlus('Oceans11');

    expect(returnedValue).toBe('Oceans12');
    expect(stringPlusPlus('ReadyPlayer1')).toBe('ReadyPlayer2');
  });

  it('persists the amount of leading 0s in the final number character', () => {
    const returnedValue = stringPlusPlus('JamesBond007');
    expect(returnedValue).toBe('JamesBond008');
  });

  it('adjusts the size of the final number character if an additional digit is needed', () => {
    const returnedValue = stringPlusPlus('HelloWorld999');
    expect(returnedValue).toBe('HelloWorld1000');
  });

  it('ignores number characters in the middle of the string', () => {
    const returnedValue = stringPlusPlus('Se7en');
    expect(returnedValue).toBe('Se7en1');
  });
});
