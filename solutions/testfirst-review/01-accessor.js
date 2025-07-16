/* eslint-disable no-unused-vars */

const accessor = obj => {
  return (prop, value) => {
    if (value === undefined) {
      return obj[prop];
    } else {
      obj[prop] = value;
    }
  };
};
