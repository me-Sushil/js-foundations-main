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


const paramify =obj=>{
    let  params = [];
    for(let prop in obj){
        if(obj.hasOwnProperty(prop)){
             params.push(`${prop}=${obj[prop]}`);
        }
    }
    return join(params.sort(), '&');
}


const paramifyObjectKeys =(obj)=>{
    return Object.keys(obj)
    .map((key)=>{
        return `${key}=${obj[key]}`;
    })
    .sort()
    .join('&');
};

function sort(items) {
  let length = items.length;
  for (let i = length - 1; i >= 0; i--) {
    //Number of passes
    for (let j = length - i; j > 0; j--) {
      //Compare the adjacent positions
      if (items[j] < items[j - 1]) {
        //Swap the numbers
        let tmp = items[j];
        items[j] = items[j - 1];
        items[j - 1] = tmp;
      }
    }
  }
  return items;
}
