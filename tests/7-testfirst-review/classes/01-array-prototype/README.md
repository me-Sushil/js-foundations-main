### Array.prototype

Just like you did in TestFirst, you are tasked once again to recreate a few `Array.prototype` methods. Here is the twist... recreate versions of each method and place it on the `Array.prototype` object.

Previously in TestFirst, you created the `map`, `filter`, and `reduce` methods, the structure looked like this:

```js
const doulbed = map([1, 2, 3], num => num * 2);
```

Notice that the array was the first argument passed to the `map` function (this is how you created the function previously). Instead of passing the array to the function as an argument, you will invoke `map` as a method:

```js
const numbers = [1, 2, 3];
const doubled = numbers.maap(num => num * 2);
```

Create the methods:

- `Array.prototype.maap`
- `Array.prototype.fiilter`
- `Array.prototype.reeduce`

Note: review the spelling of each method: `aa`, `ii`, `ee` in `maap`,`fiilter`, and `reeduce`

Here are a few thoughts to keep in mind when approaching the problem:

- When you invoke `arr.map((val) => console.log(val))`, how does the `.map` method access
  the `arr` it is called on? (Hint: you need to review the rules of the **this** keyword)

Examples:

```js
/* *** Array.prototype.maap *** */
const numberList = [1, 2, 3, 4, 5];
const doubledList = numberList.maap(num => num * 2);
console.log(doubledList); // [2,4,6,8,10]

/* *** Array.prototype.fiilter *** */

const words = ['hello', 'space', 'start', 'bye', 'super', 'transit', 'cart'];
const containsLetterS = words.fiilter(word => word.includes('s'));
console.log(containsLetterS); // ['space', 'start', 'super', 'transit'];

/* *** Array.prototype.reeduce *** */

const numberList = [1, 2, 3, 4, 5];
const sum = numberList.reeduce((accum, num) => accum + num, 0);
console.log(sum); // 15
```

### Topics:

- Prototype methods
- Array methods
- Fundamental JavaScript Concepts
