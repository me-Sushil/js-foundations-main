/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('vowelsCount', () => {
  it('returns an Object', () => {
    expect(typeof vowelsCount('rubber duck debugging')).toBe('object');
  });
  it('should handle an empty String', () => {
    expect(vowelsCount('')).toEqual({
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
      total: 0,
    });
  });
  it('should handle a String with no Vowels', () => {
    expect(vowelsCount('http://')).toEqual({
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
      total: 0,
    });
  });

  it('should handle a String with Vowels', () => {
    expect(vowelsCount('Hello')).toEqual({
      a: 0,
      e: 1,
      i: 0,
      o: 1,
      u: 0,
      total: 2,
    });

    expect(vowelsCount('EUTOPIA')).toEqual({
      a: 1,
      e: 1,
      i: 1,
      o: 1,
      u: 1,
      total: 5,
    });
  });

  it('should handle a String with multiple words and Vowels', () => {
    expect(vowelsCount('Hello World!')).toEqual({
      a: 0,
      e: 1,
      i: 0,
      o: 2,
      u: 0,
      total: 3,
    });

    expect(vowelsCount('rubber duck debugging')).toEqual({
      a: 0,
      e: 2,
      i: 1,
      o: 0,
      u: 3,
      total: 6,
    });
  });

  it('should handle a String with all vowels', () => {
    expect(vowelsCount('AeIoU')).toEqual({
      a: 1,
      e: 1,
      i: 1,
      o: 1,
      u: 1,
      total: 5,
    });
  });

  it('should call Array.prototype.reduce', () => {
    spyOn(Array.prototype, 'reduce').and.callThrough();
    vowelsCount('Hello World');
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});
