Array.prototype.maap = function(func) {
  const arr = [];

  this.forEach(val => {
    arr.push(func(val));
  });

  return arr;
};

Array.prototype.fiilter = function(func) {
  const arr = [];

  this.forEach(val => {
    if (func(val)) arr.push(val);
  });

  return arr;
};

Array.prototype.reeduce = function(reducer, total) {
  this.forEach(val => {
    total = reducer(total, val);
  });

  return total;
};
