/* eslint-disable no-unused-vars, no-throw-literal*/
function RPNCalculator() {
  this.stack = [];
}

RPNCalculator.prototype.push = function (value) {
  this.stack.push(value);
};

RPNCalculator.prototype.value = function () {
  return this.stack[this.stack.length - 1] || 0;
};

RPNCalculator.prototype._requireOperands = function () {
  if (this.stack.length < 2) {
    throw new Error("calculator is empty");
  }
};

RPNCalculator.prototype.plus = function () {
  this._requireOperands();
  const b = this.stack.pop();
  const a = this.stack.pop();
  this.stack.push(a + b);
};

RPNCalculator.prototype.minus = function () {
  this._requireOperands();
  const b = this.stack.pop();
  const a = this.stack.pop();
  this.stack.push(a - b);
};

RPNCalculator.prototype.times = function () {
  this._requireOperands();
  const b = this.stack.pop();
  const a = this.stack.pop();
  this.stack.push(a * b);
};

RPNCalculator.prototype.divide = function () {
  this._requireOperands();
  const b = this.stack.pop();
  const a = this.stack.pop();
  this.stack.push(a / b);
};
