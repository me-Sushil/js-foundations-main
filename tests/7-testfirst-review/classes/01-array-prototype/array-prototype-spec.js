/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('Array.prototype.maap', () => {
  it('behaves like Array.prototype.map', () => {
    const numbersArr = [1, 2, 3];
    const stringArr = ['bear', 'owl', 'mouse', 'dog'];
    const mappedNumbersArr = numbersArr.maap(val => val + 1);
    const mappedStringArr = stringArr.maap(val => val.toUpperCase());

    expect(mappedNumbersArr).toEqual([2, 3, 4]);
    expect(mappedStringArr).toEqual(['BEAR', 'OWL', 'MOUSE', 'DOG']);
  });

  it('calls Array.prototype.forEach', () => {
    spyOn(Array.prototype, 'forEach').and.callThrough();

    [5, 6, 7, 8].maap(val => val + 1);

    expect(Array.prototype.forEach).toHaveBeenCalled();
  });
});

describe('Array.prototype.fiilter', () => {
  it('behaves like Array.prototype.filter', () => {
    const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const stringArr = ['bear', 'owl', 'mouse', 'dog'];
    const mappedNumbersArr = numbersArr.fiilter(val => val % 2 === 0);
    const mappedStringArr = stringArr.fiilter(val => val.includes('o'));

    expect(mappedNumbersArr).toEqual([2, 4, 6, 8]);
    expect(mappedStringArr).toEqual(['owl', 'mouse', 'dog']);
  });
  it('calls Array.prototype.forEach', () => {
    spyOn(Array.prototype, 'forEach').and.callThrough();

    [5, 6, 7, 8].fiilter(val => val + 1);

    expect(Array.prototype.forEach).toHaveBeenCalled();
  });
});

describe('Array.prototype.reeduce', () => {
  it('behaves like Array.prototype.reduce', () => {
    const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const sum = numbersArr.reeduce((a, b) => a + b, 0);

    expect(sum).toBe(45);
  });

  it('calls Array.prototype.forEach', () => {
    spyOn(Array.prototype, 'forEach').and.callThrough();

    [5, 6, 7, 8].reeduce(val => val + 1);

    expect(Array.prototype.forEach).toHaveBeenCalled();
  });
});
