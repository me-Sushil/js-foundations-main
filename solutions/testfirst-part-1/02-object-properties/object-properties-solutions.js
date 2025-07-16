/* eslint-disable no-unused-vars */
const setPropsOnObj = obj => {
  obj.x = 7;
  obj['y'] = 8;
  obj.onePlus = num => {
    return num + 1;
  };
};

const setPropsOnArr = arr => {
  arr.hello = () => {
    return 'Hello!';
  };

  arr['full'] = 'stack';

  arr[0] = 5;

  arr.twoTimes = num => {
    return num * 2;
  };
};

const setPropsOnFunc = func => {
  func.year = '20??';
  func.divideByTwo = num => {
    return num / 2;
  };
};

function shallowCopy(one, two) {
  if (Array.isArray(one)) return [...one, ...two];
  return { ...one, ...two };
}