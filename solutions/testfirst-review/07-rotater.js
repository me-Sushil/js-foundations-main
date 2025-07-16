/* eslint-disable no-unused-vars */

const rotater = str => {
  let flip = false;
  let rotatedStr;

  return function (steps) {
    if (steps === str.length) {
      flip = !flip;
    }
    if (!flip) {
      rotatedStr = `${str.slice(steps)}${str.slice(0, steps)}`;
    } else {
      rotatedStr = `${str.slice(str.length - steps)}${str.slice(0, str.length - steps)}`;
    }
    return rotatedStr;
  };
};