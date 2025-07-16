/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('thrice function', () => {
  let eight;

  beforeEach(() => {
    eight = thrice(() => {
      return 8;
    });
  });

  it('thrice returns a function', () => {
    expect(typeof eight === 'function').toBe(true);
  });

  it('the function returned invokes the function passed to the thrice function', () => {
    const value = eight();
    expect(value).toBe(8);
  });

  it('the function returned invokes the function passed to the thrice function up to three times', () => {
    const value = eight() + eight() + eight();
    expect(value).toBe(24);
  });

  it('returns a function that cannot be invoked more than three times (thrice)', function() {
    const firstCall = eight();
    const secondCall = eight();
    const thirdCall = eight();
    const fourthCall = eight();
    const fifthCall = eight();
    const sixthCall = eight();

    expect(firstCall).toBe(8);
    expect(secondCall).toBe(8);
    expect(thirdCall).toBe(8);
    // Note: If a function doesn't return a value, by default it returns undefined
    expect(fourthCall).toBe(undefined);
    expect(fifthCall).toBe(undefined);
    expect(sixthCall).toBe(undefined);
  });

  it('additional specs with new functions', () => {
    const ten = thrice(() => {
      return 10;
    });
    const javaScript = thrice(() => {
      return 'javaScript is great!';
    });
    const truthy = thrice(() => {
      return true;
    });

    const truthyFirstCall = truthy();
    const truthySecondCall = truthy();
    const truthyThirdCall = truthy();
    const truthyFourthCall = truthy();

    expect(truthyFirstCall).toBe(true);
    expect(truthySecondCall).toBe(true);
    expect(truthyThirdCall).toBe(true);
    expect(truthyFourthCall).toBe(undefined);

    // 10    + 10    + 10  + undefined
    expect(ten() + ten() + ten() + ten()).toEqual(NaN); // adding a number value + undefined results to NaN "not a number"

    expect(
      `${javaScript()} ${javaScript()} ${javaScript()} ${javaScript()}`
    ).toBe('javaScript is great! javaScript is great! javaScript is great! undefined');
  });
});
