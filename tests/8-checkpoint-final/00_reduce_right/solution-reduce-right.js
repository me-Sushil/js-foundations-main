/* eslint-disable no-unused-vars, no-prototype-builtins */
function reduceRight(arr, iniVal, func){
    let accumulator = iniVal;
    
    for(let i= arr.length -1; i>=0; i--){
        accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
}