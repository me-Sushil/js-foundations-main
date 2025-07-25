/* eslint-disable no-unused-vars */
function rotater(string) {
  let direction = 'forward';
  return function (num) {
    const len = string.length;
    const n = num % len;
    let rotated;
    if (direction === 'forward') {
      rotated = string.slice(n) + string.slice(0, n);
    } else {
      rotated = string.slice(-n) + string.slice(0, -n);
    }
    if (num === len) {
      direction = direction === 'forward' ? 'backward' : 'forward';
    }
    return rotated;
  };
}
