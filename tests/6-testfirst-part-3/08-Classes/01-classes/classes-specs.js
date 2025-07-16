/* eslint-env jasmine */
/* eslint-disable no-undef */


describe('Mammal class', () => {
  let myMammal;

  
  beforeEach(() => {
   
    myMammal = new Mammal('Joe');
  });

  it('should be an instance of the Mammal Class', () => {
    expect(myMammal instanceof Mammal).toBe(true);
  });
  it('should take name as a parameter', () => {
    expect(myMammal.name).toEqual('Joe');
  });

  it('should have an array called offspring', () => {
    expect(myMammal.offspring).toEqual([]);
  });

  it('should have a sayHello function on its prototype', () => {
    expect(myMammal.hasOwnProperty('sayHello')).toEqual(false);
    expect(myMammal.sayHello()).toEqual("My name is Joe, I'm a Mammal");
  });

  it('should have a haveBaby method', () => {
    let child = myMammal.haveBaby(); // what is returned from have baby?
    expect(child.name).toEqual('Baby Joe');
    expect(child.offspring).toEqual([]);
    expect(myMammal.offspring).toEqual([child]);
  });

  it('the haveBaby method should be on its prototype', () => {
    expect(myMammal.hasOwnProperty('haveBaby')).toEqual(false);
  });
});

// Cat is a subclass of Mammal (ala Cat extends from Mammal)
describe('Cat class', () => {
  let cat;

  
  beforeEach(() => {
    cat = new Cat('Garfield', 'yellow');
  });

  it('extends the Mammal class and should have the Cat.prototype and Mammal.prototype objects in its prototype chain', () => {
    expect(cat instanceof Mammal).toBe(true);
    expect(cat instanceof Cat).toBe(true);
  });

  it('should have an array called offspring and a name property', () => {
    expect(cat.offspring).toEqual([]);
    expect(cat.name).toBe('Garfield');
  });

  it('should have a color property', () => {
    expect(cat.color).toBe('yellow');
  });

  it('should have a meow method on its prototype', () => {
    expect(cat.meow()).toBe('meow');
  });

  it('should inherit the sayHello method from Mammal', () => {
    expect(typeof Cat.prototype.sayHello).toEqual('function');
    // the last part of the string "I'm a ..." might be a little tricky, you may have to
    // refactor the sayHello method to dynamically find the name of the class calling
    // the method (HINT: this.constructor.name)
    expect(cat.sayHello()).toBe("My name is Garfield, I'm a Cat");
  });

  // Even though Cat inherits many of its methods from the Mammal Class, we can override methods
  // to perform different actions. The haveBaby method on Mammal should stay the same, but instead, the Cat
  // class can have it's own custom haveBaby method.
  // The Cat Class prototype chain looks like this:
  // cat instance ==> Cat.prototype ==> Mammal.prototype
  // placing the haveBaby on the Cat class will prioritize the Cat.prototype.haveBaby for cat instances
  // since they access Cat.prototype in their prototype chain before Mammal.prototype
  it("should have it's own `haveBaby` method (on the Cat.prototype) that takes a color argument", () => {
    let greenCat = cat.haveBaby('green');
    expect(cat.offspring).toEqual([greenCat]);
    expect(greenCat.name).toBe('Baby Garfield');
    expect(greenCat.color).toBe('green');
  });
});

describe('Dog class', () => {
  let dog;

  // Dog is a SubClass of Mammal function
  beforeEach(() => {
    dog = new Dog('Gleyber', 'corgi');
  });

  it('extends the Mammal class and should have the Dog.prototype and Mammal.prototype objects in its prototype chain', () => {
    expect(dog instanceof Mammal).toBe(true);
    expect(dog instanceof Dog).toBe(true);
    expect(dog instanceof Cat).toBe(false);
  });

  it('should have an array called offspring and a name property', () => {
    expect(dog.offspring).toEqual([]);
    expect(dog.name).toBe('Gleyber');
  });

  it('should have a breed property', () => {
    expect(dog.breed).toBe('corgi');
  });

  it('should have a bark method on its prototype', () => {
    expect(dog.bark()).toBe('RUFF RUFF');
  });

  it('should inherit the sayHello method from Mammal', () => {
    expect(typeof Dog.prototype.sayHello).toEqual('function');
    // the last part of the string "I'm a ..." might be a little tricky, you may have to
    // refactor the sayHello method to dynamically find the name of the class calling
    // the method (HINT: this.constructor.name)
    expect(dog.sayHello()).toBe("My name is Gleyber, I'm a Dog");
  });

  it("should have it's own `haveBaby` method (on the Dog.prototype) that takes a breed argument", () => {
    let beagle = dog.haveBaby('beagle');
    expect(dog.offspring).toEqual([beagle]);
    expect(beagle.name).toBe('Baby Gleyber');
    expect(beagle.breed).toBe('beagle');
  });
});
