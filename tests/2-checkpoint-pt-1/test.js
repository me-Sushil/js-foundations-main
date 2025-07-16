Array.prototype.sayHello = function () {
  console.log('hello there, ', this);
  this.pop();
};

// let a = [1, 2];
// a.sayHello();
// console.log(a);

function getObj() {
  return {
    name: 'rushil',
    age: 45,
  };
}

let b = getObj();
let c = getObj();

let d = { name: 'hello' };
b.__proto__.hello = function hello() {
  console.log('hello');
};

b.hello();
d.hello();
