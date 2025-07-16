/* eslint-disable no-unused-vars */

const factorialIterative = n => {
  let total = 1;
  for (n; n >= 2; n--) {
    total *= n;
  }
  return total;
};

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

function sumTheDigits(arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    return arr[0] + sumTheDigits(arr.slice(1));
  }
}

function countTheVowels(str) {
  if (!str.length) return 0;
  //                   oh the power of type coercion :)
  return 'aeiouAEIOU'.includes(str[0]) + countTheVowels(str.slice(1));
}

function recSmallestInt(arr) {
  if (arr.length === 1) return arr[0];
  return Math.min(arr[0], recSmallestInt(arr.slice(1)));
}


function fib(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

const type = val => {
  return Object.prototype.toString.call(val).slice(8, -1);
};

function stringify(obj) {
  if (type(obj) === 'String') {
    return `"${obj}"`;
  }
  if (type(obj) === 'Array') {
    const result = obj.map(o => stringify(o));
    return `[${result.join(',')}]`;
  }
  if (type(obj) === 'Object') {
    let result = [];
    Object.keys(obj).forEach(key => {
      let val = stringify(obj[key]);
      result.push(`"${key}":${val}`);
    });
    return `{${result.join(',')}}`;
  }

  return obj + '';
};

function search(func) {
  let bool = false;
  this.forEach((val) => {
    if (func(val)) {
      bool = true;
    } else if (Array.isArray(val) && !bool) {
      bool = search.call(val, func);
    }
  });
  return bool;
}

function recursiveMap(arr, cb) {
  if (arr.length === 0) return [];


  if (Array.isArray(arr[0])) {
    return recursiveMap(arr[0], cb).concat(recursiveMap(arr.slice(1), cb));
  }

  let value = cb(arr[0]);

  return [value].concat(recursiveMap(arr.slice(1), cb));
}