/* eslint-disable no-unused-vars */

// const concatString = function(){
// 	let finalString = "";
// 	for(let i = 0; i < arguments.length; i++){
// 		finalString += arguments[i];
// 	}
// 	return finalString;
// };

const concatString = function () {
  return Array.from(arguments).join('');
};

const yourFunctionRunner = function () {
  let finalString = '';
  for (let i = 0; i < arguments.length; i++) {
    finalString += arguments[i]();
  }
  return finalString;
};

// const yourFunctionRunner = function(fnToRun, secondFnToRun) {
//   let finalString = '';

//   for (let i = 0; i < arguments.length; i++) {
//     let fnToRun = arguments[i];
//     finalString += fnToRun();
//   }
//   return finalString;
// };

const makeAdder = numberToRemember => {
  return function (numberToAdd) {
    return numberToAdd + numberToRemember;
  };
};

const once = (func) => {
  let notCalled = true;
  return () => {
    if (notCalled) {
      notCalled = false;
      return func();
    }
    return 'the function has already been called...'
  }
}

const createObjectWithClosures = function () {
  let total = 0;
  return {
    oneIncrementer: function () {
      total += 1;
    },
    tensIncrementer: function () {
      total += 10;
    },
    getValue: function () {
      return total;
    },
    setValue: function (val) {
      total = val;
    },
  };
};


function dontSpillTheBeans(secret) {
  return {
    getSecret: function () { return secret; },
    setSecret: function (v) { secret = v; }
  };
}
