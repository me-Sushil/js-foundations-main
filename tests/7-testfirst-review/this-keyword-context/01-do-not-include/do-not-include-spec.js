/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('doNotInclude', () => {
  it('the doNotInclude method is added to the Array.prototype object', () => {
    expect(typeof Array.prototype.doNotInclude).toBe('function');
  });
  it('returns an array', () => {
    expect(Array.isArray([1, 2, 3, 4].doNotInclude(3))).toBe(true);
    expect(Array.isArray([1, 2, 3, 4].doNotInclude([0, 2]))).toBe(true);
  });
  it('does not include the index values from the array passed to `doNotInclude`', () => {
    expect([1, 2, 3, 4, 5].doNotInclude([3, 4])).toEqual([1, 2, 3]);
    expect(
      ['zero', 'one', 'two', 'three', 'four', 'five', 'six'].doNotInclude([
        0,
        1,
      ])
    ).toEqual(['two', 'three', 'four', 'five', 'six']);
    expect(
      [
        'a',
        'b',
        'c',
        'dee',
        'e',
        'f',
        'g',
        'h',
        'eye',
        'jay',
        'kay',
        'l',
      ].doNotInclude([0, 2, 4])
    ).toEqual(['b', 'dee', 'f', 'g', 'h', 'eye', 'jay', 'kay', 'l']);
  });

  it('works with a number argument in addition to an array argument seen in previous tests', () => {
    // the number represents the index position to not include
    expect([1, 2, 3].doNotInclude(1)).toEqual([1, 3]);
    expect(
      ['ten', 'eleven', 'twelve', 'twenty', 'thirty'].doNotInclude(2)
    ).toEqual(['ten', 'eleven', 'twenty', 'thirty']);
  });

  it('calls Array.prototype.filter', () => {
    spyOn(Array.prototype, 'filter').and.callThrough();

    expect([330, 500, 7000].doNotInclude(1)).toEqual([330, 7000]);
    expect(['red', 'green', 'blue', 'yellow'].doNotInclude([2, 3])).toEqual([
      'red',
      'green',
    ]);
  });
});
