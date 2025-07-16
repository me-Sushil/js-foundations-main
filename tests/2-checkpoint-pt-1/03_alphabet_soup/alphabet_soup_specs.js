/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('soup', () => {

  it('the soup function returns a boolean', () => {
    expect(typeof soup('a', 'a')).toBe('boolean');
    expect(typeof soup('aa', 'b')).toBe('boolean');
  });

  it('the soup function returns true if the "characterBank" (second argument) has enough characters to create the "phrase" (first argument)', () => {
    const phrase = 'a';
    const characterBank = 'a';

    expect(soup(phrase, characterBank)).toBe(true);
  });

  it('the soup function returns false if the "characterBank" (second argument) does NOT have enough characters to create the "phrase" (first argument)', () => {
    const phrase = 'ab';
    const characterBank = 'aa';

    expect(soup(phrase, characterBank)).toBe(false);
  });

  it('the soup function returns the proper boolean value for complex phrases', () => {
    const phrase = 'helloworld';
    const characterBank = 'dlhelolwor';

    expect(soup(phrase, characterBank)).toBe(true);

    // additional phrases

    expect(soup('cabba', 'bacba')).toBe(true);
    expect(soup('yes', 'yeah')).toBe(false);
  });

  it('the soup function returns true when there are "extra" characters in the character bank', () => {
    const phrase = 'goodbye';
    const characterBank = 'hodoegbyzemnope';

    expect(soup(phrase, characterBank)).toBe(true);

    // additional phrases

    expect(soup('greatjob', 'btergjooziu')).toBe(false);
    expect(soup('javascript', 'jacariptsvvjai')).toBe(true);
    expect(soup('hello', 'helo')).toBe(false);
  });

});
