/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('sometimes', () => {
  let myFunc;
  let add = (a, b) => {
    return a + b;
  };

  beforeEach(() => {
    myFunc = sometimes(add);
  });

  it('should return a function object', () => {
    expect(typeof myFunc === 'function').toEqual(true);
  });

  it('should return the `add` functions (the function passed to sometimes) return value the first 3 times the function is invoked', () => {
    const outputArr = [];

    for (let i = 0; i < 3; i++) {
      outputArr.push(myFunc(2 + i, 3 + i));
    }
    expect(outputArr).toEqual([5, 7, 9]);
  });

  it("should return the string 'I do not know!' on the 4th time the function is invoked ", () => {
    const outputArr = [];

    for (let i = 0; i < 4; i++) {
      outputArr.push(myFunc(3 + i, 4 + i));
    }
    expect(outputArr).toEqual([7, 9, 11, 'I do not know!']);
  });

  it("each consecutive odd call returns the function's (the function passed to sometimes) return value", () => {
    const outputArr = [];
    let iDoNotk = 'I do not know!';

    for (let i = 0; i < 8; i++) {
      outputArr.push(myFunc(3 + i, 4 + i));
    }
    expect(outputArr).toEqual([7, 9, 11, iDoNotk, 15, iDoNotk, 19, iDoNotk]);
  });

  it("each consecutive even call returns 'I do not know'", () => {
    const outputArr = [];
    let iDoNotk = 'I do not know!';

    for (let i = 0; i < 9; i++) {
      outputArr.push(myFunc(3 + i, 4 + i));
    }
    expect(outputArr).toEqual([
      7,
      9,
      11,
      iDoNotk,
      15,
      iDoNotk,
      19,
      iDoNotk,
      23,
    ]);
  });
});
