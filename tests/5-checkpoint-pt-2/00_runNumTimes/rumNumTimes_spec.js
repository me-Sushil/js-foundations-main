/* eslint-env jasmine */
/* eslint-disable no-undef */
describe('runNumTimes function', () => {
  it('takes a function as an argument, and runs that function num times', () => {
    let myString = '';

    runNumTimes(() => {
      myString += 'hello';
      return myString;
    }, 3);

    expect(myString).toEqual('hellohellohello');
  });

  it('takes a function as an argument and runs that function num times', () => {
    let myArray = [];
    let count = 1;

    runNumTimes(() => {
      myArray.push(count);
      count++;
    }, 5);

    expect(myArray.length).toBe(5);
    expect(myArray).toEqual([1, 2, 3, 4, 5]);
  });
});
