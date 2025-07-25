/* eslint-disable no-unused-vars */
function callAll(obj, fnArr) {
  let resultArray = [];
  for (let fn of fnArr) {
    resultArray.push(fn.call(obj));
  }
  return resultArray;
}
