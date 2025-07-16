### Rename Files

<hr>

### Description:

Create the function `renameFiles` that accepts an array of filenames (strings). The array of filenames persists the ordering the file was created at. For example, `['file-one', 'file-two', 'file-three']`, `file-one` was the first file created and `file-three` was the last file created.

It is possible that two, three or more files have the same name. In our filesystem, we don't want files to have the same name. It is a common practice for filesystems to add `(n)` where `n` is the smallest integer available that is a unique. Here is an example:

The following array of filenames has the same filenames:

```js
const filenames = ['download', 'download', 'download', 'download'];
```

The `renameFiles` function will take the filenames and add `(n)` to filenames that have a duplicate. `n` will be a number.

```js
renameFiles(['hello', 'hello', 'hello']); // returns: ['hello', 'hello(1)', 'hello(2)']
```

##### Topics:

- Fundamental JavaScript Concepts
  - Loops (possibly nested loops)
  - String Manipulation
