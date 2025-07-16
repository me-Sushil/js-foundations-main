### Character

#### Points: 4.00

<hr>

#### Description

Create the class `Character` that returns an instance with the properties:

- `character` - the first argument is assigned to character, it can be a string or number
- `fontName` - the second argument is the name of the font used on the character
- `fontSize` - the font size of the character property

Every instance of `Character` should also have the following method in its prototype chain:

- `drawCharacter` - returns the value located at the character property

```js
const a = new Character('a', 'Arial', 12);

a.character; // returns 'a';
a.fontName; // returns 'Arial';
a.fontSize; // returns 12
a.drawCharacter(); // returns 'a';
```

<hr>

The `Letter` class is an extension of the `Character` class. Every `Letter` instance contains the methods and properties from the `Character` class with the addition of:

**Properties:**

- `charCase` - the value assigned to the `charCase` property is a `string`, it is either `'upperCase'` or `'lowerCase'`, **this value is passed to the class as the 4th argument**.

**Methods:**

- `getCase` - the `getCase` method returns the value assigned to the `charCase` property
- `toLowerCase` - the method re-assigns the value assigned to the `charCase` property to `lowerCase`. In addition, it calls the String.prototype.toLowerCase() method on the `character` property and re-assigns the value returned to the character property.
- `toUpperCase` - the method re-assigns the value assigned to the `charCase` property to `upperCase`. In addition, it calls the String.prototype.toUpperCase() method on the `character` property and re-assigns the value returned to the character property.

```js
const c = new Letter('c', 'Helvetica', 16, 'lowerCase');
c.drawCharacter(); // returns 'c';
c.getCase(); // returns 'lowerCase'
c.toUpperCase();
c.getCase(); // returns 'upperCase'
c.drawCharacter(); // returns 'C';
c.toLowerCase();
c.getCase(); // returns 'lowerCase'
c.drawCharacter(); // returns 'c';
```

<hr>

The `Digit` class is an extension of the `Character` class. Every `Digit` instance contains the methods and properties from the `Character` with the addition of:

**Methods:**

- `integerValue` - the `integerValue` method converts a numeric string character (located at the `.character` property) to a number data type. It will also update the isDigit property to `true` if the value was `false`.
  - **HINT**: There are various approaches to convert the string '1' to the number 1. The [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) function is a great option!

```js
const one = new Digit('1', 'Arial', 29);

one.drawCharacter(); // returns '1'; Note: '1' is a string.
one.integerValue();
one.drawCharacter(); // returns 1; Note: 1 is now a number type, not a string.
```


**Note: Class syntax should be used**
