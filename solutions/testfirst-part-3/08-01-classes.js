/* eslint-disable no-unused-vars */

class Mammal {
  constructor(name) {
    this.name = name;
    this.offspring = [];
  }

  sayHello() {
    return `My name is ${this.name}, I'm a ${this.constructor.name}`;
  }

  haveBaby() {
    const baby = new Mammal(`Baby ${this.name}`);
    this.offspring.push(baby);
    return baby;
  }
}

class Cat extends Mammal {
  constructor(name, color) {
    super(name);

    this.color = color;
  }

  haveBaby(color) {
    const baby = new Cat(`Baby ${this.name}`, color);
    this.offspring.push(baby);
    return baby;
  }

  meow() {
    return 'meow';
  }
}

class Dog extends Mammal {
  constructor(name, breed) {
    super(name);

    this.breed = breed;
  }

  haveBaby(breed) {
    const baby = new Dog(`Baby ${this.name}`, breed);

    this.offspring.push(baby);
    return baby;
  }

  bark() {
    return 'RUFF RUFF';
  }
}
