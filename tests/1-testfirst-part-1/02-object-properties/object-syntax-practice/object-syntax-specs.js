/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('shortand object syntax', function () {
  it('the object "dog" should be in the global scope', function () {
    expect(typeof dog).toBe('object');
  });
  it('has methods and uses shorthand-method syntax', function () {
    expect(typeof dog.bark).toBe('function');
    expect(dog.bark.toString().includes('function')).toBe(false);
  });
  it('uses the global name variable and assigns it as a property using shorthand-property syntax', function () {
    expect(name).toBeDefined();
    expect(dog.name).toBeDefined();
    expect(dog.name).toBe('Cody');
  });
  it('creates a bark method on dog', () => {
    expect(dog.bark).toBeDefined();
    expect(typeof dog.bark).toBe('function');
    expect(dog.bark()).toBe('ruff ruff!');
  });
  it('uses the global variable loud to create the method loudBark', function () {
    expect(loud).toBeDefined();
    expect(loud).toBe('loud');
    expect(dog['loudBark']()).toBe('RUFF RUFF!');
  });
});
