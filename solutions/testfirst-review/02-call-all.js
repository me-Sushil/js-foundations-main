/* eslint-disable no-unused-vars */

const callAll = (obj, fnArr) => {
  return fnArr.map(fn => {
    return fn.call(obj);
  });
};
