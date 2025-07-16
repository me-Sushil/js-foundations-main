### Accepted Words

#### Points: 7.00

#### Description:

The `acceptedWords` function is passed criteria to evaluate against an array of words. The array of words is a **global variable**, `wordList`. All words that pass the criteria are included in the array that `acceptedWords` returns. Here is an example:

"Find all the words from the `wordList` that has 3 vowels and 6 consonants and does not include the letters `['a', 'b', 'e', 'o', 'u']`"

The function `acceptedWords` is passed the following arguments based on the criteria in the sentence above:

```js
wordList // note this is a global variable in your solution file. The Accepted Words function should use this global variable
acceptedWords(3,6,['a','b','e','o', 'u']);// returns  ==>[ 'mimicking', 'spiriting', 'vikingism', 'visitings' ]
```

- **vowels** - the first argument. the word(s) added to the array returned must have 3 vowels, vowels may be repeated, e.g. `'mimicking'' vowels = 3
  - **NOTE: vowels = 'aeiou' NOT 'y'**

- **consonants** - the second argument, the word(s) added to the array returned must have 6 consonants, consonants may also repeat, e.g. `'mimicking'` consonants = 6

- **forbidden characters** - the third argument (which is an optional argument) is an array, the word(s) should not contain the characters in the array, e.g. `'mimicking'` forbidden = `['a', 'b', 'e', 'o', 'u']`

Here are the 3 arguments passed:

- vowels: 3
- consonants: 6
- forbidden characters: `['a', 'b', 'e', 'o', 'u']`


