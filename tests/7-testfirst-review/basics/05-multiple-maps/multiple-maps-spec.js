/* eslint-env jasmine */
/* eslint-disable no-undef, no-unused-vars */

describe('multipleMaps', () => {
  it('multipleMaps is a function', () => {
    expect(typeof multipleMaps).toBe('function');
  });

  it('multipleMaps returns an array', () => {
    const isArray = Array.isArray(multipleMaps([], []));
    expect(isArray).toBe(true);
  });

  it('the values from the first array argument are mapped to the array of objects in the second array argument', () => {
    const miniMap = multipleMaps([0], [{ 0: 'zero' }]);
    const numberMap = multipleMaps(
      [5, 6, 7],
      [{ 5: 'five', 6: 'six', 7: 'seven' }]
    );
    const characterMap = multipleMaps(
      ['a', 'b', 'c', 'd'],
      [{ a: 0, b: 1, c: 2, d: 3 }]
    );

    expect(miniMap).toEqual(['zero']);
    expect(numberMap).toEqual(['five', 'six', 'seven']);
    expect(characterMap).toEqual([0, 1, 2, 3]);
  });

  it('properly maps values from the first array argument when there are multiple maps in the second argument', () => {
    const numberMap = multipleMaps(
      [1, 2, 3, 4],
      [
        { 1: '!', 2: '@' },
        { 3: '#', 4: '$' },
      ]
    );
    const characterMap = multipleMaps(
      ['a', 'b', 'c', 'd'],
      [{ a: 0, b: 1 }, { c: 2 }, { d: 3 }]
    );

    expect(numberMap).toEqual(['!', '@', '#', '$']);
    expect(characterMap).toEqual([0, 1, 2, 3]);
  });

  it('Array.prototpye.map is used', () => {
    spyOn(Array.prototype, 'map').and.callThrough();

    const numberMap = multipleMaps(
      [1, 2, 3, 4],
      [
        { 1: '!', 2: '@' },
        { 3: '#', 4: '$' },
      ]
    );

    expect(Array.prototype.map).toHaveBeenCalled();
  });
});
