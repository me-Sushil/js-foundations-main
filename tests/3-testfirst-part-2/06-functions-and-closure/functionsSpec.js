/* eslint-env jasmine */
/* eslint-disable no-undef */

/*
  Let's start with some interesting facts about functions.
  The first thing to be aware of is that inside a function,
  there is a special object called `arguments` https://goo.gl/w9KrQK

  `arguments` looks and feels like an array (though be careful, it's not
  actually an array).

  Read the documentation linked above and apply your learnings to the problem
*/

describe('concatString: Using the arguments "array-like object"', () => {
  beforeEach(() => {
    spyOn(Array, 'from').and.callThrough(); // What is Array.from? is it mentioned or used in any of the examples from the documentation linked? https://goo.gl/w9KrQK
  });
  it('allows you to call a function with arguments like normal', () => {
    const result = concatString('David', ' ', 'Yang');
    expect(result).toEqual('David Yang');
  });

  it('allows you to call a function with as many arguments as you want', () => {
    const result = concatString(
      'This',
      ' ',
      'should',
      ' ',
      'be done with join'
    );
    expect(result).toEqual('This should be done with join');
  });

  it('uses `Array.from` to change the arguments Array-like object to an actual array object', () => {
    concatString('Nimit', ' ', 'Maru');
    expect(Array.from).toHaveBeenCalled();
  });
});

/*
  This will explore the idea that JS' functions are just values that can be passed around
  as an argument or returned as a value from another function.
  For example, here we can have a function that creates another function.
*/
describe('yourFunctionRunner - higher-order functions', () => {
  const callThisFunction = () => {
    return 'Called Value';
  };

  it('means that a function can take a function as an argument', () => {
    // Create a function that runs functions and returns their "return" value
    expect(yourFunctionRunner(callThisFunction)).toEqual('Called Value');
  });

  it('takes multiple function arguments and invokes them', () => {
    const andThisFunction = () => {
      return ' and Other Value';
    };

    /*
      `yourFunctionRunner` should run as many functions as it gets and concatenate their return values
      You should try to use the `arguments` array here.
    */
    expect(yourFunctionRunner(callThisFunction, andThisFunction)).toEqual(
      'Called Value and Other Value'
    );
  });
});

/*
  Now we'll explore the idea of closure
  Closures describe functions that remember variables that were in scope
  when they were defined (defined being the operative word).

  Then, even if the scope that the function was defined in goes away, it continues to have access
  to have scope.
  */
describe('makeAdder', () => {
  it('returns a function', () => {
    const returnValue = makeAdder(5);

    expect(typeof returnValue).toBe('function');
  });
  it('takes a number argument and returns a function that adds the number passed to `makeAdder` to its own number argument', () => {
    const adderOf2function = makeAdder(2);

    // Now let's call the function that we got back and add 5 to the closed-over value
    expect(adderOf2function(5)).toBe(7);

    const adderOf10Function = makeAdder(10);

    expect(adderOf10Function(22)).toBe(32);
  });
});

// Functions that decorate other functions.  These functions return a version of the function
// with some changed behavior.  This will depend on closure since the function needs to
// remember information in a scope that will eventually go away.
//

describe('once', () => {
  it('accepts a function argument and returns a new function', () => {
    const sayHello = () => {
      return 'Hello!';
    };

    const returnValue = once(sayHello);

    expect(typeof returnValue).toBe('function');
  });

  it('the function returned from "once" can invoke the function passed to "once"', () => {
    const sayGoodbye = () => {
      return 'Goodbye!';
    };

    const funcReturned = once(sayGoodbye);

    expect(funcReturned()).toBe('Goodbye!');
  });

  it('the function passed to once can only be invoked one time', () => {
    const isItFriday = () => {
      return 'TODAY IS FRIDAY!! TGIF!!!';
    };

    const funcReturned = once(isItFriday);

    expect(funcReturned()).toBe('TODAY IS FRIDAY!! TGIF!!!');
    expect(funcReturned()).toBe('the function has already been called...');
  });
  it('should only increment num one time', () => {
    let num = 50;

    const addTen = () => {
      num += 10; // num is defined outside of addTen
    };

    // where is "once" defined? This is the function you need to create!

    const increment = once(addTen); // what value does once return, an array? number? boolean?

    // the once function returns a function that only allows the addTen function to be called one time.
    // notice "increment" is called multiple times, but the final value of num is 60 (addTen was only called 1x)

    increment();
    increment();
    increment();
    increment();

    expect(num).toEqual(60);
  });
});

