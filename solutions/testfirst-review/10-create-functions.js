/* eslint-disable no-unused-vars */

function createFunctions(n) {
  var callbacks = [];

  var factory = function (x) {
    return function () {
      return x;
    };
  };

  for (var i = 0; i < n; i++) {
    callbacks.push(factory(i));
  }

  return callbacks;
}
