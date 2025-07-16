### Interleave

#### Description

Create the function `interleave` that accepts strings as arguments:

```js
interleave('FOO', 'bar');
```

The task is to "interleave" the strings, such that the resulting string (return value) looks like:

```js
interleave('FOO', 'bar');

// RETURNS:
// "FbOaOr"
```

Also, `interleave` can accept any number of strings:

```js
interleave('HHh', 'Aaa', '!.?');

// RETURNS:
// "HA!Ha.ha?"

interleave('987', 'you', 'ARE', 'the', '246');

// RETURNS:
// "9yAt28oRh47uEe6"
```

#### Topics

- Array.prototype methods such as `reduce`, `map`, `filter` could be beneficial
- The [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object
  - Pairing the `arguments` object with [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
  - Here is the specific example from the documentation [Array.from(arguments)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Array_from_an_Array-like_object_arguments)
-

* Fundamental JavaScript Concepts - The logic is complex and challenge, remember to keep it simple!

#### Tips:

Some of the test specs that come later in the test suite have multiple arguments. There are a lot of different ways you can handle multiple
arguments
