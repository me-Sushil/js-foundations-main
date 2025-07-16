### Procrastinator

#### Points: 5.00

#### Description:

The function `procrastinator` accepts a string as an argument and returns a new function. The function returned returns successive characters of the string passed to the `procrastinator` function on successive invocations. When the end of the string is met, it will start back at the beginning.

```js
const funcReturned = procrastinator('example');

funcReturned(); // returns ==> "e":
funcReturned(); // returns ==> "x":
funcReturned(); // returns ==> "a":
funcReturned(); // returns ==> "m":
funcReturned(); // returns ==> "p":
funcReturned(); // returns ==> "l":
funcReturned(); // returns ==> "e":
funcReturned(); // returns ==> "e": // restarts from the beginning
funcReturned(); // returns ==> "x":
funcReturned(); // returns ==> "a":
funcReturned(); // returns ==> "m":
funcReturned(); // returns ==> "p":
funcReturned(); // returns ==> "l":
funcReturned(); // returns ==> "e":
```
