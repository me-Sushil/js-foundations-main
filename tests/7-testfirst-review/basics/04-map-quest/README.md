### Map Quest

You are using an app called map quest to help you get to your destination. `mapQuest` accepts directions and suggestions from their user base, but sometimes, their user base doesn't suggest the best routes.

Here is what your directions may look like:

`['N', 'W', 'S', 'E', 'N']`

- 'N' - 'north'
- 'S' - 'south'
- 'E' - 'east'
- 'W' - 'west'

Sometimes the suggested directions have a lot of extra traveling, e.g.

`['N',S',E','W','N']`

The directions make you travel North, then immediately back South, leaving you right where you left off! Also, then you move East, then back West!

** Your task is to create the function `mapQuest` that removes adjacent redundant directions and create a better route**. For example, if these were the directions submitted by a user:

`['N', 'S', 'W', 'E', 'S']`

In this example, the suggestion to go 'N' then 'S' right away is a waste of time. Right after, you are instructed to go 'W' then 'E,' this is also a waste :); traveling 'S' is the most direct route. The value returned should be ['S'].

Here is another example:

`['S', 'N', 'N', 'E', 'W', 'S']`

- 'S' and 'N' are directly opposite of each other, so they are removed from the directions. (updates to `['N', 'E', 'W', 'S']`)
- 'N' and 'E' stays (for now)
- 'E' and 'W' are opposite of each other, so they are removed from the directions. (updates to `['N','S']`)
- Now, we need to compare what is left in the directions array. `['N','S']`
- 'N' and 'S' are opposite of each other, they are removed, and the remaining directions array is empty. updates to `[]`

The function `mapQuest` takes an array of strings and reduces the additional directional points in the array based on the logic described above.

```js
mapQuest(['S', 'N', 'N', 'W', 'E', 'S', 'E']); // returns ==> ['E']
mapQuest(['N', 'S', 'S', 'E', 'W', 'N']); // returns ==> []
```

### Topics

- `Array.prototype.reduce`
