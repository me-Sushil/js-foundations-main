### Symmetric Difference

<hr>

### Description:

Create the function `symmetricDiff` that accepts two array arguments and returns the Symmetric Difference between the two arrays. The [Symmetric Difference](https://en.wikipedia.org/wiki/Symmetric_difference) is the difference between two sets. Review the [following video](https://www.youtube.com/watch?v=PxffSUQRkG4) for an in depth explanation the Symmetric Difference.

In addition to the `symmetricDiff` function, the test specs require you to create a `difference` function (which is used/invoked within the `symmetricDiff` function). The `difference` function accepts two array arguments and returns an array that contains the unique values in the **first array argument** that are not present in the second array.

#### Examples:

```js
/* *** difference *** */
const uniqueValues = difference([5, 4, 3, 2], [5, 4, 6, 7]);
// uniqueValues === [2,3]
// Note: The first array (compared to the second array argument) has the unique values 2 and 3
```

```js
const symmetricDifference = symmetricDiff(
  [1, 2, 3, 4, 5, 6],
  [9, 8, 7, 1, 2, 5, 11]
);
// symmetricDifference === [3, 4, 6, 9, 8, 7, 11]
```

##### Topics:

- Fundamental JavaScript Concepts
- Try to incorporate the `filter` or `reduce` method in your solution (this is not required by the test specs).
