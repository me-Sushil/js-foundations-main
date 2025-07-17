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


const join=(arr, delimiter)=>{
    let finalStr = '';
   for(let i=0; i<arr.length; i++){
    let element = arr[i];
    finalStr+=element;
    if(arr.length-1 > i && typeof delimiter !== 'undefined'){
        finalStr += delimiter;
    }
   } 
   return finalStr;  
}
