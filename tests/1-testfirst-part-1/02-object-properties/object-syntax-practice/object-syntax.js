/* eslint-disable no-unused-vars */
let  name = 'Cody';
let loud = 'loud';
let dog ={
    bark(){
       return 'ruff ruff!';
    },
    name,
[`${loud}Bark`]: function(){
    return this.bark().toUpperCase();
},

};

const { bark } = dog;