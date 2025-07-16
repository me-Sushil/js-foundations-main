/* eslint-disable no-unused-vars */

/*

Solution 1 -

  Review the syntax inside the parenthesis of the function definition

  const interleave = (...strs) => {...}

  This uses a "newer" feature which is called "rest parameters", this is the ...strs . The "rest" parameter allows us to represent an indefinite number
  of arguments as an array argument.

  Within the function, an array is created called "strs" (since that is the name after the ...). The array holds any argument passed to the function.

  Here is a link to the documentation for more details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

  You can use "rest params" with arrow functions or the function keyword.


*/
const interleave = (...strs) => {
  /* Finding longest string length using reduce */
  const longestStringLength = strs.reduce((longest, str) => {
    if (str.length > longest) {
      return str.length;
    } else {
      return longest;
    }
  }, 0);

  let interleavedString = '';

  for (let i = 0; i < longestStringLength; i++) {
    /* For each */
    strs.forEach(str => {
      if (str[i]) {
        interleavedString += str[i];
      }
    });
  }

  return interleavedString;
};

/* 

Solution 2 - 

- Uses Array.from (and the arguments object) 
  - Note: Array.from is a great approach but an update to ECMAScript states "rest parameters" should be used in favor of
  Array.from. Overall, for the purpose of this exercise and most use cases moving forward, both approaches work well (and it is good to know both options).
   
- Basic Loops (.forEach and .reduce are refactored and removed from the solution)

*/

const interleave = function() {
  const strs = Array.from(arguments);
  // const strs = [...arguments]; this is another great approach

  let longestStringLength = 0;
  // find the longest string length
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > longestStringLength) {
      longestStringLength = strs[i].length;
    }
  }

  let interleavedString = '';

  for (let i = 0; i < longestStringLength; i++) {
    /* Nested for loop */
    for (var j = 0; j < strs.length; j++) {
      if (strs[j][i]) {
        interleavedString += strs[j][i];
      }
    }
  }

  return interleavedString;
};
