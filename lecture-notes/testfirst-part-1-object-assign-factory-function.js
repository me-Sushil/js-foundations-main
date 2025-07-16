let a = { name: "amir", add: { city: "ktm" } };
// console.log(a);

/*
Object.assign: shallow copy all key value pairs from parameter 2 to parameter 1
eg. let copy = Object.assign(target, source)
target: object to copy to.  Target is mutated
source: object to copy from
returns: the target object
*/
let target = { isTarget: true };
let be = Object.assign(target, a);

// console.log(be); //will print { isTarget: true, name: 'amir', add: { city: 'ktm' } }
// console.log(target === be); //is true

be.name = "Subash";
be.add.city = "Lalitpur";
// console.log(a); //{ name: 'amir', add: { city: 'Lalitpur' } }
// console.log(be); //{ isTarget: true, name: 'Subash', add: { city: 'Lalitpur' } }
be.add = "Lalitpur"; // we assigned the primitive string "Lalitpur" to be.add in place of the previous reference to a.add
// console.log(be); //{ isTarget: true, name: 'Subash', add: 'Lalitpur' } <= so be.add is now a string
// console.log(a); //{ name: 'amir', add: { city: 'Lalitpur' } } <= but a.add remains object

/*
Spread syntax: this does something similar to Object.assign, 
    except it doesn't mutate the target.
    It also works on Arrays
e.g. let targetObj = {...sourceObject}
e.g. let targetArr = [...sourceArray]
*/
let b = { ...a, age: 22, health: "good" };
// console.log(b);  //will print { name: 'amir', add: { city: 'ktm' }, age: 22, health: 'good' }
//spread syntax also works in arrays the same way
let mainArray = [1, 2, [3, 4]];
let copiedArray = [300, ...mainArray];
copiedArray[0] = 10; //copiedArray is now [10,1,2,ref] where ref points to mainArray[2]
copiedArray[3][1] = 100; //changes ref at index 3 in mainArray becomes [3, 100]
// console.log(mainArray); // [ 1, 2, [ 3, 100 ] ] <- notice mainArray[3][1] changed
// console.log(copiedArray); // [ 10, 1, 2, [ 3, 100 ] ]

/*
Factory function pattern: creates and returns objects
e.g. let newStudent = createStudent(param1, param2)
*/
function createStudent(name, city) {
  let student = { name, city }; //this is shorthand object notation, if key and variable name is same

  return student;
}

let newStudent = createStudent("Niru", "Kirtipur");
console.log(newStudent); // { name: 'Niru', city: 'Kirtipur' }
