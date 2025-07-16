### Vowel Count

<hr>

### Description:

Create the function `vowelsCount(str)` that detects the amount of vowels in a string and **returns an object with the format:** `{a: 0, e: 0, i: 0, o: 0, u: 0, total: 0}`. The object returned contains property/value pairs that correspond to the vowel (property) and the amount of occurrences of the vowel in the `str` argument. In addition, it has a property called `total` that contains the sum of all of the vowels included in the `str` argument.

**Note: `y` is not considered a vowel for this exercise.**

#### Examples:

```
// INPUT: 'David Yang'
vowelsCount('David Yang');
// OUTPUT: {a: 2, e: 0, i: 1, o: 0, u: 0, total: 3}
```

```
// INPUT: 'Nimit Maru'
vowelsCount('Nimit Maru');
// OUTPUT: {a: 1, e: 0, i: 2, o: 0, u: 1, total: 4}
```

##### Topics:

- `Array.prototype.reduce`
- String methods (such as `String.prototype.includes` or `String.prototype.indexOf`)
- Fundamental JavaScript Concepts
