/* eslint-disable no-unused-vars */
const vowelsCount =(string)=>{
    let vowelCount = {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
      total: 0,
    };
   let arrOfStr = string.toLowerCase().split("");
   for(let key of arrOfStr){
    if(vowelCount.hasOwnProperty(key)){
        vowelCount[key] += 1;
    }
   }
vowelCount.total = Object.entries(vowelCount).reduce((acc, [key, value]) => {
    return key !== "total" ? acc + value : acc;
  }, 0);

  return vowelCount;
};
   