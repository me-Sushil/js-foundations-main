/**
 * Classes
 * example: let niru = new Student('niru', 'masters')
 *
 * returns: an instance of the class
 */

class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  sayHello() {
    return `My name is ${this.name}`;
  }
}

let newStudent = new Student("niru", "masters");
