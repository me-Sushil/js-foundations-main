Array.prototype.maap = function(callback) {
  const result = [];
  this.forEach((element) => {
    result.push(callback(element));
  });
  return result;
};






