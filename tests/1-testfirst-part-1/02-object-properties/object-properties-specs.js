/* eslint-disable no-unused-vars, no-undef */

describe('Properties on Object Literal', () => {
  let object;

  // the `beforeEach` function is called once before each unit test spec
  // "unit tests" or "tests" begin with the "it" function.
  beforeEach(() => {
    // Each test re-assigns an empty object literal to the object variable.
    object = {};
    setPropsOnObj(object);

    /* `setPropsOnObj is a function you need to define and create in `properties.js`.
    The variable `object` is passed to the setPropsOnObj function and adds properties
    on to the argument (which is an object literal).
    */
  });

  describe('the function `setPropsOnObj`', () => {
    it('sets x to 7', () => {
      expect(object.x).toBe(7);
    });

    it('sets `y` to 8 (and we can use a string to access it)', () => {
      expect(object['y']).toBe(8);
    });

    it('sets the property `onePlus` to a function that adds one to its argument', () => {
      expect(object.onePlus(4)).toBe(5);
      expect(object['onePlus'](123)).toBe(124);
    });
  });
});

/* Let's explore the idea of using Arrays instead of Object Literals.
A great feature of JavaScript is that Arrays are a special
type of Object.  Everything that you can do
with objects, you can also do with arrays.
*/

describe('Properties on an Array Object', () => {
  let arrayObject;

  beforeEach(() => {
    arrayObject = [];
    setPropsOnArr(arrayObject);
  });

  describe('the function `setPropsOnArr`', () => {
    it('sets the property `hello` to a function that returns the string `Hello!`', () => {
      expect(arrayObject.hello()).toBe('Hello!');
    });

    it('sets the property `full` and assigns the value `stack`', () => {
      expect(arrayObject['full']).toBe('stack');
    });

    it('accesses the zeroth index value in the array', () => {
      expect(arrayObject[0]).toBe(5);
    });

    it("sets the property 'twoTimes' to a function that multiplies its parameter by 2", () => {
      expect(arrayObject.twoTimes(4)).toBe(8);
      expect(arrayObject['twoTimes'](123)).toBe(246);
    });
  });
});

/* Functions are also Objects! Functions and Arrays
have the same features as Object Literals. You can add properties to them,
pass them to functions as arguments, and return them as values from functions.
*/

describe('Properties on a Function Object', () => {
  let functionObject;

  beforeEach(() => {
    functionObject = () => {
      return 'I am a function object, all functions are objects! Function can have their own properties too!';
    };

    setPropsOnFunc(functionObject);
  });

  describe('the function `setPropsOnFunc`', () => {
    it('sets year to 20??', () => {
      expect(functionObject.year).toBe('20??');
    });

    it('sets `divideByTwo` to a function that accepts a number and returns the value divided by two ', () => {
      expect(functionObject.divideByTwo(6)).toBe(3);
    });
  });
});

describe('shallowCopy', () => {
  it('is a function', () => {
    expect(typeof shallowCopy).toBe('function');
  });
  it('merges and returns a shallow copy of two arrays', () => {
    const gumBrands = ['orbit', 'trident', 'chiclet', 'strident'];
    const mintBrands = ['altoids', 'certs', 'breath savers', 'tic tac'];

    spyOn(gumBrands, 'slice').and.callThrough();
    spyOn(mintBrands, 'slice').and.callThrough();

    expect(shallowCopy(gumBrands, mintBrands)).toEqual([
      'orbit',
      'trident',
      'chiclet',
      'strident',
      'altoids',
      'certs',
      'breath savers',
      'tic tac',
    ]);
    expect(gumBrands.slice.calls.count() === 0).toBe(true);
    expect(mintBrands.slice.calls.count() === 0).toBe(true);
  });

  it('merges and returns a shallow copy of an object', () => {
    const hockeyTeam = { ch: 'blackhawks' };
    const baseballTeam = { ny: 'yankees' };
    spyOn(Object, 'assign').and.callThrough(); // instead of using Object.assign, you can use the spread syntax on objects as well!

    expect(shallowCopy(hockeyTeam, baseballTeam)).toEqual({
      ch: 'blackhawks',
      ny: 'yankees',
    });
    expect(Object.assign.calls.count() === 0).toBe(true);
  });
});
