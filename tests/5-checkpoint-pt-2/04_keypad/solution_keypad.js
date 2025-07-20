/* eslint-disable no-unused-vars */
const presses=(string)=>{
    const keyMap = {
    1: ['1'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    0: [' ']
  };

  let count = 0;

  for(let char of string.toLowerCase()){
    for(let key in keyMap ){
        let idx = keyMap[key].indexOf(char);
        if(idx !== -1){
            count += idx + 1;
        }
    }
  }
  return count;

}