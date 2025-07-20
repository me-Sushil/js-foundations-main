/* eslint-disable no-unused-vars */

class Mammal {
  constructor(name) {
    this.name = name;
    this.offspring = [];
  }
  sayHello() {
    return `My name is ${this.name}, I'm a Mammal`;
  }

  haveBaby() {
    const baby = new Mammal(`Baby ${this.name}`);
    this.offspring.push(baby);
    return baby;
  }
}
