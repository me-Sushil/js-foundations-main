/* eslint-disable no-unused-vars */
const thrice = (fn) => {
  let count = 0;
  return function() {
    if (count < 3) {
      count++;
      return fn();  // properly calls the original function
    } else {
      return undefined;
    }
  };
};
