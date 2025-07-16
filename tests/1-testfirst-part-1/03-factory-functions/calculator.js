/* eslint-disable no-unused-vars */
function createCalculator() {
  return {
    total: 0,
    add(num) {
      this.total += num;
    },
    subtract(num) {
      this.total -= num;
    },
    value(){
        return this.total;
    },
    clear(){
        this.total = 0;
    }
  };
};
