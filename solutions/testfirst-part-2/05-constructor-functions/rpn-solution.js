/* eslint-disable no-unused-vars, no-throw-literal*/

function RPNCalculator() {
  this.numStack = [];
}

RPNCalculator.prototype.push = function(num) {
  this.numStack.push(num);
};

RPNCalculator.prototype.popCompute = function(operationFunc) {
  if (this.numStack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    const num1 = this.numStack.pop();
    const num2 = this.numStack.pop();

    this.push(operationFunc(num1, num2));
  }
};

RPNCalculator.prototype.plus = function() {
  this.popCompute((first, second) => first + second);

  /* does this arrow function syntax look funky? It's missing a return statement! AND a code block!

  When an arrow function is condensed to a single line expression, it can be reduced to a single line of code which saves
  a few characters to type (whew :) ) and enhances readability.

  the function passed to popCompute could also use the standard syntax:

  this.popCompute((first,second) => {
    return first + second;
  })

  It is not necessary to use the shorthand single line expression syntax, both formats behave exactly the same.

  */
};

RPNCalculator.prototype.value = function() {
  return this.numStack[this.numStack.length - 1];
};

RPNCalculator.prototype.minus = function() {
  this.popCompute((first, second) => second - first);
};

RPNCalculator.prototype.times = function() {
  this.popCompute((first, second) => first * second);
};

RPNCalculator.prototype.divide = function() {
  this.popCompute((first, second) => second / first);
};
