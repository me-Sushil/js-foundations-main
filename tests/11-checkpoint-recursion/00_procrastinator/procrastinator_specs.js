/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('procrastinator', () => {
  it('returns a function', () => {
    const returnedFunc = procrastinator('hello-world');
    expect(typeof returnedFunc).toBe('function');
  });

  it('on the first call to the function returned, it returns the 0th character of the string passed to procrastinator', () => {
    const returnedFunc = procrastinator('hello-world');
    expect(returnedFunc()).toBe('h');
  });

  it('on the second call to the function returned, it returns the 1st character of the string passed to procrastinator', () => {
    const returnedFunc = procrastinator('what a day!');
    expect(returnedFunc()).toBe('w');
    expect(returnedFunc()).toBe('h');
  });

  it('it returns successive characters of the string passed to procrastinator on succissive invocations', () => {
    const returnedFunc = procrastinator('sick day');
    expect(returnedFunc()).toBe('s');
    expect(returnedFunc()).toBe('i');
    expect(returnedFunc()).toBe('c');
    expect(returnedFunc()).toBe('k');
    expect(returnedFunc()).toBe(' ');
    expect(returnedFunc()).toBe('d');
    expect(returnedFunc()).toBe('a');
    expect(returnedFunc()).toBe('y');
  });

  it('when it reaches the end of a string, it starts back at the beginning of the string', () => {
    const returnedFunc = procrastinator('boo');
    expect(returnedFunc()).toBe('b');
    expect(returnedFunc()).toBe('o');
    expect(returnedFunc()).toBe('o');
    expect(returnedFunc()).toBe('b');
    expect(returnedFunc()).toBe('o');
    expect(returnedFunc()).toBe('o');
    expect(returnedFunc()).toBe('b');
    expect(returnedFunc()).toBe('o');
    expect(returnedFunc()).toBe('o');
  });
});
