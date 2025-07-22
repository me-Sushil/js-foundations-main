Array.prototype.maap = function(callback) {
  const result = [];
  this.forEach((element) => {//, index, array
    result.push(callback(element));//, index, array
  });
  return result;
};






