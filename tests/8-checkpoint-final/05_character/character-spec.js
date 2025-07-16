/* eslint-env jasmine */
/* eslint-disable no-unused-vars, no-prototype-builtins, no-undef */
// Note: The ES2015 Class Keyword should be used.

describe('Character Class', () => {
  it('the instance returned has the following properties: `character`, `fontName`, `fontSize`', () => {
    const a = new Character('a', 'Arial', 12);

    expect(a instanceof Character).toBe(true);
    expect(typeof a).toBe('object');
    expect(a.character).toBe('a');
    expect(a.fontName).toBe('Arial');
    expect(a.fontSize).toBe(12);
  });

  it('in addition to the three properties, it has a method "drawCharacter" that returns the character property', () => {
    const b = new Character('b', 'Courier New', 14);

    expect(b.drawCharacter()).toBe('b');
    expect(Object.keys(b).sort()).toEqual([
      'character',
      'fontName',
      'fontSize',
    ]);
    expect(b.hasOwnProperty('drawCharacter')).toBe(false);
  });
});

describe('Letter Class', () => {
  it('Letter is an extension of the Character class, the Letter class contains the same properties and methods as the Character class', () => {
    const c = new Letter('c', 'Helvetica', 16, 'lowerCase');

    expect(c.character).toBe('c');
    expect(c.fontName).toBe('Helvetica');
    expect(c.fontSize).toBe(16);

    expect(c.drawCharacter()).toBe('c');
    expect(c.hasOwnProperty('drawCharacter')).toBe(false);

    expect(c instanceof Letter).toBe(true);
    expect(c instanceof Character).toBe(true);
  });

  it('every instance of the Letter class has a custom property "charCase"', () => {
    const d = new Letter('d', 'Verdana', 8, 'lowerCase');

    expect(d.charCase).toBe('lowerCase');
  });

  it('every instance of the Letter class has 3 custom methods, `toLowerCase`, `toUpperCase`, and `getCase`', () => {
    const e = new Letter('E', 'Times New Roman', 22, 'upperCase');

    expect(typeof e.toLowerCase).toBe('function');
    expect(typeof e.toUpperCase).toBe('function');
    expect(typeof e.getCase).toBe('function');

    expect(e.hasOwnProperty('toLowerCase')).toBe(false);
    expect(e.hasOwnProperty('toUpperCase')).toBe(false);
    expect(e.hasOwnProperty('getCase')).toBe(false);
  });

  it('the `getCase` method returns the value located at the `charCase` property on the Letter instance', () => {
    const f = new Letter('F', 'Georgia', 99, 'upperCase');
    const e = new Letter('e', 'Times New Roman', 22, 'lowerCase');

    expect(f.getCase()).toBe('upperCase');
    expect(e.getCase()).toBe('lowerCase');
  });

  it('the `toLowerCase` method sets the `charCase` property to `"lowerCase"` and sets the character property to a lower case character', () => {
    const g = new Letter('G', 'Georgia', 99, 'upperCase');
    const beforeToLowerCaseInvocation = g.getCase();
    const characterBeforeToLowerCaseInvocation = g.drawCharacter();

    expect(beforeToLowerCaseInvocation).toBe('upperCase');
    expect(characterBeforeToLowerCaseInvocation).toBe('G');

    g.toLowerCase();

    expect(g.getCase()).toBe('lowerCase');
    expect(g.drawCharacter()).toBe('g');
  });

  it('the `toUpperCase` method sets the `charCase` property to `"upperCase"` and sets the character property to an upper case character', () => {
    const h = new Letter('h', 'Palatino', 4, 'lowerCase');
    const beforeToUpperCaseInvocation = h.getCase();
    const characterBeforeToUpperCaseInvocation = h.drawCharacter();

    expect(beforeToUpperCaseInvocation).toBe('lowerCase');
    expect(characterBeforeToUpperCaseInvocation).toBe('h');

    h.toUpperCase();

    expect(h.getCase()).toBe('upperCase');
    expect(h.drawCharacter()).toBe('H');
  });
});

describe('Digit Class', () => {
  it('Digit is an extension of the Character class, the Digit class contains the same properties and methods as the Character class', () => {
    const one = new Digit(1, 'Helvetica', 16);

    expect(one.character).toBe(1);
    expect(one.fontName).toBe('Helvetica');
    expect(one.fontSize).toBe(16);
    expect(one.isDigit).toBe(true);

    expect(one.drawCharacter()).toBe(1);
    expect(one.hasOwnProperty('drawCharacter')).toBe(false);

    expect(one instanceof Digit).toBe(true);
    expect(one instanceof Character).toBe(true);
  });

  it('if a numeric string character is the first argument, the isDigit property is set to false', () => {
    const three = new Digit('3', 'Georgia', 12);
    expect(three.isDigit).toBe(false);
  });

  it('Digit has a custom `integerValue` method that converts a numeric string character to a number data type and updates the isDigit property to true or false (this depends if the character is a numeric string or a number)', () => {
    /*
      There are various approaches to convert the string '1' to the number 1.
      The [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) function is a great option!
    */
    const two = new Digit('2', 'Arial', 10);
    const beforeIntegerValueInvocation = two.drawCharacter();
    const isDigitBeforeIntegerValueInvocation = two.isDigit;

    expect(isDigitBeforeIntegerValueInvocation).toBe(false);
    expect(beforeIntegerValueInvocation).toBe('2');
    expect(typeof beforeIntegerValueInvocation).toBe('string');

    two.integerValue();

    expect(two.isDigit).toBe(true);
    expect(two.drawCharacter()).toBe(2);
    expect(typeof two.drawCharacter()).toBe('number');
  });

  // it('the ingegerValue method does not change ')
});
