### A Quarter Function

#### Points: 7.00

<hr>

#### Description

The `aQuarter` function accepts a function as an argument and returns a new function.

The function returned only works "a quarter" of the time, e.g.

```js
const functionReturned = aQuarter((x, y) => {
  return x - y;
});

functionReturned(8, 7); // ==> returns 'something went wrong :/'
functionReturned(10, 4); // ==> returns 'something went wrong :/'
functionReturned(11, 12); // ==> returns 'something went wrong :/'
functionReturned(5, 2); // ==> returns 3
```

As you can see from the example, the function doesn't work the first three times, but it finally works on the 4th try. On the 4th try, the function returned invokes the function
that was passed to `aQuarter` and returns the value. This pattern is repeatable, e.g.

```js
const functionReturned = aQuarter((x, y) => {
  return x - y;
});

functionReturned(8, 7); // ==> returns 'something went wrong :/'
functionReturned(120, 4); // ==> returns 'something went wrong :/'
functionReturned(11, 12); // ==> returns 'something went wrong :/'
functionReturned(5, 2); // ==> returns 3

functionReturned(86, 7); // ==> returns 'something went wrong :/'
functionReturned(10, 41); // ==> returns 'something went wrong :/'
functionReturned(121, 152); // ==> returns 'something went wrong :/'
functionReturned(10, 2); // ==> returns 8

functionReturned(84, 78); // ==> returns 'something went wrong :/'
functionReturned(170, 48); // ==> returns 'something went wrong :/'
functionReturned(151, 12); // ==> returns 'something went wrong :/'
functionReturned(15, 9); // ==> returns 6

functionReturned(28, 7); // ==> returns 'something went wrong :/'
functionReturned(710, 45); // ==> returns 'something went wrong :/'
functionReturned(191, 172); // ==> returns 'something went wrong :/'
functionReturned(7, 2); // ==> returns 5
```

EXTRA CREDIT: Adding the functionality described below is extra credit

The function returned from `aQuater` should be able to accept any number of arguments to the function it invokes (the function it invokes is the function passed to aQuarter).

These links might be helpful:

- [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Arguments Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

```js
const functionReturned = aQuarter(
  (a, b, c, d, e, f, g, h, i, j, k, l, m, n) => {
    return a + b + c + d + e + f + g + h + i + j + k + l + m + n;
  }
);

functionReturned(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14); // ==> returns 'something went wrong :/'
functionReturned(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14); // ==> returns 'something went wrong :/'
functionReturned(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14); // ==> returns 'something went wrong :/'
functionReturned(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14); // ==> returns 105
```
