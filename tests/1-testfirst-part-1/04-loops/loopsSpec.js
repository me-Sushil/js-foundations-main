/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('Looping', () => {
  // Let's repeat ourselves several times
  describe('The function `repeat`', () => {
    it('returns an empty string with 0 repeats', () => {
      /*
       From this spec, we learn that we are creating the function 'repeat'
       which takes two arguments, a string and a number, and returns a string
      */

      expect(repeat('yo', 0)).toBe('');
    });
    it('repeats a string once', () => {
      expect(repeat('yo', 1)).toBe('yo');
    });
    it('repeats a string twice', () => {
      expect(repeat('yo', 2)).toBe('yoyo');
    });
    it('repeats a string many times', () => {
      expect(repeat('yo', 10)).toBe('yoyoyoyoyoyoyoyoyoyo');
    });
    it('does not use String.prototype.repeat', () => {
      /*
       This may be the first time you've seen spyOn!
       This block of code is 'spying' on the built in String method `repeat`.
      */

      spyOn(String.prototype, 'repeat').and.callThrough();

      repeat('yo', 4);

      /*
       This test is making sure that you did not call the built in
       `repeat` in your code to pass the specs. You gotta do it yourself!
      */

      expect(String.prototype.repeat.calls.count()).toEqual(0);
    });
  });

  // Let's iterate over all the elements of an array using a loop
  describe('the function `sum`', () => {
    it('computes the sum of an empty array', () => {
      //Again, this statement tells us a lot about `sum`, the function we are creating
      expect(sum([])).toEqual(0);
    });

    it('computes the sum of an array of one number', () => {
      expect(sum([7])).toEqual(7);
    });

    it('computes the sum of an array of two numbers', () => {
      expect(sum([7, 11])).toEqual(18);
    });

    it('computes the sum of an array of many numbers', () => {
      expect(sum([1, 3, 5, 7, 9])).toEqual(25);
    });
  });

  describe('the function `join`', () => {
    it('turns an empty array into an empty string', () => {
      expect(join([])).toEqual('');
    });

    it('turns an array with one element into a string', () => {
      expect(join(['a'])).toEqual('a');
    });

    it('turns an array with many elements into a string', () => {
      expect(join(['apple', 'banana', 'cherry'])).toEqual('applebananacherry');
    });

    it('inserts a delimiter between elements', () => {
      expect(join(['apple', 'banana', 'cherry'], '/')).toEqual(
        'apple/banana/cherry'
      );
    });

    /*
      This test is to make sure you don't use "for (let i in a)" on an array
      Remember how we can add any type of key/value pair to an array object
      since it's just like a regular object? When we loop over this array,
      we only want the numeric indexed properties!
    */

    it('ignores non-indexed properties set on the array object', () => {
      const fruitArray = ['apple', 'banana', 'cherry'];

      fruitArray.type = 'fruits';
      expect(fruitArray.type).toEqual('fruits');

      fruitArray.first = function () {
        return this[0];
      };

      expect(fruitArray.first()).toEqual('apple');

      expect(join(fruitArray)).toEqual('applebananacherry');
    });

    // No cheatin' now
    it('does not call Array.prototype.join', () => {
      spyOn(Array.prototype, 'join');

      join(['apple', 'banana', 'cherry']);

      expect(Array.prototype.join.calls.count()).toEqual(0);
    });
  });

  describe('the function `gridGenerator`', () => {
    it('returns an empty string when input is 0', () => {
      expect(gridGenerator(0)).toEqual('');
    });
    // all characters (even whitespaces) are values of the grid
    it('creates a grid with 3 columns and rows when input is 3', () => {
      //Remember, '\n' is the character for a new line.
      expect(gridGenerator(3)).toEqual('# #\n # \n# #\n');

      /*
        This grid is a 3 x 3 and will look like:
        # #
         #
        # #
      */
    });

    it('creates a grid with 2 columns and rows when input is 2', () => {
      expect(gridGenerator(2)).toEqual('# \n #\n');
    });
  });
});

/*
  Let's practice looping over objects using the for(let i in obj) since
  Here we have to also be aware of properties that are on an object's internal prototype (.__proto__)
*/

