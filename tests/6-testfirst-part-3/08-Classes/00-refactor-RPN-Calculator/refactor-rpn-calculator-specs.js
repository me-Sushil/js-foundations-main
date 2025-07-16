/* eslint-env jasmine */
/* eslint-disable no-undef */

// See http://en.wikipedia.org/wiki/Reverse_Polish_notation

describe('Calculator using reverse polish notation', () => {
  let rpnCalculatorInstance;

  beforeEach(() => {
    /*
      USE ES2015 CLASS SYNTAX
    */

    rpnCalculatorInstance = new RPNCalculator();
  });

  it('adds two numbers', () => {
    /*
     Infix: 2 + 3
     Postfix: 2 3 +
    */

    rpnCalculatorInstance.push(2);
    rpnCalculatorInstance.push(3);
    rpnCalculatorInstance.plus();
    expect(rpnCalculatorInstance.value()).toBe(5);
  });

  it('adds three numbers', () => {
    /* 
     Infix: 2+3+4
     Postfix: 2 3 + 4 +
    */

    rpnCalculatorInstance.push(2);
    rpnCalculatorInstance.push(3);
    rpnCalculatorInstance.plus();
    expect(rpnCalculatorInstance.value()).toBe(5);
    rpnCalculatorInstance.push(4);
    rpnCalculatorInstance.plus();
    expect(rpnCalculatorInstance.value()).toBe(9);
  });

  it('subtracts two numbers', () => {
    /* 
     Infix: 2-3
     Postfix: 2 3 -
    */

    rpnCalculatorInstance.push(2);
    rpnCalculatorInstance.push(3);
    // [2,3]
    rpnCalculatorInstance.minus();
    expect(rpnCalculatorInstance.value()).toBe(-1);
  });

  it('adds and subtracts', () => {
    /* 
     Infix: 2 + 3 - 4
     Postfix: 2 3 + 4 -
    */

    rpnCalculatorInstance.push(2);
    rpnCalculatorInstance.push(3);
    rpnCalculatorInstance.plus();
    expect(rpnCalculatorInstance.value()).toBe(5);
    rpnCalculatorInstance.push(4);
    rpnCalculatorInstance.minus();
    expect(rpnCalculatorInstance.value()).toBe(1);
  });

  it('multiplies and divides', () => {
    /* 
     Infix: 2 * 3 / 4
     Postfix: 2 3 * 4 /
    */

    rpnCalculatorInstance.push(2);
    rpnCalculatorInstance.push(3);
    rpnCalculatorInstance.times();
    expect(rpnCalculatorInstance.value()).toBe(6);
    rpnCalculatorInstance.push(4);
    rpnCalculatorInstance.divide();
    expect(rpnCalculatorInstance.value()).toBe(1.5);
  });

  /* 
    The following test spec tests if a custom exception is thrown.  This will help a user know
    what is wrong with their calculator when their calculator is empty.  There are a few
    ways of throwing an exception, review the `throw statement` - https://mzl.la/1CkHpEM and create
    an exception.
    
    Note: "throw" statements were not covered intentionally, we won't focus on them moving forward, 
    this is an exercise to practice reading and applying information from documentation.
  */

  it("fails informatively when there's not enough values stashed away", () => {
    expect(() => {
      rpnCalculatorInstance.plus();
    }).toThrow('rpnCalculatorInstance is empty');

    expect(() => {
      rpnCalculatorInstance.minus();
    }).toThrow('rpnCalculatorInstance is empty');

    expect(() => {
      rpnCalculatorInstance.times();
    }).toThrow('rpnCalculatorInstance is empty');

    expect(() => {
      rpnCalculatorInstance.divide();
    }).toThrow('rpnCalculatorInstance is empty');
  });

  it('All methods should be on the RPNCalculator.prototype', () => {
    expect(typeof RPNCalculator.prototype.plus).toBe('function');
    expect(typeof RPNCalculator.prototype.minus).toBe('function');
    expect(typeof RPNCalculator.prototype.divide).toBe('function');
    expect(typeof RPNCalculator.prototype.times).toBe('function');
    expect(typeof RPNCalculator.prototype.value).toBe('function');
    expect(typeof RPNCalculator.prototype.times).toBe('function');
  });

  /* 
    This unit test uses the `instanceof` operator. `instanceof` checks if an object has
    prototype property (.prototype) of a constructor.  Here is a link to the documentation
    for `instanceof`: https://mzl.la/1dqYtqW 
  */

  it('the rpnCalculatorInstance object should be an instance of the RPNCalculator Constructor', function () {
    expect(rpnCalculatorInstance instanceof RPNCalculator).toBe(true);
  });
});
