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


const join=(inputArr, delimiter)=>{
    let finalStr = '';
   for(let i=0; i<inputArr.length; i++){
    let element = inputArr[i];
    finalStr+=element;
    if(inputArr.length-1 > i && typeof delimiter !== 'undefined'){
        finalStr += delimiter;
    }
   } 
   return finalStr;  
}

const gridGenerator =(num)=>{
    let bord = "";
    for(let i=0; i<num; i++){

        for(let j=0; j<num; j++){
            if((i+j)%2 === 0){
                bord += "#";
            }else{
                bord += " ";
            }
        }
        bord += "\n";
    }
    return bord;
}