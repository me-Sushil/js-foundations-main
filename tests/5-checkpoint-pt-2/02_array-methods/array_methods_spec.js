/* eslint-env jasmine */
/* eslint-disable no-undef */
describe('useMapToUpperCase', () => {
  it('takes a string and returns an array', () => {
    const array = useMapToUpperCase('it is raining outside');
    expect(Array.isArray(array)).toBe(true);
  });
  it('returns an array and uppercases each word', () => {
    const array = useMapToUpperCase('Keep It Simple');
    expect(array).toEqual(['KEEP', 'IT', 'SIMPLE']);
  });

  it('uses Array.prototype.map', () => {
    spyOn(Array.prototype, 'map').and.callThrough();

    const array = useMapToUpperCase('make sure to use the map method');
    expect(Array.prototype.map).toHaveBeenCalled();
    expect(array).toEqual([
      'MAKE',
      'SURE',
      'TO',
      'USE',
      'THE',
      'MAP',
      'METHOD',
    ]);
  });
});

describe('useFilter', () => {
  it('takes an array and returns an array', () => {
    const array = useFilter(['kdsd@aol.com', 'test@apple.com']);
    expect(Array.isArray(array)).toBe(true);
  });
  it('returns all words in the array that have an @', () => {
    const array = useFilter([
      'emilie.io',
      'trace.google.com',
      'kellyscott2@aol.com',
      'helloWorld.com',
      'test@apple.com',
      'snowman@iceland.com',
    ]);
    expect(array).toEqual([
      'kellyscott2@aol.com',
      'test@apple.com',
      'snowman@iceland.com',
    ]);
  });
  it('uses Array.prototype.filter', () => {
    spyOn(Array.prototype, 'filter').and.callThrough();

    const array = useFilter([
      'omri@aol.com',
      'jess@fs.com',
      'test.com',
      'myEmail.com',
    ]);
    expect(Array.prototype.filter).toHaveBeenCalled();
    expect(array).toEqual(['omri@aol.com', 'jess@fs.com']);
  });
});

describe('sumWithReduce', () => {
  it('takes an array and returns a number', () => {
    const sum = sumWithReduce([7, 8, 9, 10]);
    expect(typeof sum === 'number').toBe(true);
  });

  it('adds the values in an array and returns the sum', () => {
    const sum = sumWithReduce([7, 8, 9, 10]);
    expect(sum).toBe(34);
  });

  it('accepts a starting value', () => {
    const sum = sumWithReduce([7, 8, 9, 10], 202);
    expect(sum).toBe(236);
  });

  it('use reduce to find the sum of the array, with a starting value of 85', function() {
    spyOn(Array.prototype, 'reduce').and.callThrough();
    const sum = sumWithReduce([10, 11, 12], 85);

    expect(sum).toBe(118);
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});

describe('filterEvensDoubleAndSum', () => {

  it('takes an array and returns a number', () => {
    const sum = filterEvensDoubleAndSum([22, 44, 11, 87, 909, 40, 2]);
    expect(typeof sum === 'number').toBe(true);
  });

  it('filters only even numbers, doubles the even numbers, and computes the sum', () => {
    const sum = filterEvensDoubleAndSum([1, 2, 3, 4]);
    expect(sum).toBe(12); // [1,2,3,4] ===> evens only [2,4] ===> doubled [4,8] ==> sum 12

    const secondSum = filterEvensDoubleAndSum([10, 12, 15, 19, 20]);
    expect(secondSum).toBe(84); // [10, 12, 15, 19, 20] ===> evens only: [10,12,20] ===> doubled: [20, 24, 40] ===> sum: 84
  });

  it('calls Array.prototype.filter, Array.prototype.map, and Array.prototype.reduce', () => {
    spyOn(Array.prototype, 'filter').and.callThrough();
    spyOn(Array.prototype, 'map').and.callThrough();
    spyOn(Array.prototype, 'reduce').and.callThrough();

    const sum = filterEvensDoubleAndSum([10, 11, 12]);

    expect(sum).toBe(44);
    expect(Array.prototype.filter).toHaveBeenCalled();
    expect(Array.prototype.map).toHaveBeenCalled();
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});
