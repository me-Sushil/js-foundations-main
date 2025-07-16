/* eslint-disable no-unused-vars */

function difference(arrayA, arrayB) {
  return arrayA.filter(val => {
    if (!arrayB.includes(val)) {
      return val;
    }
  });
}
/*

  The solution above uses function declaration syntax primarily so the TestSpecs can locate the difference function. 
  
  Here is another way to write the difference function using concise body syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Function_body
  
  Note: the concise body syntax will not pass the test specs based on how the specs are written.
  
  const difference = (arrayA, arrayB) => arrayA.filter( val=> !arrayB.includes(val)) ;
  
*/

function symmetricDiff(array, arrayTwo) {
  const diffA = difference(array, arrayTwo);
  const diffB = difference(arrayTwo, array);

  return [...diffA, ...diffB];
}

/* 

 What is the ... syntax?
 
 In the symmetricDiff function, there are two new arrays and the goal is to join two arrays into one array.
 
 The solution uses the "spread" syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_array_literals 
 The values from diffA and diffB are spread into the new array.
 
 As an alternative, you can also use the Array.prototype.concat method to join two arrays.

*/
