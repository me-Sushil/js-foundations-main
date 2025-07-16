/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('call all', () => {
  it('takes an object and an array and returns an array', () => {
    let result = callAll({}, [function() {}]);
    expect(Array.isArray(result)).toBe(true);
  });

  it('calls all of the functions in the array', () => {
    /* NOTE: jasmine.creteSpy() creates a function, it is similar to
       let fnArr = [function one() {return 1},
                    function two() {return 2}
		    ];
       Since the functions below were created using `jasmine.createSpy()`, they have access to additional
       properties for testing purposes thanks to jasmine :)
       
       In the test specs below, `.calls.count()` is called on the functions created by `jasmine.createSpy()`, 
       this enables the ability to track how many times a function is called
    */

    let fnArr = [
      jasmine.createSpy(), // first function
      jasmine.createSpy(), // second function
    ];

    callAll({}, fnArr);
    expect(fnArr[0].calls.count()).toEqual(1);
    expect(fnArr[1].calls.count()).toEqual(1);

    callAll({}, fnArr);
    expect(fnArr[0].calls.count()).toEqual(2);
    expect(fnArr[1].calls.count()).toEqual(2);
  });

  it('calls each function using the object as the context', () => {
    const fnArr = [
      function() {
        this.win = true;
      },
      function() {
        this.lose = false;
      },
    ];
    const obj = {};

    callAll(obj, fnArr);
    expect(obj.win).toEqual(true);
    expect(obj.lose).toEqual(false);
  });

  it('returns an array of each functions return values', () => {
    const fnArr = [
      function firstName() {
        return this.first;
      },

      function lastName() {
        return this.last;
      },
    ];
    const obj = { first: 'Nimit', last: 'Maru' };

    const result = callAll(obj, fnArr);
    expect(result).toEqual(['Nimit', 'Maru']);
  });

  it('returns an array of each functions return value', () => {
    const fnArr = [
      function() {
        return this.a + this.b;
      },
      function() {
        return this.a + this.c;
      },
      function() {
        return this.b + this.c;
      },
      function() {
        return this.a + this.b + this.c;
      },
    ];
    const obj = { a: 1, b: 10, c: 100 };

    const result = callAll(obj, fnArr);
    expect(result).toEqual([11, 101, 110, 111]);
  });

  it('detects if Function.prototype.call is used on each function in the function array', () => {
    spyOn(Function.prototype, 'call').and.callThrough(); // checks that Function.prototype.call is used

    const obj = {};

    const fnArr = [
      function one() {
        return 1;
      },

      function two() {
        return 2;
      },

      function three() {
        return 3;
      },
    ];

    callAll(obj, fnArr);

    expect(Function.prototype.call).toHaveBeenCalledWith(obj);
  });
});
