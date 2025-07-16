/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('interleave', () => {
  it('is a function', () => {
    expect(typeof interleave).toBe('function');
  });

  it('interleaves two single-character strings, in the same order they are passed', () => {
    const result = interleave('a', 'B');
    expect(result).toBe('aB');
  });

  it('interleaves two strings of equal length', () => {
    const result = interleave('hello', 'WORLD');
    expect(result).toBe('hWeOlRlLoD');
  });

  it('does not care about case', () => {
    const result = interleave('HELLO', 'world');
    expect(result).toBe('HwEoLrLlOd');
  });

  it('if the first string is longer, it will add the remaining characters to the end', () => {
    const result = interleave('thisstringislonger', '123');
    expect(result).toBe('t1h2i3sstringislonger');
  });

  it('if the second string is longer, it will add the remaining characters to the end', () => {
    const result = interleave('AFEWLETTERS', 'astringwithmoreletters');
    expect(result).toBe('AaFsEtWrLiEnTgTwEiRtShmoreletters');
  });

  it('interleaves three strings', () => {
    const result = interleave('abc', 'XYZ', '123');
    expect(result).toBe('aX1bY2cZ3');
  });

  it('interleaves three longer strings of equal length', () => {
    const result = interleave('.......', 'helpful', '-------');
    expect(result).toBe('.h-.e-.l-.p-.f-.u-.l-');
  });

  it('interleaves n strings', () => {
    const result = interleave(
      'aB',
      'cD',
      'eF',
      'gH',
      'iJ',
      'kL',
      'mN',
      'oP',
      'qR',
      'sT'
    );
    expect(result).toBe('acegikmoqsBDFHJLNPRT');
  });
});
