/* eslint-env jasmine */
/* eslint-disable no-undef */


// Given some number, n, factorial should
// compute n * (n-1) * (n-2) ... * 1
describe('the function factorial', () => {
  // The iterative approach is probably the one you
  // are more familiar with--it involves looping.
  describe('iterative approach', () => {
    it('correctly computes factorial', () => {
      let result = factorialIterative(10);
      let expected = 3628800;
      expect(result).toBe(expected);
    });
  });

  describe('recursive approach', () => {
    it('handles the base case', () => {
      expect(factorial(0)).toBe(1);
    });
    it('correctly comptues factorial', () => {
      expect(factorial(10)).toEqual(3628800);
      expect(factorial(4)).toEqual(24);
      expect(factorial(2)).toBe(2);
      expect(factorial(1)).toBe(1);
    });
    it('calls itself recursively', () => {
      /* 
        NOTE: This is a test spec that determines if the factorial function calls itself recursively 
        In order to make this spec work properly, the function needs to be declared as a function declaration:
          function factorial() {
          }
        You can't use an expression:
          const factorial = function() {}
          const factorial = () => {}
        There isn't anything fundamentally wrong with creating the function with an expression, but the test specs won't
        be able to recognize the function if declared with an expression.
      */

      spyOn(window, 'factorial').and.callThrough();

      factorial(12);

      // checks if `factorial` is called more than once (if it is recursive, it will be called more than one time)
      expect(factorial.calls.count()).toBeGreaterThan(1);
    });
  });
});

describe('sumTheDigits', () => {
  it('handles the base case', () => {
    expect(sumTheDigits([])).toBe(0);
  });
  it('sums all the numbers in the array', () => {
    expect(sumTheDigits([1, 2, 3, 4, 5])).toBe(15);
    expect(sumTheDigits([11, 12, 13])).toBe(36);
    expect(sumTheDigits([55, 7000, 22, 9876])).toBe(16953);
    expect(sumTheDigits([5, 4, 3, 2, 1])).toBe(15);
    expect(sumTheDigits([1, 2])).toBe(3);
    expect(sumTheDigits([5])).toBe(5);
  });
  it('calls itself recursively', () => {
    /* 
      NOTE: This is a test spec that determines if the sumTheDigits function calls itself recursively 
      In order to make this spec work properly, the function needs to be declared as a function declaration:
        function sumTheDigits() {
        }
      You can't use an expression:
        const sumTheDigits = function() {}
        const sumTheDigits = () => {}
      There isn't anything fundamentally wrong with creating the function with an expression, but the test specs won't
      be able to recognize the function if declared with an expression.
    */

    spyOn(window, 'sumTheDigits').and.callThrough();

    sumTheDigits([8, 4, 0, 8, 5]);

    // checks if `sumTheDigits` is called more than once (if it is recursive, it will be called more than one time)
    expect(sumTheDigits.calls.count()).toBeGreaterThan(1);
  });
});

describe('countTheVowels', () => {
  it('handles the base case', () => {
    expect(countTheVowels('')).toBe(0);
  });
  it('returns the total amount of vowels in a string (a,e,i,o,u are considered vowels, ignore y)', () => {
    expect(countTheVowels('a')).toBe(1);
    expect(countTheVowels('b')).toBe(0);
    expect(countTheVowels('ab')).toBe(1);
    expect(countTheVowels('abc')).toBe(1);
    expect(countTheVowels('abcde')).toBe(2);
    expect(countTheVowels("you miss 100% of the shots you don't take")).toBe(
      11
    );
    expect(countTheVowels("there's no place like home")).toBe(9);
    expect(countTheVowels('dubble bubble bubble gum')).toBe(7);
  });
  it('calls itself recursively', () => {
    /* 
      NOTE: This is a test spec that determines if the countTheVowels function calls itself recursively 
      In order to make this spec work properly, the function needs to be declared as a function declaration:
        function countTheVowels() {
        }
      You can't use an expression:
        const countTheVowels = function() {}
        const countTheVowels = () => {}
      There isn't anything fundamentally wrong with creating the function with an expression, but the test specs won't
      be able to recognize the function if declared with an expression.
    */

    spyOn(window, 'countTheVowels').and.callThrough();

    countTheVowels('whats going on?');

    // checks if `countTheVowels` is called more than once (if it is recursive, it will be called more than one time)
    expect(countTheVowels.calls.count()).toBeGreaterThan(1);
  });
});

