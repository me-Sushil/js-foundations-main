/* eslint-disable no-undef */

/*
  In this exercise create a function that can
  create and return a calculator object
  that performs basic mathematic operations.

  We'll be using a pattern called the factory pattern where
  our function, `createCalculator` creates an object tailored
  to our needs.
*/

describe('createCalculator', () => {
  let calculator;
  let secondCalculator;

  /*
    Below we're calling the `createCalculator` function, it returns
    a value we are naming calculator. The tests below give us hints about
    what functionality 'calculator' should have.

    This will happen before each `it` block of tests,
    which means each set of tests will start with value assigned to the calculator variable.
  */
  beforeEach(() => {
    spyOn(Object, 'create').and.callThrough();
    calculator = createCalculator();
    secondCalculator = createCalculator();
  });

  it('does not use Object.create to create an instance', () => {
    expect(Object.create.calls.any()).toBe(false);
  });

  it('initially has a value of 0', () => {
    /*
      This line tells us a lot!
      First, it tells us that `calculator` must be an object that has a property called value
      Second, this tells us that its property `value` is a function, and should return the
      outcome of the calculations. When a property is a function, it is called a "method"
      hmm.. I guess we'll need to store those outcomes somewhere..
    */
    expect(calculator.value()).toBe(0);
    expect(secondCalculator.value()).toBe(0);
  });

  it('can add a number', () => {
    calculator.add(2);
    secondCalculator.add(5);
    expect(calculator.value()).toBe(2);
    expect(secondCalculator.value()).toBe(5);
  });

  it('can add two numbers', () => {
    calculator.add(2);
    calculator.add(3);
    secondCalculator.add(70);
    secondCalculator.add(20);
    expect(calculator.value()).toBe(5);
    expect(secondCalculator.value()).toBe(90);
  });

  it('can add many numbers', () => {
    calculator.add(2);
    calculator.add(3);
    calculator.add(4);
    secondCalculator.add(12);
    secondCalculator.add(33);
    secondCalculator.add(55);

    expect(calculator.value()).toBe(9);
    expect(secondCalculator.value()).toBe(100);
  });

  it('can subtract a number', () => {
    calculator.subtract(2);
    secondCalculator.subtract(15);
    expect(calculator.value()).toBe(-2);
    expect(secondCalculator.value()).toBe(-15);
  });

  it('can add and subtract numbers', () => {
    calculator.add(3);
    calculator.subtract(2);
    secondCalculator.add(15);
    secondCalculator.add(13);
    secondCalculator.subtract(10);
    expect(calculator.value()).toBe(1);
    expect(secondCalculator.value()).toBe(18);
  });

  it('can clear its value', () => {
    calculator.add(5);
    calculator.add(10);
    calculator.subtract(7);
    calculator.clear();
    secondCalculator.subtract(55);
    secondCalculator.clear();
    expect(calculator.value()).toBe(0);
    expect(secondCalculator.value()).toBe(0);
  });

  it('all methods are attached to the instance', () => {
    expect(calculator.hasOwnProperty('add')).toBe(true);
    expect(calculator.hasOwnProperty('subtract')).toBe(true);
    expect(calculator.hasOwnProperty('value')).toBe(true);
    expect(calculator.hasOwnProperty('clear')).toBe(true);
  });

  describe('updateExistingInstances', () => {
    let arrayOfCalculatorInstances;
    let updatedInstances;

    /*
      In the beforeEach function, 1000 calculator instances are created
      and pushed into the arrayOfCalculatorInstances array.
    */
    beforeEach(() => {
      arrayOfCalculatorInstances = [];
      for (let i = 0; i < 1000; i++) {
        arrayOfCalculatorInstances.push(createCalculator());
      }
    });

    it('the addSquareMethod returns an array', () => {
      updatedInstances = addSquareMethod(arrayOfCalculatorInstances);
      expect(Array.isArray(updatedInstances)).toBe(true);
    });

    it('update existing instances, adds a square method to every instance', () => {
      let hasSquareMethod;
      updatedInstances = addSquareMethod(arrayOfCalculatorInstances);

      if (updatedInstances.length > 0) hasSquareMethod = true;

      for (let i = 0; i < updatedInstances.length; i++) {
        if (typeof updatedInstances[i].square !== 'function') {
          hasSquareMethod = false;
          break;
        }
      }

      expect(hasSquareMethod).toBe(true);

      // this is the same spec as above but without a for loop, it uses the every method instead.
      // expect(
      //   /*
      //     The [Array.prototype.every](https://goo.gl/2gUavP) method iterates (loops) over the updatedInstances array
      //     and checks that each calculator instance has a "square" method
      //   */
      //   updatedInstances.every(instance => {
      //     return instance.square;
      //   })
      // ).toBe(true);
    });

    it('the square methods squares the current total', () => {
      updatedInstances = addSquareMethod(arrayOfCalculatorInstances);
      updatedInstances[0].add(5);
      expect(updatedInstances[0].square()).toBe(25);
    });
  });
});

// OFF BY 10 Calculator

describe('createHumanCalculator', () => {
  let humanCalculator;

  beforeEach(() => {
    spyOn(Object, 'create').and.callThrough();
    humanCalculator = createHumanCalculator();
  });

  it('creates an instance using Object.create and the instance has a total property', () => {
    expect(Object.create).toHaveBeenCalled();
    expect(humanCalculator.total).toBe(-10);
  });

  it('all the methods are not on the "instance" (humanCalculator), rather, they are accessed via the prototype chain', () => {
    expect(humanCalculator.hasOwnProperty('add')).toBe(false);
    expect(humanCalculator.hasOwnProperty('subtract')).toBe(false);
    expect(humanCalculator.hasOwnProperty('value')).toBe(false);
    expect(humanCalculator.hasOwnProperty('clear')).toBe(false);
  });

  it('all the methods are not on the "instance" (humanCalculator), rather, they are accessed via the prototype chain', () => {
    expect(humanCalculator.hasOwnProperty('add')).toBe(false);
    expect(humanCalculator.hasOwnProperty('subtract')).toBe(false);
    expect(humanCalculator.hasOwnProperty('value')).toBe(false);
    expect(humanCalculator.hasOwnProperty('clear')).toBe(false);
  });

  it('initially has a value of -10', () => {
    expect(humanCalculator.value()).toEqual(-10);
  });

  it('can add a number', () => {
    humanCalculator.add(2);
    expect(humanCalculator.value()).toEqual(-8);
  });

  it('can add two numbers', () => {
    humanCalculator.add(2);
    humanCalculator.add(3);
    expect(humanCalculator.value()).toEqual(-5);
  });

  it('can add many numbers', () => {
    humanCalculator.add(2);
    humanCalculator.add(3);
    humanCalculator.add(4);
    expect(humanCalculator.value()).toEqual(-1);
  });

  it('can subtract a number', () => {
    humanCalculator.subtract(2);
    expect(humanCalculator.value()).toEqual(-12);
  });

  it('can add and subtract numbers', () => {
    humanCalculator.add(3);
    humanCalculator.subtract(2);
    expect(humanCalculator.value()).toEqual(-9);
  });

  it('can clear its value', () => {
    humanCalculator.add(5);
    humanCalculator.add(10);
    humanCalculator.subtract(7);
    humanCalculator.clear();
    expect(humanCalculator.value()).toEqual(-10);
  });
});
