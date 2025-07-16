### Do Not Include

<hr>

### Description:

Attach the method `doNotInclude` to the `Array.prototype` object so all array instances can access the method.

The `doNotInclude` method accepts and array and returns an array. The array argument represents index values to remove from the array `doNotInclude` is called on. Here is an example:

```js
const arrayOfCharacters = ['a', 'b', 'c', 'd'];
const newArrayOfCharacters = arrayOfCharacters.doNotInclude([0, 2]);
console.log(newArrayOfCharacters); // ['b', 'd'];
// a new array is returned and the index values at position 0 and 2 were removed ('a', 'c')
```

##### Topics:

- `Array.prototype.filter`:
  - The callback function to the `filter` method is passed each individual value from the array it is called on.
  - In addition, the second argument in the callback function is the index of the current element being processed. This can be useful for determining if the current index value should be skipped and not included in the array the filter method creates.
- Fundamental JavaScript Concepts
- Prototypes and the "this" keyword