describe('looping over objects', () => {
  describe('the function `paramify`', () => {
    it('works on an empty object', () => {
      expect(paramify({})).toEqual('');
    });

    it('converts an object with one element', () => {
      expect(
        paramify({
          size: 14,
        })
      ).toEqual('size=14');
    });

    it('converts an object with two elements', () => {
      expect(
        paramify({
          height: 74,
          width: 12,
        })
      ).toEqual('height=74&width=12');
    });

    it('converts an object with many elements', () => {
      const object = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
      expect(paramify(object)).toEqual('a=1&b=2&c=3&d=4&e=5&f=6');
    });

    /*
      This one might be a bit tricky ;-)
      Maybe there is a built in method that can help you?
    */

    it('outputs the parameters in alphabetical order', () => {
      const object = { f: 6, e: 5, d: 4, c: 3, b: 2, a: 1 };
      expect(paramify(object)).toEqual('a=1&b=2&c=3&d=4&e=5&f=6');
    });

    /*
      This one is also tricky, here we want you to only `paramify` the properties
      of the object and avoid any that are on the object's 'internal prototype' (.__proto__) property.
    */
    it("skips properties of the object's prototype", () => {
      const alphabetPrototype = { c: 3 };
      //   alphabet is a factory function
      function alphabet() {
        const instanceOfAlphabet = Object.create(alphabetPrototype);
        instanceOfAlphabet.a = 1;
        instanceOfAlphabet.b = 2;
        return instanceOfAlphabet;
      }

      const alphabetInstance = alphabet();

      // see how we're skipping `c` ?
      expect(paramify(alphabetInstance)).toEqual('a=1&b=2');
    });

    it('calls Object.prototype.hasOwnProperty and does not use Object.keys', () => {
      spyOn(Object.prototype, 'hasOwnProperty').and.callThrough();
      spyOn(Object, 'keys').and.callThrough();

      const object = { f: 6, e: 5, d: 4, c: 3, b: 2, a: 1 };
      paramify(object);

      expect(object.hasOwnProperty).toHaveBeenCalled();
      /*
        We ask that you don't use Object.keys in this function
        You will use this function in `paramifyObjectKeys!`
      */
      expect(Object.keys.calls.count()).toEqual(0);
    });
  });

  describe('the function `paramifyObjectKeys`', () => {
    /*
      Most of these specs are the same as `paramify` above, but we expect you
      to use a different way of looping over your object...
    */
    it('works on an empty object', () => {
      expect(paramifyObjectKeys({})).toEqual('');
    });

    it('converts an object with one element', () => {
      expect(
        paramifyObjectKeys({
          size: 14,
        })
      ).toEqual('size=14');
    });

    it('converts an object with two elements', () => {
      expect(
        paramifyObjectKeys({
          height: 74,
          width: 12,
        })
      ).toEqual('height=74&width=12');
    });

    it('converts an object with many elements', () => {
      const object = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
      expect(paramifyObjectKeys(object)).toEqual('a=1&b=2&c=3&d=4&e=5&f=6');
    });

    it('outputs the parameters in alphabetical order', () => {
      const object = { f: 6, e: 5, d: 4, c: 3, b: 2, a: 1 };
      expect(paramifyObjectKeys(object)).toEqual('a=1&b=2&c=3&d=4&e=5&f=6');
    });

    it("skips properties of the object's prototype", () => {
      const alphabetPrototype = { c: 3 };
      //   alphabet is a factory function
      function alphabet() {
        const instanceOfAlphabet = Object.create(alphabetPrototype);
        instanceOfAlphabet.a = 1;
        instanceOfAlphabet.b = 2;
        return instanceOfAlphabet;
      }
      const alphabetInstance = alphabet();

      // see how we're skipping `c` again?
      expect(paramifyObjectKeys(alphabetInstance)).toEqual('a=1&b=2');
    });

    it('calls Object.keys and does not use Object.prototype.hasOwnProperty', () => {
      const object = { f: 6, e: 5, d: 4, c: 3, b: 2, a: 1 };

      spyOn(object, 'hasOwnProperty').and.callThrough();
      spyOn(Object, 'keys').and.callThrough();

      paramifyObjectKeys(object);

      expect(Object.keys).toHaveBeenCalled();
      expect(object.hasOwnProperty.calls.count()).toEqual(0);
    });
  });

  describe('sort', () => {
    it('should sort a simple integer list', () => {
      let unsorted = [17, 43, 216, 3, 9, 27];
      let sorted = sort(unsorted);

      expect(sorted).toEqual([3, 9, 17, 27, 43, 216]);
      expect(sorted.length).toBe(6);
    });

    it('should sort positive and negative integers', () => {
      let unsorted = [17, -43, 216, 3, -9, 27];
      let sorted = sort(unsorted);

      expect(sorted).toEqual([-43, -9, 3, 17, 27, 216]);
      expect(sorted.length).toBe(6);
    });

    it('should clumsily sort strings', () => {
      let unsorted = ['toad', 'prune', 'pretzel', 'aardvark', 'tuna', 'weasel'];
      let sorted = sort(unsorted);

      expect(sorted).toEqual([
        'aardvark',
        'pretzel',
        'prune',
        'toad',
        'tuna',
        'weasel',
      ]);
      expect(sorted.length).toBe(6);
    });

    it('does not use built-in sorting methods', () => {
      spyOn(Array.prototype, 'sort').and.callThrough();

      let unsorted = [107, -443, 216, 300, -9, 247];
      let sorted = sort(unsorted);

      expect(sorted).toEqual([-443, -9, 107, 216, 247, 300]);
      expect(Array.prototype.sort.calls.count()).toBe(0);
    });
  });
});
