/* eslint-env jasmine */
/* eslint-disable no-undef */

// NOTE: Review the README.md file to gain a better understanding of the problem
describe('mapQuest', () => {
  it('accepts an array and returns an array', () => {
    const valueReturned = mapQuest(['N', 'S', 'E', 'W']);
    expect(Array.isArray(valueReturned)).toBe(true);
  });

  it('does not change the directional points if the directions next to each other are not opposites', () => {
    expect(mapQuest(['S'])).toEqual(['S']);
    expect(mapQuest(['N'])).toEqual(['N']);
    expect(mapQuest(['N', 'W'])).toEqual(['N', 'W']);
    expect(mapQuest(['N', 'E', 'S', 'W'])).toEqual(['N', 'E', 'S', 'W']);
  });

  it('removes opposite directional points when they are next to each other', () => {
    expect(mapQuest(['N', 'S'])).toEqual([]);
    expect(mapQuest(['S', 'N'])).toEqual([]);
    expect(mapQuest(['E', 'W'])).toEqual([]);
    expect(mapQuest(['W', 'E'])).toEqual([]);
    expect(mapQuest(['N', 'S', 'E'])).toEqual(['E']);
    expect(mapQuest(['S', 'E', 'W', 'W'])).toEqual(['S', 'W']);
  });

  it('handles complex cases', () => {
    expect(mapQuest(['W', 'N', 'S', 'E', 'N'])).toEqual(['N']);
    expect(
      mapQuest([
        'N',
        'N',
        'E',
        'W',
        'S',
        'S',
        'E',
        'W',
        'N',
        'N',
        'W',
        'S',
        'E',
      ])
    ).toEqual(['N', 'N', 'W', 'S', 'E']);
  });

  // Note: solving this with reduce might be a stretch at first. If you are having trouble, first solve it with out reduce and gain a solid understanding of the problem.
  // then try to refactor your code to use reduce.
  it('uses Array.prototype.reduce', () => {
    spyOn(Array.prototype, 'reduce').and.callThrough();

    mapQuest(['N', 'S', 'E', 'W']);

    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});
