// the difference function is pre-declared so it is recognized by the test specs.
// The last spec in symmetricDiff checks to see that difference is called.

// If difference is defined using an assignment expression (with let or const)
// it is not accessible on the "window" object which is where the jasmine `spyOn` function
// checks for the `difference` function.

// Feel free to change the names of the parameters, but if you want your specs to
// pass keep the function// declaration syntax.

/* eslint-disable no-unused-vars */

function difference(arrayA, arrayB) {
    return arrayA.filter(element=>!arrayB.includes(element));    
}


function symmetricDiff(arrayA, arrayB){
    let syDif =[];
    let diffA =  difference(arrayA, arrayB);
    let diffB = arrayB.filter((element)=>!arrayA.includes(element));
    diffA.map((element)=>syDif.push(element));
    diffB.map((element)=> syDif.push(element));
    return syDif;
}