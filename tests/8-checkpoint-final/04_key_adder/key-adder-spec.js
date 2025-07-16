/* eslint-env jasmine */
/* eslint-disable no-unused-vars, no-prototype-builtins, no-undef */

describe('keyAdder', () => {
  it('keyAdder is a function', () => {
    expect(typeof keyAdder === 'function').toEqual(true);
  });

  it('returns a number value', () => {
    const total = keyAdder.call({ a1: 1, a2: 3, a3: 5 });
    expect(typeof total === 'number').toBe(true);
  });

  it("is designed to be called within an object's context, do not create conditions if called in the global space", () => {
    const myObj = { a0: keyAdder, a1: 1, a2: 2 };
    const total = keyAdder.call({ a1: 4, a2: 5, a3: 6 }); // Note: keyAdder is invoked with `.call`

    expect(typeof total === 'number').toBe(true);
    expect(typeof myObj.a0() === 'number').toBe(true);
  });

  it('adds all the keys with number values and returns their sum', () => {
    const total = keyAdder.call({
      a1: 4,
      a2: 22,
      a3: [1, 2, 3],
      a4: 'Fullstack',
      a5: 10,
    });
    expect(total).toBe(36);
  });

  it("skips properties of the object's prototype", () => {
    const NumberObj = function () {
      this.a0 = 0;
      this.a5 = 5;
      this.a10 = 10;
      this.a15 = 15;
    };

    NumberObj.prototype.a20 = 20;
    NumberObj.prototype.a25 = 25;

    const objectWithNumberVals = new NumberObj();

    expect(keyAdder.call(objectWithNumberVals)).toBe(30);
  });
});
