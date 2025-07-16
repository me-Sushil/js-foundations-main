/*
TIPS
- It might feel wrong, but try it if you think it will work
- What is cloning vs forking

TOPICS
- Arrow function
- Object
    - Setting properties
    - Shorthand syntax (data, method)
    - Spread operator
    - Destructuring
    - for (let i in obj)
    - Object.create
    - Object.assign
    - Object.keys
    - obj.hasOwnPropert
- Arrays: using as object
    - Setting properties
    - Spread operator
    - Destructuring
    - arr.sort method
    - arr.join
    - //Map function
- Functions: using as object
    - Setting properties (data, method)
- Factory function
- Simple sort algorithm
*/

/*
A factory function is just a regular function
that creates and returns an object.
There is nothing new happening
*/
function myFactory(localName) {
  return {
    fName: localName,
  };
}
//using factory function
let firstObject = myFactory("Aarju");
let secondObject = myFactory("Sunil");

//re-writing factory function as an arrow function
let myArrowFactory = (localName) => {
  return {
    fName: localName,
  };
};

/*
Writing an arrow function
*/
// 1. this is a normal function
function addOne(x) {
  return x + 1;
}
// 2. same function as above in arrow function notation
let addOneArrow = (x) => x + 1;

console.log(addOne(4));
console.log(addOneArrow(4));

// 3. an arrow function returning object
// needs paranthesis around object notation
let arrowFunctionReturningObj = (x, y) => ({
  x: x,
  y: y,
  z() {
    return "hello";
  },
});
let myObject = arrowFunctionReturningObj(4, 3);

/* 
Using Object.create to create an object
from an existing object will return an object
which will have all the properties of the 
original object, but not as it's own property
*/
let createFromMyObject = Object.create(myObject);

console.log(myObject);
// this will print an empty object because
// all the properties do not show as it's own
console.log(createFromMyObject);

// these will print values
console.log(createFromMyObject.x);
console.log(createFromMyObject.y);
console.log(createFromMyObject.z());

/*
spread operator will do a 
shallow copy of arrays and objects
*/

// spread operator in array
let arr = [1, 2, [3, 4], 5];
let arr2 = [...arr, 8, 9];

// changing shallow values will not effect
// the array created from spread operator
arr[0] = 10;

// but changing nested values will effect
// array created from spread operator
// as only the reference is spread
// and no deep copy is done
arr[2][0] = 20;
console.log(arr);
console.log(arr2);

// same with spread operator on objects
let obj = { fName: "Liza", add: { city: "ktm" } };

// and we can add additional properties after using spread operator
// if same key is repeated, then the last occurrence of the key value
// pair will replace earlier occurrences
let obj2 = { ...obj, fName: "Maharjan" };
console.log(obj);
console.log(obj2);

// same behavior when the key 'x' is repeated while creating the object
let obj3 = { x: 1, y: 2, z: 3, x: 4 };
console.log(obj3);
