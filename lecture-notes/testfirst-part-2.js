/**
 * Array.reduce
 * example: array.reduce(combinerFunction, startVale)
 *
 * combinerFunction: the function to run to combine the values
 * startVal (optional): initial value
 * returns: the final value after running the combinerFunction
 *      through all elements of array
 */

// let a = [1, 2, 3, 4];
// console.log(a.reduce((val, x) => val + x)); //10
// console.log(a.reduce((val, x) => val + x*2)); //19
// console.log(a.reduce((val, x) => val + x, 20)); //30

// let passingFunc = (curVal, x) => {
//   curVal.push(x * 2);
//   return curVal;
// };

// let reducedArray = newArr.reduce(passingFunc, []);
// console.log(reducedArray); //[20, 40, 60, 80]

/**
 * Array.map
 * example: array.map(mappingFunction)
 *
 * mappingFunction: the function to run one by one on all elements of array
 * returns: a new array with results from running mappingFunction on all elements of array
 *
 */
// let newArr = [10, 20, 30, 40];

// let mappedArray = newArr.map((x) => x + 1);
// console.log(mappedArray); //[11, 21, 31, 41]

/**
 * Array.filter
 * example: array.filter(filterFunction)
 *
 * filterFunction: the function to run one by one on all elements of array
 * returns: a new array with results from running filterFunction on all elements of array
 *      for those values that filterFunction returns true
 *
 */

// let newArr1 = [10, 20, 30, 40];
// let filteredArray = newArr1.filter((x) => x > 25);
// console.log(filteredArray); // [30, 40]

/**
 * arguments
 *      All functions have access to the keywork 'arguments'
 *      the 'arguments' keyword contains all the arguments
 *      passed to the function in an array like object
 */

function someFunc() {
  let result = "";
  //   let newObj = Object.create(arguments);
  //   console.log(newObj[0]);
  let myArr = Array.from(arguments); //create an array from arguments
  console.log(myArr);
  console.log(arguments);

  for (let key in arguments) {
    result += arguments[key] + " and ";
  }

  return result;
}

console.log(
  someFunc("hello", "there", "you", "how", "niru", "pratiksha", "manjila")
); //this will print "hello and there and you and how and niru and pratiksha and manjila and"