describe('recSmallestInt', () => {
  it('handles the base case', () => {
    expect(recSmallestInt([1])).toBe(1);
  });
  it('returns the smallest integer', () => {
    expect(recSmallestInt([1, 2])).toBe(1);
    let smallest = recSmallestInt([8, 4, 2, 8, 5]);
    expect(smallest).toEqual(2);
  });

  it('returns the smallest integer, when negative', () => {
    let smallest = recSmallestInt([5, 4, 0, 8, -5]);
    expect(smallest).toEqual(-5);
  });

  it('calls itself recursively', () => {
    /* 
      NOTE: This is a test spec that determines if the recSmallestInt function calls itself recursively 
      In order to make this spec work properly, the function needs to be declared as a function declaration:
        function recSmallestInt() {
        }
      You can't use an expression:
        const recSmallestInt = function() {}
        const recSmallestInt = () => {}
      There isn't anything fundamentally wrong with creating the function with an expression, but the test specs won't
      be able to recognize the function if declared with an expression.
    */

    spyOn(window, 'recSmallestInt').and.callThrough();

    recSmallestInt([8, 4, 0, 8, 5]);

    // checks if `recSmallesInt` is called more than once (if it is recursive, it will be called more than one time)
    expect(recSmallestInt.calls.count()).toBeGreaterThan(1);
  });
});

// In the fibonacci sequence, the first and second
// numbers are both equal to 1.

// Each following number is the sum of the previous two.
// For example, this means the third number should be 2.

describe('recursive fibonacci', () => {
  it('handles the base cases', () => {
    //When n is 1 or 0, you know immediately what you should return!
    expect(fib(0)).toEqual(1);
    expect(fib(1)).toEqual(1);
  });
  it('correctly computes the third fibonacci number', () => {
    expect(fib(2)).toEqual(2);
  });
  it('correctly computes the 23rd fibonacci number', () => {
    expect(fib(22)).toEqual(28657);
  });
  it('calls itself recursively', () => {
    /* 
      NOTE: This is a test spec that determines if the fib function calls itself recursively 
      In order to make this spec work properly, the function needs to be declared as a function declaration:
        function fib() {
        }
      You can't use an expression:
        const fib = function() {}
        const fib = () => {}
      There isn't anything fundamentally wrong with creating the function with an expression, but the test specs won't
      be able to recognize the function if declared with an expression.
    */

    spyOn(window, 'fib').and.callThrough();

    fib(5);

    // checks if `fib` is called more than once (if it is recursive, it will be called more than one time)
    expect(fib.calls.count()).toBeGreaterThan(1);
  });
});

//Here we are creating variables of different types
let und = undefined;
let nll = null;
let bool = true;
let num = 123;
let str = 'abc';
let fnc = function () { };
let arr = [];
let obj = {};

// The 'type' function will behave a lot like JavaScript's
// typeof operator. See more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// You shouldn't be using recursion for the type function. This is a utility function
// That you will be using in the next recursive function
// But don't use typeof in your solution!

