/* eslint-env jasmine */
/* eslint-disable no-undef */
describe('acceptedWords', () => {
  it('returns an array', () => {
    const arrayReturned = acceptedWords(1, 4);
    expect(Array.isArray(arrayReturned)).toBe(true);
  });

  it('returns an array of words from the `wordList` global variable that match the criteria: 3 vowels and 3 consonants, no forbidden characters', () => {
    const arrayReturned = acceptedWords(3, 3, []);
    expect(arrayReturned).toEqual([
      'airbus',
      'beside',
      'boccie',
      'cooled',
      'devout',
      'either',
      'famous',
      'indies',
      'joules',
      'lounge',
      'mouses',
      'nuclei',
      'ocular',
      'omegas',
      'peaced',
      'poodle',
      'quails',
      'quiets',
      'quinas',
      'readme',
      'sedate',
      'soaked',
      'tomato',
      'upbeat',
      'useful',
      'voices',
      'weapon',
      'zeroed',
      'zombie',
      'zoomed',
    ]);
  });

  it('returns an array of words from the `wordList` global variable that match the criteria: 2 vowels, 4 consonants, and does not include the characters in the array argument', () => {
    const arrayReturned = acceptedWords(2, 4, ['a', 'p']);
    expect(arrayReturned).toEqual([
      'bowing',
      'bronco',
      'coding',
      'joyful',
      'kiting',
      'logoff',
      'oddity',
      'ruling',
      'unholy',
    ]);
  });

  it('returns an array of words from the `wordList` global variable that match the criteria: 3 vowels, 4 consonants, and does not include the characters in the array argument', () => {
    const arrayRelturned = acceptedWords(3, 6, ['a', 'b', 'e', 'o']);
    expect(arrayRelturned).toEqual([
      'circuitry',
      'insulting',
      'intruding',
      'mimicking',
      'quidditch',
      'rupturing',
      'spiriting',
      'uncurling',
      'uncursing',
      'unifyings',
      'unluckily',
      'unwishful',
      'vikingism',
      'visitings',
    ]);
  });

  it('returns an array of words from the `wordList` global variable that match the criteria: 1 vowel, 7 consonants, and does not include the characters in the array argument', () => {
    const arrayReturned = acceptedWords(1, 7, ['a']);
    expect(arrayReturned).toEqual([
      'brightly',
      'cyclists',
      'postsync',
      'psyching',
      'rhythmic',
      'rhythmus',
      'slightly',
      'symphony',
    ]);
  });

  it('returns an array of words from the `wordList` global variable that match the criteria: 3 vowel, 3 consonants, and does not include the characters in the array argument', () => {
    const arrayReturned = acceptedWords(3,3,['a', 'e', 'i', 'o', 'u'])
    expect(arrayReturned).toEqual([]);
  });

  it('calls Array.prototype.filter', () => {
    spyOn(Array.prototype, 'filter').and.callThrough();

    acceptedWords(1, 7, ['a']);

    expect(Array.prototype.filter).toHaveBeenCalled();
  })
});
