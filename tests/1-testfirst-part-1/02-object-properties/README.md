### 02-Object-Properties

<hr>

### Overview

One of the most useful `data types` in JavaScript to store values is an Object. Objects use key/value pairs (in JS the `key` is called a `property`) to access and store values.

Often, you will hear that `Arrays` and `Functions` are special object types. The following Test Specs will demonstrate how `Arrays` and `Functions` have the same characteristics as an Object Literal, since `Arrays` and `Functions` are Objects.
const userProfile = {
  firstName: "Alex",          // Key: firstName, Value: "Alex" (String)
  age: 28,                    // Key: age,       Value: 28 (Number)
  isSubscribed: true,         // Key: isSubscribed, Value: true (Boolean)
  hobbies: ["cycling", "git"] // Key: hobbies,   Value: Array
};
