### Make an Iterator

Create the function `makeIterator` that receives an array of values and returns an object (a.k.a. an "iterator") with the following methods:

- `getNext`: check the details below, the `next` method returns an object with a `value` and `done` property
- `getIndex`: a method that returns the current index value

#### The `getNext` Method:

The `getNext` method returns an object with 2 properties:

- `value`: the next value in the input array
- `done`: a boolean value which specifies if the input array has been fully processed.
  - It has the value `true` if the iterator is past the end of the sequence. In this case, the `value` property is an item from the input array.
  - It has the value `false` if the iterator was able to produce the next value in the sequence.

Note: the `getIndex` method returns the index that corresponds to the `.value` property on the object returned from `.getNext()`.
