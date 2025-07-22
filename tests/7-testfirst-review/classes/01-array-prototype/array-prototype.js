Array.prototype.maap = function (callback) {
  const result = [];
  this.forEach((element) => {
    result.push(callback(element));
  });
  return result;
};

Array.prototype.fiilter = function (callback) {
  let result = [];
  this.forEach((element) => {
    if (callback(element)) {
      result.push(element);
    }
  });
  return result;
};
