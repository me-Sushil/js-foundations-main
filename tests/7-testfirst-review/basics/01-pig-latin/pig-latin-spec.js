/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('pigify', () => {
  it('translates a word beginning with a vowel', () => {
    const pigLatinString = pigify('apple');
    expect(pigLatinString).toBe('appleay');
  });

  it('translates a word beginning with a consonant', () => {
    const pigLatinString = pigify('banana');
    expect(pigLatinString).toBe('ananabay');
  });

  it('translates a word beginning with two consonants', () => {
    const pigLatinString = pigify('cherry');
    expect(pigLatinString).toBe('errychay');
  });

  it('translates two words', () => {
    const pigLatinString = pigify('eat pie');
    expect(pigLatinString).toBe('eatay iepay');
  });

  it('translates a word beginning with three consonants', () => {
    const pigLatinString = pigify('three');
    expect(pigLatinString).toBe('eethray');
  });

  it("counts 'sch' as a single phoneme", () => {
    const pigLatinString = pigify('school');
    expect(pigLatinString).toBe('oolschay');
  });

  it("counts 'qu' as a single phoneme", () => {
    const pigLatinString = pigify('quiet');
    expect(pigLatinString).toBe('ietquay');
  });

  it("counts 'qu' as a consonant even when it's preceded by a consonant", () => {
    const pigLatinString = pigify('square');
    expect(pigLatinString).toBe('aresquay');
  });

  it('translates many words', () => {
    const pigLatinString = pigify('the quick brown fox');
    expect(pigLatinString).toBe('ethay ickquay ownbray oxfay');
  });
});