describe('shared contexts', () => {
  let sharedObj;

  beforeEach(() => {
    sharedObj = createObjectWithClosures();
  });

  it('should return an object with four methods', () => {
    expect(typeof sharedObj.oneIncrementer).toBe('function');
    expect(typeof sharedObj.tensIncrementer).toBe('function');
    expect(typeof sharedObj.getValue).toBe('function');
    expect(typeof sharedObj.setValue).toBe('function');
    // Here we're testing that you're not storing anything
    // besides four methods on the sharedObj.  The value that is
    // incremented/decremented (and returned by getValue)
    // should only be in scope during the createObjectWithClosures function call and then
    // closed over by the four methods returned in the object
    expect(Object.keys(sharedObj).length).toBe(4);
  });

  it('should allow `oneIncrementer`, `tensIncrementer`, and `getValue` methods to call the same value', () => {
    sharedObj.oneIncrementer();
    sharedObj.tensIncrementer();
    expect(sharedObj.getValue()).toBe(11);
  });

  it('the `setValue` method overrides the existing value and sets it to the argument value', () => {
    sharedObj.tensIncrementer();
    sharedObj.oneIncrementer();

    sharedObj.setValue(7.5);

    expect(sharedObj.getValue()).toEqual(7.5);
  });
});

describe("Don't Spill The Beans", () => {
  let secret;
  beforeEach(() => {
    secret = dontSpillTheBeans(
      "I'm proposing to my significant other this Friday"
    );
  });

  it('`dontSpillTheBeans` is a function', () => {
    expect(typeof dontSpillTheBeans).toEqual('function');
  });

  it('returns an object', () => {
    expect(typeof secret).toEqual('object');
  });

  it('the object returned has `getSecret` and `setSecret` properties', () => {
    // Not sure what Object.keys is? Check the documentation - https://mzl.la/2bj8226
    const properties = Object.keys(secret);

    // checks for values in the array Object.keys returns, these are the property names on "secret" object.
    expect(
      properties.indexOf('getSecret') >= 0 &&
        properties.indexOf('setSecret') >= 0
    ).toEqual(true);
    expect(properties.length === 2).toEqual(true);
  });

  it('`getSecret` and `setSecret` are functions', () => {
    expect(typeof secret.getSecret).toEqual('function');
  });

  it('`getSecret` returns `secret` value that was passed to the dontSpillTheBeans function', () => {
    expect(secret.getSecret()).toEqual(
      "I'm proposing to my significant other this Friday"
    );
    secret.setSecret("It's a surprise, don't say anything");
    expect(secret.getSecret()).toEqual("It's a surprise, don't say anything");
  });

  it('`setSecret` re-assigns the secret value to a new value', () => {
    const surpriseForMom = dontSpillTheBeans(
      "I'm throwing a surprise 60th Birthday Party for my Mom in two months!"
    );
    surpriseForMom.setSecret(
      "I'm taking my mother on vacation for her 60th Birthday!"
    );

    expect(surpriseForMom.getSecret()).toEqual(
      "I'm taking my mother on vacation for her 60th Birthday!"
    );
    surpriseForMom.setSecret("We're going to THAILAND!!!");
    expect(surpriseForMom.getSecret()).toEqual("We're going to THAILAND!!!");
    expect(Object.keys(surpriseForMom).length).toEqual(2);
  });
});
