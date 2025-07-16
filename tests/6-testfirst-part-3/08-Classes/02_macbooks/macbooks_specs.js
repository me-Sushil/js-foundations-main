/* eslint-env jasmine */
/* eslint-disable no-undef */

// Note: The ES2015 Class Keyword should be used.

describe('Laptop class', () => {
  let omrisLaptop;

  beforeEach(() => {
    omrisLaptop = new Laptop(2005, 500);
  });

  it('is a Constructor Function', () => {
    expect(typeof Laptop).toBe('function');
  });

  it('should take a year and size as parameters', () => {
    expect(omrisLaptop.year).toBe(2005);
    expect(omrisLaptop.hd).toBe(500);
  });

  it('should have a `checkSpecs` function on its prototype', () => {
    expect(omrisLaptop.checkSpecs()).toBe('Year: 2005, HD: 500');
    expect(omrisLaptop.hasOwnProperty('checkSpecs')).toEqual(false);
  });
});

describe('Macbook class extends from Laptop', () => {
  let zekesMacbook;

  beforeEach(() => {
    zekesMacbook = new Macbook(2010, 1000, 'gold');
  });

  it('is a Constructor Function', () => {
    expect(typeof Macbook).toBe('function');
  });

  it('should have the year, hd-size, and color', () => {
    expect(zekesMacbook.year).toBe(2010);
    expect(zekesMacbook.hd).toBe(1000);
    expect(zekesMacbook.color).toBe('gold');
  });

  it('extends the Laptop Class and should have the Macbook.prototype and Laptop.prototype objects in its prototype chain', () => {
    expect(zekesMacbook instanceof Laptop).toBe(true);
    expect(zekesMacbook instanceof Macbook).toBe(true);
  });

  it('has access to the checkSpecs function located on the Laptop Class', () => {
    expect(zekesMacbook.checkSpecs()).toBe('Year: 2010, HD: 1000');
  });
});


