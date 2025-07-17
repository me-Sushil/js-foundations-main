/* eslint-disable no-unused-vars, no-prototype-builtins */
function findObjPropsHasOwn(obj) {
  const result = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key);
    }
  }

  return result.join(', ');
}

const findObjKeys =(obj)=>{
    let objArr = Object.keys(obj);
    return objArr.join(', ');
};