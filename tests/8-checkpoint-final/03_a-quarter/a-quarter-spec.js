/* eslint-env jasmine */
/* eslint-disable no-unused-vars, no-prototype-builtins, no-undef */

describe('aQuarter function', () => {
  const plus = (x, y) => {
    return x + y;
  };

  it('accepts a function argument and returns a new function', () => {
    const returnValue = aQuarter(plus);
    expect(typeof returnValue).toBe('function');
  });

  it('the function returned returns the string "something went wrong :/" the first 3 times it is called, on the 4th call it runs and returns the value of the function passed to aQuarter', () => {
    const functionReturned = aQuarter(plus);
    expect(functionReturned(13, 2)).toBe('something went wrong :/');
    expect(functionReturned(16, 8)).toBe('something went wrong :/');
    expect(functionReturned(7, 2)).toBe('something went wrong :/');
    expect(functionReturned(7, 5)).toBe(12);
  });

  it('it repeats the behavior of returning "something went wrong :/" 3 times in a row, then it runs the function passed to aQuarter and returns the value', () => {
    const functionReturned = aQuarter(plus);

    expect(functionReturned(1, 2)).toBe('something went wrong :/');
    expect(functionReturned(15, 12)).toBe('something went wrong :/');
    expect(functionReturned(4, 11)).toBe('something went wrong :/');
    expect(functionReturned(7, 5)).toBe(12);

    expect(functionReturned(14, 21)).toBe('something went wrong :/');
    expect(functionReturned(41, 32)).toBe('something went wrong :/');
    expect(functionReturned(12, 22)).toBe('something went wrong :/');
    expect(functionReturned(7, 9)).toBe(16);

    expect(functionReturned(16, 21)).toBe('something went wrong :/');
    expect(functionReturned(71, 62)).toBe('something went wrong :/');
    expect(functionReturned(42, 79)).toBe('something went wrong :/');
    expect(functionReturned(8, 20)).toBe(28);
  });

  // the specs below related to handling an unlimited amount of arguments is extra credit and is worth 2 additional points. The problem as a whole is not extra credit
  // only the test-spec below.

  it('EXTRA-CREDIT: the function returned from aQuarter can pass multiple arguments to the function it invokes (the function passed to aQuarter)', () => {
    const concatenate = (strA, strB, strC, strD, strE, strF) => {
      return `${strA} ${strB} ${strC} ${strD} ${strE} ${strF}`;
    };
    const functionReturned = aQuarter(concatenate);
    expect(
      functionReturned('I', 'am', 'running', 'very', 'late', 'tonight')
    ).toBe('something went wrong :/');
    expect(
      functionReturned('I', 'am', 'running', 'very', 'late', 'tonight')
    ).toBe('something went wrong :/');
    expect(
      functionReturned('I', 'am', 'running', 'very', 'late', 'tonight')
    ).toBe('something went wrong :/');
    expect(
      functionReturned('I', 'am', 'running', 'very', 'late', 'tonight')
    ).toBe('I am running very late tonight');

    const multiply = (a, b, c, d, e, f, g, h, i, j, k) => {
      return a * b * c * d * e * f * g * h * i * j * k;
    };

    const multiplier = aQuarter(multiply);
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(39916800);

    // testing if the pattern is repeatable
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(39916800);

    // testing if the pattern is repeatable
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(39916800);

    // testing if the pattern is repeatable
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(39916800);

    // testing if the pattern is repeatable
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(
      'something went wrong :/'
    );
    expect(multiplier(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)).toBe(39916800);
  });
});
