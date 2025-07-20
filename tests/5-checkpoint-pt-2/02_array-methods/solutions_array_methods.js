/* eslint-disable no-unused-vars */
const useMapToUpperCase = (string) => {
  return string.split(" ").map((element) => element.toUpperCase());
};

const useFilter = (string) => {
  return string.filter((element) => element.includes("@"));
};


const sumWithReduce = (array, startingValue = 0) => {
  return array.reduce((acc, currentVal) => acc + currentVal, startingValue);
};


const filterEvensDoubleAndSum =(array)=>{
    return array
    .filter((evenArr)=> evenArr % 2 === 0)
    .map((doubleElement)=>{
        return doubleElement*2;
    })
    .reduce((acc, currentVal)=>{
        return acc + currentVal;
    },0)
}
