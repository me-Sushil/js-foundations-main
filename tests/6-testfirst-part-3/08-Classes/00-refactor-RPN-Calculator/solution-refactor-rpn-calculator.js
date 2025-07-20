/* eslint-disable no-unused-vars, no-throw-literal*/

/*
  Refactor the constructor function below and use ES2015 Class Syntax
*/
class RPNCalculator {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  _requireOperands() {
    if (this.stack.length < 2) {
      throw new Error("rpnCalculatorInstance is empty");
    }
  }

  plus() {
    this._requireOperands();
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a + b);
  }

  minus() {
    this._requireOperands();
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a - b);
  }

  divide() {
    this._requireOperands();
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a / b);
  }

  times() {
    this._requireOperands();
    const b = this.stack.pop();
    const a = this.stack.pop();
    this.stack.push(a * b);
  }

  value() {
    return this.stack[this.stack.length - 1];
  }
}
