/* 
Arrow function: is another way of defining function
    What is different: 
        - arrow function does not create it's own 'this'
        - if one line of code, no need to put {} or write keyword 'return';
          it will implicitly return whatever that one line of code resolves to

e.g. let newFunc1 = (param1, param2) => {
    let result = param1 * param2;
    return result;
}
e.g. let newFunc2 = (param1) => param1 * 100; //function with return the value of param1*100
e.g. let newFunc3 = (param1, param2) => ({name: param1, year: param2}); //returns the object.  
                                        need to put () when returning object in one line of code
*/

// let createStudent = (name, city) => {
//   return { name, city };
// };
let createStudent = (name, city) => ({ name, city }); //using Shorthand object notation

let tryArrowFunc = (arg) => arg * 100;

let newStudent = createStudent("Niru", "Kirtipur");

console.log(newStudent); //{ name: 'Niru', city: 'Kirtipur' }

console.log(tryArrowFunc(22)); //2200