describe('the utility function type', () => {
  it('returns the correct type of its input', () => {
    expect(type(und)).toEqual('Undefined');
    expect(type(nll)).toEqual('Null');
    expect(type(bool)).toEqual('Boolean');
    expect(type(num)).toEqual('Number');
    expect(type(str)).toEqual('String');
    expect(type(fnc)).toEqual('Function');
    expect(type(arr)).toEqual('Array');
    expect(type(obj)).toEqual('Object');
  });
  it('does not use typeof', () => {
    // this assertion looks for "typeof" anywhere in type function's body,
    // but it'll exclude comments from the search
    const commentsRemoved = type
      .toString()
      .replace(/\/\/[\s\S]*?\n/g, '')
      .replace(/\/\*[\s\S]*?\*\//g, '');
    const bodyContainsTypeOf = /typeof/.test(commentsRemoved);
    expect(bodyContainsTypeOf).toBe(false);
  });

  // Hmmm...if you can't use typeof what can you do?
  //
  // Well, go to a JS console and call .toString() on some object.
  // You should get something like "[object Object]". Neat, maybe
  // we can get the type from this?
  //
  // But, wait, if you .toString() an Array, or a Number, something
  // different happens. We'd really like to use Object's toString
  // method on some input.
  //
  // Look into the .call method that every function has, and see
  // if you can figure out a way to make this happen. See the
  // docs here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

  it('invokes "Object\'s" toString method', () => {
    spyOn(Object.prototype.toString, 'call').and.callThrough();
    type();
    expect(Object.prototype.toString.call).toHaveBeenCalled();
  });
});

// stringify converts anything into a string
describe('the function stringify', () => {
  // We'll need different approaches for different types of
  // data, so it only makes sense that we'll use our very own
  // type function on stringify's input.

  // values that aren't Arrays and Objects...coerce them to strings
  it('handles everything but Arrays and Objects', () => {
    expect(stringify(und)).toBe('undefined');
    expect(stringify(nll)).toBe('null');
    expect(stringify(bool)).toBe('true');
    expect(stringify(num)).toBe('123');
    expect(stringify(str)).toBe('"abc"');
  });

  describe('on Arrays', () => {
    it('invokes itself on each element', () => {
      const testArr = [1, 'something', []];
      expect(stringify(testArr)).toBe('[1,"something",[]]');
    });
    it('can handle nesting', () => {
      const testArr = [1, 'a', [true, 'b', [null], 'c'], 3];
      stringify(testArr);
      expect(stringify(testArr)).toBe('[1,"a",[true,"b",[null],"c"],3]');
    });
    it('wraps with brackets and concatenates with commas', () => {
      const result = stringify([1, 'a', [true, 'b', [null], 'c'], 3]);
      const expected = '[1,"a",[true,"b",[null],"c"],3]';
      expect(result).toEqual(expected);
    });

    // The native Array.prototype.toString method actually does
    // exactly what we want.... but it's better practice
    // to create it on your own :)

    // You might find Array.prototype.join useful.
    it('does not use native string conversion', () => {
      spyOn(Array.prototype, 'toString').and.callThrough();
      stringify([1, 2, 3]);
      expect(Array.prototype.toString).not.toHaveBeenCalled();
    });

    it('calls itself recursively', () => {
      /* 
        NOTE: This is a test spec that determines if the stringify function calls itself recursively 
        In order to make this spec work properly, the function needs to be declared as a function declaration:
          function stringify() {
          }
        You can't use an expression:
          const stringify = function() {}
          const stringify = () => {}
        There isn't anything fundamentally wrong with creating the function with an expression, but the test specs won't
        be able to recognize the function if declared with an expression.
      */

      spyOn(window, 'stringify').and.callThrough();

      stringify([4, 6, 7]);

      // checks if `stringify` is called more than once (if it is recursive, it will be called more than one time)
      expect(stringify.calls.count()).toBeGreaterThan(1);
    });
  });

  describe('on Objects', () => {
    it('wraps with curly braces, inserts colons, and concatenates with commas', () => {
      const testObj = {
        c: 1,
        d: 2,
      };
      // const result = stringify({
      //   a: 1,
      //   b: 2,
      // });

      expect(stringify(testObj)).toBe('{"c":1,"d":2}');
      // expect(result).toBe('{"a":1,"b":2}');
    });
    it('can handle arbitrary nesting', () => {
      const result = stringify({
        a: {
          b: true,
          c: [
            null,
            {
              d: 1,
            },
          ],
          e: {
            f: 'abc',
          },
        },
        g: undefined,
      });
      const expected =
        '{"a":{"b":true,"c":[null,{"d":1}],"e":{"f":"abc"}},"g":undefined}';
      expect(result).toEqual(expected);
    });
    it('calls itself recursively', () => {
      /* 
        NOTE: This is a test spec that determines if the stringify function calls itself recursively 
        In order to make this spec work properly, the function needs to be declared as a function declaration:
          function stringify() {
          }
        You can't use an expression:
          const stringify = function() {}
          const stringify = () => {}
        There isn't anything fundamentally wrong with creating the function with an expression, but the test specs won't
        be able to recognize the function if declared with an expression.
      */

      spyOn(window, 'stringify').and.callThrough();

      stringify({ a: 'a', b: [null, { d: 1 }] });

      // checks if `stringify` is called more than once (if it is recursive, it will be called more than one time)
      expect(stringify.calls.count()).toBeGreaterThan(1);
    });
  });
});

describe('search', () => {
  it('operates on an array, takes a function and returns a boolean', () => {
    // Note: Notice that `search` is invoked with .call, the context object is an array.
    const result = search.call([], function () { });
    expect(typeof result === 'boolean').toBe(true);
  });

  it('uses the provided matching function to find an element in the contextual array', () => {

    // Note: the matching function is the function argument

    const arr = ['yellow', 13, {}, 'something else'];
    let result;

    result = search.call(arr, function (val) {
      return val === 13;
    });
    expect(result).toEqual(true); // arr contains 13

    result = search.call(arr, function (val) {
      return typeof val === 'function';
    });
    expect(result).toEqual(false); // arr does not contain a function
  });

  it('tests values inside nested arrays', () => {
    let arr;
    let result;

    arr = ['a', ['b', ['c', ['d'], 'e'], 'f'], ['g'], 'h', [['i'], 'j']];
    result = search.call(arr, val => {
      return val === 'd';
    });
    expect(result).toEqual(true);
    result = search.call(arr, val => {
      return val === 'z';
    });
    expect(result).toEqual(false);

    arr = [
      [1, 2, [3, [[4], [5], [6]], 7, 8, 9, [10]]],
      11,
      [[12], [[13, 14]]],
      15,
    ];
    result = search.call(arr, val => {
      return val > 9;
    });
    expect(result).toEqual(true);
    result = search.call(arr, val => {
      return val % 17 === 0;
    });
    expect(result).toEqual(false);
  });

  it('is recursive', () => {
    // this checks that search is invoked with .call or .apply
    // this makes it recursive because the function is called within
    // its code block.
    expect(search.toString()).toMatch(/search.(call|apply)/);
  });
});

describe('recursiveMap', () => {
  it('returns an array', () => {
    const valueReturned = recursiveMap([1, 2, 3, 4], num => {
      return num * 2;
    });

    expect(Array.isArray(valueReturned)).toBe(true);
  });

  it('passes each element in the array argument to the callback function and stores the value returned in a new array', () => {
    expect(
      recursiveMap([1, 2, 3, 4], num => {
        return num * 2;
      })
    ).toEqual([2, 4, 6, 8]);

    expect(
      recursiveMap(['keep', 'practicing', 'recursion'], str => {
        return str.toUpperCase();
      })
    ).toEqual(['KEEP', 'PRACTICING', 'RECURSION']);
  });

  it('maps over nested arrays and includes the values from the nested arrays in the final array returned from recursiveMap', () => {
    expect(
      recursiveMap([1, 2, [3, 4], [5, 6]], num => {
        return num * 2;
      })
    ).toEqual([2, 4, 6, 8, 10, 12]);

    expect(
      recursiveMap([
        'ab',
        'cd',
        ['ef', 'gh', ['ij', 'kl', 'mn'], 'op'],
        'qr',
        'st',
      ], str => str.toUpperCase())
    ).toEqual(['AB', 'CD', 'EF', 'GH', 'IJ', 'KL', 'MN', 'OP', 'QR', 'ST']);
  });

  it('does not use Array.prototype.map', () => {
    spyOn(Array.prototype, 'map').and.callThrough();

    recursiveMap([1, 2, 3, 4], num => num + 2);

    expect(Array.prototype.map.calls.count()).toBe(0);
  })

  it('calls itself recursively', () => {
    spyOn(window, 'recursiveMap').and.callThrough();

    recursiveMap([1, 2, 3, 4], num => num + 2);

    expect(recursiveMap.calls.count()).toBeGreaterThan(1);
  })
});
