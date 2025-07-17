/* eslint-disable no-unused-vars */
const repeat=(str, num)=>{
    let string = '';
    for(let i=0; i<num; i++){
        string += str;
    }
    return string;
}

const sum =(arr)=>{
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
   return sum;
}