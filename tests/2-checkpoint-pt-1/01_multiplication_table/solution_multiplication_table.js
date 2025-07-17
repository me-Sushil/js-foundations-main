/* eslint-disable no-unused-vars */
const multiplicationTable =(rows, columns)=>{
    let newArr = [];
    for(let i=1; i<=rows; i++){
        let row = [];
        for(let j=1; j<=columns; j++){
            row.push(i*j);
        }
        newArr.push(row);
    }
    return newArr;
}

const arr = multiplicationTable(2,3);
console.log(arr);