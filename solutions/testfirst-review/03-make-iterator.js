const makeIterator = (array = []) => {
  let index = 0;
  return {
    getNext() {
      const value = array[index++];
      return { value, done: index > array.length };
    },
    getIndex() {
      return Math.min(index, array.length);
    },
  };
};
