/* eslint-disable no-unused-vars, no-throw-literal*/

class RPNCalculator {
  constructor() {
    this.numStack = [];
  }

  push(num) {
    this.numStack.push(num);
  }

  popCompute(operationFunc) {
    if (this.numStack.length < 2) {
      throw 'rpnCalculatorInstance is empty';
    } else {
      const num1 = this.numStack.pop();
      const num2 = this.numStack.pop();

      this.push(operationFunc(num1, num2));
    }
  }

  plus() {
    this.popCompute((first, second) => first + second);
  }

  value() {
    return this.numStack[this.numStack.length - 1];
  }

  minus() {
    this.popCompute((first, second) => second - first);
  }

  times() {
    this.popCompute((first, second) => first * second);
  }

  divide() {
    this.popCompute((first, second) => second / first);
  }
}