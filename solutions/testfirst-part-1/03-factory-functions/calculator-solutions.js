/* eslint-disable no-unused-vars */

const createCalculator = () => {
  return {
    total: 0,
    add(num) {
      this.total += num;
    },
    subtract(num) {
      this.total -= num;
    },
    value() {
      return this.total;
    },
    clear() {
      this.total = 0;
    },
  };
};

const addSquareMethod = arr => {
  return arr.map(val => {
    val.square = function () {
      return this.total * this.total;
    };
    return val;
  });
};

const humanCalcPrototype = {

  add(num) {
    this.total += num;
  },
  subtract(num) {
    this.total -= num;
  },
  value() {
    return this.total;
  },
  clear() {
    this.total = -10;
  }
};

const createHumanCalculator = () => {
  const humanCalc = Object.create(humanCalcPrototype);
  humanCalc.total = -10;

  return humanCalc;
};