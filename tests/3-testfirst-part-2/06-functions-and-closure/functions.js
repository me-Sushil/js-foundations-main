/* eslint-disable no-unused-vars */
function concatString() {
  const arr = Array.from(arguments);
  return arr.join("");
}

function yourFunctionRunner() {
  let str = "";
  let valArr = Array.from(arguments);
  for (let i = 0; i < valArr.length; i++) {
    let element = valArr[i];
    str += element();
  }
  return str;
}

const makeAdder = (num) => {
  return function (numm) {
    return num + numm;
  };
};

const once = (sayHello) => {
  let hasBeenCalled = false;
  return function () {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return sayHello();
    }
    return "the function has already been called...";
  };
};

const createObjectWithClosures = () => {
  let value = 0;
  return {
    oneIncrementer: function () {
      value += 1;
    },
    tensIncrementer: function () {
      value += 10;
    },
    getValue: function () {
      return value;
    },
    setValue: function (newValue) {
      return (value = newValue);
    },
  };
};
