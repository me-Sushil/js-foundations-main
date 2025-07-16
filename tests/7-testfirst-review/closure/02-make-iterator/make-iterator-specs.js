/* eslint-env jasmine */
/* eslint-disable no-undef, no-prototype-builtins */

describe('makeIterator', () => {
  it('is a function', () => {
    expect(typeof makeIterator).toBe('function');
  });
  it('returns an object', () => {
    expect(typeof makeIterator()).toBe('object');
  });
  it('the object returned has a `getNext` and `getIndex` method', () => {
    const iterator = makeIterator();

    expect(typeof iterator.getNext).toBe('function');
    expect(typeof iterator.getIndex).toBe('function');
    expect(Object.keys(iterator).sort()).toEqual(
      ['getIndex', 'getNext'].sort()
    );
    expect(iterator.hasOwnProperty('getIndex')).toBe(true);
    expect(iterator.hasOwnProperty('getNext')).toBe(true);
  });

  it('when the `getNext` method is called, `getIndex` returns a number value incremented by one', () => {
    const iterator = makeIterator(['Peloton', 'Soul Cycle', 'Class Pass']);

    const firstCallToGetIndex = iterator.getIndex();
    const secondCallToGetIndex = iterator.getIndex();
    // these expectations demonstrate that .getIndex() doesn't increment the value it returns, it has access to the value but doesn't change it
    expect(firstCallToGetIndex).toBe(0);
    expect(secondCallToGetIndex).toBe(0);

    iterator.getNext(); // Note: it is significant that iterator.getNext() is called, it changes the value iterator.getIndex() returns

    const calledAfterGetNext = iterator.getIndex();
    expect(calledAfterGetNext).toBe(1);

    iterator.getNext();
    const secondValueAfterGetNext = iterator.getIndex();
    expect(secondValueAfterGetNext).toBe(2);

    iterator.getNext();
    expect(iterator.getIndex()).toBe(3);
  });

  it('the `getNext` method returns an object with the properties `value` and `done`', () => {
    const iterator = makeIterator(['first', 'second', 'third']);
    const iterableInfo = iterator.getNext();

    expect(Object.keys(iterableInfo).sort()).toEqual(['done', 'value'].sort());
    expect(iterableInfo.hasOwnProperty('value')).toBe(true);
    expect(iterableInfo.hasOwnProperty('done')).toBe(true);
  });

  it('the `value` property holds the next value in the input array', () => {
    const iterator = makeIterator(['Peloton', 'Soul Cycle', 'Class Pass']);

    const firstCall = iterator.getNext();
    expect(firstCall.value).toBe('Peloton');

    const secondCall = iterator.getNext();
    expect(secondCall.value).toBe('Soul Cycle');

    const thirdCall = iterator.getNext();
    expect(thirdCall.value).toBe('Class Pass');
  });

  it('the `done` property remains `false` until `.getNext()` reaches the last value, after all values are reached, proceeding calls to `.getNext()` return an object with the `done` property assigned to `true`', () => {
    const iterator = makeIterator(['Peloton', 'Soul Cycle', 'Class Pass']);

    const firstCall = iterator.getNext();
    expect(firstCall.value).toBe('Peloton');
    expect(firstCall.done).toBe(false);

    const secondCall = iterator.getNext();
    expect(secondCall.value).toBe('Soul Cycle');
    expect(secondCall.done).toBe(false);

    const thirdCall = iterator.getNext();
    expect(thirdCall.value).toBe('Class Pass');
    expect(thirdCall.done).toBe(false);

    const fourthCall = iterator.getNext();
    expect(fourthCall.value).toBe(undefined);
    expect(fourthCall.done).toBe(true);
  });

  it('additional example', () => {
    const foodIterable = makeIterator([
      'Pizza',
      'Empanadas',
      'Cookies',
      'Pasta',
      'Soup',
    ]);
    foodIterable.getNext();
    const foodIterableInfo = foodIterable.getNext();

    expect(foodIterableInfo).toEqual({ value: 'Empanadas', done: false });
    expect(foodIterable.getIndex()).toBe(2);

    foodIterable.getNext();
    foodIterable.getNext();
    const foodIterInfo = foodIterable.getNext();
    expect(foodIterInfo).toEqual({ value: 'Soup', done: false });
    expect(foodIterable.getNext()).toEqual({ value: undefined, done: true });
  });
});
