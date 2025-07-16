/* eslint-env jasmine */
/* eslint-disable no-undef */


describe('the function `hello`', () => {
  it('says hello', () => {
    expect(hello()).toEqual('Hello!');
  });

  it('says hello to someone', () => {
    expect(hello('Fred')).toEqual('Hello, Fred!');
  });
});

describe('the function `add`', () => {
  let returnValue = 0;

  beforeEach(() => {
    // re-assign returnValue to 0 before each spec
    returnValue = 0;
  });

  it('adds 4 and 5, the value returned is 9', () => {
    returnValue += add(4, 5);

    expect(returnValue).toEqual(9);
  });

  it('adds 7 and 8, the value returned is 15', () => {
    returnValue += add(7, 8);

    expect(returnValue).toEqual(15);
  });
});