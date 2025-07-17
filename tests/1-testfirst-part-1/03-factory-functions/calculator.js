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

const addSquareMethod =(arr)=>{
return arr.map((element)=>{
  element.square = function(){
    return this.total * this.total;
  }
  return element;
  });
};

const humanCalcPrototype={
  add(num){
    this.total +=  num;
  },
   subtract(num) {
      this.total -= num;
    },
    value(){
        return this.total;
    },
    clear(){
        this.total = -10;
    }

}
const createHumanCalculator =()=>{
  let humanCal = Object.create(humanCalcPrototype);
  humanCal.total = -10;
  return humanCal;
};

