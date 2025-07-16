### String Plus Plus

### Points: 6.00

#### Description


It would be great to have an [increment operator]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment") for strings where we can add `1` to any string (it might be an overstatement to say it would be "great" to have one, but at the least it would be fun to make one!) Lets's create a function that acts like the increment operator, but it adds `1` to a string.
  
Create the function `stringPlusPlus` that takes a string and returns a string incremented by one. If the string ends with a number character, add `1` to the number. If the string does not
contain a number character as the last character, append `1` to the end of string.

**Examples:**

```
stringPlusPlus('Avengers') -> 'Avengers1';

stringPlusPlus('ReadyPlayer1') -> 'ReadyPlayer2';

stringPlusPlus('JamesBond007') -> 'JamesBond008';

stringPlusPlus('Oceans11') -> 'Oceans12';

stringPlusPlus('') -> '1';

stringPlusPlus('helloWorld999') -> 'helloWorld1000'

```

Tips:

- If an empty string is passed as the argument, the string returned should be `"1"`
- If a number has leading zeros, such as `'JamesBond007'` the amount of digits should persist (the string returned is `'JamesBond008'`).
- We advise solving the exercise <b>without using a </b> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">regular expression</a>
- Here are a few helpful methods to consider using in your solution:
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes">includes</a>
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart">padStart</a>
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd">padEnd</a>
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt">parseInt</a>
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice">slice</a>