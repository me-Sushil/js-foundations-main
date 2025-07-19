/* eslint-disable no-unused-vars */
function concatString() {
  const arr = Array.from(arguments); 
  return arr.join('');              
}




function yourFunctionRunner(){
  let str = '';
  let valArr = Array.from(arguments); 
  for(let i =0; i<valArr.length; i++){
    let element = valArr[i];
    str+=element();
  }
  return str;
}

