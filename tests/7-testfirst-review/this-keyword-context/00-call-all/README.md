## The Call All Function

Create the function "call all" that accepts an object and an array of functions as arguments. Invoke each function in the array of functions and assign the context of `this` in each function to the object passed as the first argument. After each function invocation, store the value in new array and return the array.

Note: Notice the functions below us the "this" keyword. You need to set the context of "this" using the `.call` method.

```js
// functions
function firstName() {
  return this.first;
}

function lastName() {
  return this.last;
}

const fnArr = [firstName, lastName];

const nameArr = callAll({ first: 'Nimit', last: 'Maru' }, fnArr);

// RETURN VALUE nameArr ===> ["Nimit", "Maru"];
```

### Topics

- `this` keyword (Explicit Binding Rule)
- Array.prototype.map
- [Function.prototype.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
