Array.prototype.maap = function(callback) {
  const result = [];
  this.forEach((element) => {//, index, array
    result.push(callback(element));//, index, array
  });
  return result;
};
const arr = [1, 2, 3];
const newArr = arr.maap((val, i) => {
  return val + 1;
});
console.log(newArr); 
console.log(arr);  




