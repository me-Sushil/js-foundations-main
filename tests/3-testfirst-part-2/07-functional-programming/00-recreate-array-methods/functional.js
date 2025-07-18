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
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
   return false;
}
