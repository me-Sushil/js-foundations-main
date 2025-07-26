/* eslint-disable no-unused-vars, no-prototype-builtins */
function keyAdder() {
  let sum = 0;
  for (let key in this) {
    if (typeof this[key] === "number" && this.hasOwnProperty(key)) {
      sum += this[key];
    }
  }
  return sum;
}
