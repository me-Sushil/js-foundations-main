### Pig Latin

<hr>

### Description

Pig Latin is a made-up children's language that's intended to be confusing. It obeys a few simple rules (below) but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.

- Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.
- Rule 2: If a word begins with a consonant sound, move the consonant to the end of the word. Then finish by adding an "ay" sound to the end of the word.

(There are a few more rules for edge cases, and there are regional variants too, but that should be enough to understand the tests.)

See <http://en.wikipedia.org/wiki/Pig_latin> for more details.

### Topics

- String Manipulation
- Loops
- Fundamental JavaSript Concepts (this doesn't mean the algorithm is simple, this can get tricky, Keep It Simple!)

### Tips:

- Don't overcomplicate the problem. Regular Expressions are not covered in Foundations. Even though a RegEx (Regular Expression) is useful, you don't "need" to use one to solve the problem. Learning Regular Rexpressions is like learning a new language. If you have familiarity with them great! If not, do not be concerned. Leverage the `.includes` or `.indexOf` methods to validate if a string has a specific character.

- The case for `'qu'` can be tricky. Here is a tip, if the vowel is a `'u'` and the preceeding character is not a `'q'`, `'u'` is considered a valid 'vowel'.
