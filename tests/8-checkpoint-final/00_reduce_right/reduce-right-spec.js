/* eslint-env jasmine */
/* eslint-disable no-unused-vars, no-prototype-builtins, no-undef */

describe('reduceRight takes an array, starting point, and combining function and applies the values in the array starting from the end', () => {
  it('works with string concatenation', () => {
    const stringConcat = (prev, curr) => {
      return prev + curr;
    };
    const reducedResult = reduceRight(
      ['o', 'l', 'l', 'e', 'h'],
      '',
      stringConcat
    );
    expect(reducedResult).toBe('hello');
  });

  it('works with word frequency calculation', () => {
    const words = [
      'I',
      'wish',
      'to',
      'wish',
      'the',
      'wish',
      'you',
      'wish',
      'to',
      'wish',
    ];
    const reducedResult = reduceRight(words, {}, (wordFrequencyObj, word) => {
      if (wordFrequencyObj[word] === undefined) {
        wordFrequencyObj[word] = 1;
      } else {
        wordFrequencyObj[word]++;
      }
      return wordFrequencyObj;
    });
    expect(reducedResult).toEqual({ I: 1, wish: 5, to: 2, the: 1, you: 1 });
  });

  it('does not modify the original array', () => {
    const arr = [4, 5, 6];
    const copyOfOriginal = arr.slice();
    const reducedResult = reduceRight(arr, 0, (total, num) => {
      return total + num;
    });
    expect(reducedResult).toBe(15);
    expect(arr).toEqual(copyOfOriginal);
  });

  it('does not use Array.prototype.reduce or Array.prototype.reduceRight', () => {
    spyOn(Array.prototype, 'reduce');
    spyOn(Array.prototype, 'reduceRight');
    const stringConcat = (prev, curr) => {
      return prev + curr;
    };
    const reducedResult = reduceRight(
      ['o', 'l', 'l', 'e', 'h'],
      '',
      stringConcat
    );

    expect(Array.prototype.reduce.calls.count()).toBe(0);
    expect(Array.prototype.reduceRight.calls.count()).toBe(0);
  });
});
