/* eslint-disable no-unused-vars */

function forEach(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}

function map(arr, doubler) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    newArr.push(doubler(element));
  }
  return newArr;
}
function doubler(num) {
  return num * 2;
}

function filter(arr, fnArg) {
  let trueNewArr = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (fnArg(element) === true) {
      trueNewArr.push(element);
    }
  }
  return trueNewArr;
}

function includes(collection, value) {
  let arr = Object.values(collection);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

const countWords = (val, word) => {
  let totalCount = 0;
  let arr = word.split(" ");
  totalCount = val + arr.length;
  return totalCount;
};

function reduce(array, currentValue, combineFn) {
  let totalValue = 0;
  for (i = 0; i < array.length; i++) {
    totalValue += combineFn(currentValue, array[i]);
  }
  return totalValue;
}

function combine(accumulator, line) {
  return (accumulator += line.split(" ").length);
}
let cocc = reduce(["sushsu sus susu", "iu ushd sud"], 0, combine);
console.log(cocc);



function reduce(array, callback, initial) {
  let result = initial;
  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i], i, array);
  }
  return result;
}
function every(collection, predicate) {
  return reduce(collection, (acc, curr) => {
    return acc && !!predicate(curr); // stop at first false
  }, true);
}
