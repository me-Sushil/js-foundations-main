Array.prototype.doNotInclude = function(indexes) {
  if (typeof indexes === 'number') {
    indexes = [indexes];
  }
  return this.filter((_, i) => !indexes.includes(i));
};
