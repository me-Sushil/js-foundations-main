/* eslint-disable no-unused-vars */

function forEach(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}

function map(arr, doubler) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        let element = arr[i];
        newArr.push(doubler(element));
    }
     return newArr;
}
 function doubler (num){
    return num *2;
}