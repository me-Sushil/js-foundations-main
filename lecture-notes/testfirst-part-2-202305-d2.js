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
- methods
  - split: converts string to array
  - join: converts array to string
- chaining methods
*/

/*
the 'reduce' method of array takes 2 arguments
- a function
- an initial value
*/
let a = [1, 4, 5, 9];
//the below reduce will add all the values of array
console.log(a.reduce((returnedVal, currentVal) => returnedVal + currentVal, 0));

//the below reduce will behave like a map method
console.log(
  a.reduce(function (returnedVal, currValue, currIndex) {
    returnedVal.push(currValue * 2);
    return returnedVal;
  }, [])
);

/*
chaining methods
*/
let str = "hello all tej fellows";
//the below command calls 'split' in a string that converts the string to array
//then calls 'map' on the array that returns an array
//then calls 'join' on the array that returns a string
console.log(
  str
    .split(" ")
    .map((currentElement, currentIndex) =>
      currentIndex % 2 === 0 ? currentElement.toUpperCase() : currentElement
    )
    .join(" ")
);

//simple example of chaining methods
console.log("hello world".toUpperCase().toLowerCase());
