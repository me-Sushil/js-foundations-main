/*

TOPICS
DAY1
- constructor function
  - using 'prototype' of constructor function
- getting all arguments to a function
  - keyword 'arguments': regular function
  - gather operator: arrow function
- few extras
  - js template literal
  - ternary operator
- read on your own string and array methods like join, split, splice etc

DAY2
- Array methods
  - map
  - filter
  - reduce
*/

/*
Old way of creating multiple functions
without using prototype hierarchy
*/
let hemlal = {
  fName: "Hemlal",
  batch: 2023,
  sayHello() {
    console.log(`Hello my name is, ${this.fName}`);
  },
};

let lishu = {
  fName: "Lishu",
  batch: 2023,
  sayHello() {
    console.log(`Hello my name is, ${this.fName}`);
  },
};

hemlal.sayHello();
lishu.sayHello();

/*
Writing a constructor function
why: to create hierarchy / prototype chain 
  so that multiple objects can share common properties
how:
  1. write function name starting with Capital
  2. use 'this' keyword to create properties
  3. use the 'prototype' key to create prototype level properties
  4. use the 'new' keyword to execute the function
  - this will return all the variables as properties of the object
*/
function MakeFellow(fName, batch) {
  this.fName = fName;
  this.batch = batch;
}

//adding properties to the prototype
//so that it is available for all objects
//that are created from the constructor function
MakeFellow.prototype.sayHello = function () {
  console.log(`Hello my name is, ${this.fName}`); //using template literal to access variable inside string
};

MakeFellow.prototype.fellowship = "TEJ";

//use constructor function by using
//the keyword 'new' in front of the function name
let hemlal2 = new MakeFellow("Hemlal", 2023);
let lishu2 = new MakeFellow("Lishu", 2023);

console.log(hemlal2);
console.log(lishu2);
hemlal2.sayHello();
lishu2.sayHello();
console.log(hemlal2.fellowship);
console.log(lishu2.fellowship);

//properties from the prototype are not
//in the created objects, they are up
//the prototype chain
console.log(hemlal2.hasOwnProperty("fName"));
console.log(hemlal2.hasOwnProperty("fellowship"));

/*
we can put prototype properties even in
Array and Object that will be available
for all Objects and Arrays
*/
let a = [1, 2, 3];
let b = [2, 2, 3];
a.push(4);
b.push(5);

//if adding property to Object.prototype
//it will be available to ALL objects, arrays, and functions
//because Object is the root prototype of all complex data
Object.prototype.showAll = function () {
  console.log(`this array has the elements ${this}`);
};

/*
if adding property to Array.prototype
it will be available to all arrays but not to
other types of objects
*/
// Array.prototype.showAll = function () {
//   console.log(`this array has the elements ${this}`);
// };

a.showAll();
b.showAll();
hemlal2.showAll();

/*
using the 'arguments' keyword and the ...gather operator
to get all the arguments passed to functions
*/
function printAllParams(...p1) {
  //p1 is array with all arguments passed to function
  console.log(p1);
  //arguments keyword is array like data with all arguments passed to function
  //but this will only be available in regular function, not arrow function
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

printAllParams("Sharmila", 2023, "TEJ");

//p1 is array with all arguments passed to function.
//the gather operator is available in both arrow function and regular function
let printAllParamsArrow = (...p1) => {
  p1.push(4);
  console.log(p1);
};

printAllParamsArrow("Sharmila", 2023, "TEJ");

/*
Ternary operator
*/
let isThisTrue = false;
//ternary operator is shorthand expression for simple if else statement
let val = isThisTrue === true ? "this is true" : "this is false";

//the above ternary statement is the same as the below if else statement
// if (isThisTrue === true) {
//   val = "this is true";
// } else {
//   val = "this is false";
// }

console.log(val);
