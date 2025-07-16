# Pixelate

Today, we'll be building a small editor for making 8-bit art! You'll be able to re-create characters from all your favorite classic video games! Oh, and you'll also practice event handling and delegation, DOM manipulation, and some basic CSS.

## STARTING POINT

![Starting point](images/pixelate-01.png)

## ENDING POINT

![Ending point](images/pixelate-02.png)

## Familiarize yourself with starting point

Take a moment to examine the starting point. The most important file to check out is index.html - it contains HTML that our browser will use to construct the DOM, as well as link and script tags that cause the browser to request additional resources (we'll learn more about this process in the coming days).

In this exercise, you will work primarily out of index.html, style.css, and script.js. Take a moment to read through these files and see how their starting content relates to what you see when you navigate in your browser.

Note: To start this project, you can either run the `Live Server` extension in your VSCode, or run npm install, followed by npm start, which will start a small http server for the project (look at package.json to see which npm library is being used).

---

## Styling table cells

Our first task will be to get our grid of cells to appear.

An HTML table has three basic ingredients - the `<table>` tag, which contains a series of table rows (`<tr>`) as children, which in turn contain a series of table data cells (`<td>`). (There are other some others, but we won't worry too much about them today).

- In `index.html`, add the following HTML between the opening and closing `<table>` tags

```html
<tr>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
</tr>
```

If you refresh the page, you won't actually see any difference - this is because our `td` cells don't have any `style`! If you refer back to our goal, you'll see that what we want is for each `td` to have a light gray background color with dimensions of about 50x50 pixels.

- Add a CSS rule to `style.css` that will make each td look the way we want. You'll know you've succeeded if you see something like this:

  ![Start styling](images/pixelate-03.png)

<details><summary>To see hint: click to expand</summary>

```css
td {
  height: 50px;
  width: 50px;
  background-color: lightgray;
}
```

</details>

---

## Creating elements

Creating a new DOM element with JavaScript is a two step process:

1. First, you must create the new element using `document.createElement`
2. Second, you must append the element to its parent using `parentElement.appendChild(newElement)`
   For example, to add a new li to a ul, we might do something like this:

```js
const ul = document.querySelector("#the-ul");
const newLi = document.createElement("li");
ul.appendChild(newLi);
```

Rather than hard-code a certain number of table rows in our HTML, let's create them dynamically using JavaScript!

- In `index.html`, remove the `<tr>` and `<td>` elements that you added in the previous step
- In `script.js`:
  - Select the `table` DOM element and store it in a variable
  - Write a function called `makeRow`
  - Your `makeRow` function should create a new `tr` element. It should create and append some number of new `td` elements to the `tr` (the example uses 20), and then append the `tr` element to the `table` element
  - Invoke the `makeRow` function several times

Check it out by refreshing the page - you should see a new row of cells for each time you invoked `makeRow`!

<details><summary>To see hint: click to expand</summary>

```js
const table = document.querySelector("table");

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}

makeRow();
makeRow();
```

</details>

---

## Making rows

Now that we have a convenient function for creating rows, let's make it so that users can add rows themselves when they click that "Add Row" button!

In `script.js`:

- Select the "add row" button's DOM element and store it in a variable
- Attach an event listener to the "add row" button - whenever the "add row" button is clicked, we want to fire the `makeRow` function

Refresh the page to try it out - you should be able to add as many rows as your heart desires!

<details><summary>To see hint: click to expand</summary>

```js
const button = document.querySelector("#add-row");
button.addEventListener("click", makeRow);
```

</details>

---

## Color classes

Our next task will be to make it so that clicking on a cell will toggle its color (we'll just deal with one color for now).

We'll determine a cell's color by the presence or absence of a CSS class.

A common (and easy-to-read) way to do this might be to make several CSS classes that correspond to the color(s) we want.

For example, a CSS class to give an element a red background color might be:

```css
.red {
  background-color: red;
}
```

- Add several CSS classes like the one above to your `style.css`. Feel free to choose your favorite colors.

---

## Event delegation

We want to execute a JavaScript function every time a `<td>` cell is clicked. Does this mean we need to go through and add an event listener to every `<td>` element?

No! We can use event delegation. We'll attach the event listener to a parent element. When the child element is clicked, the event will "bubble up" to the parent and execute the parent's event handler.

Determine which element to attach the event listener to. This should be the common ancestor of every `<td>` element

<details><summary>To see hint: click to expand</summary>

```
The table element makes the most sense! If we went with tr, we would need to attach it to every tr.
```

</details>

- Write a function called `colorize` and attach it as the click handler for the parent element. For now, simply log out the string `"clicked!"` - we'll deal with adding color in the next step

Try it out by refreshing and opening your browser's dev tools. Add some cells and click them - you should see `"clicked!"` logged to the console!

<details><summary>To see hint: click to expand</summary>

```js
table.addEventListener("click", colorize);

function colorize(event) {
  console.log("clicked");
}
```

</details>

---

## Event target

Now that we can fire a click handler, it's time to change the color of our `td` cells!

Because we're representing our colors as CSS classes, we can change the appearance of the DOM by mutating the `className` property on the selected DOM node.

For example:

```js
tdCell.className = "red"; // gives this DOM node the 'red' class
```

All we need to do is get the appropriate DOM node. Fortunately, we can find it on the `event` object that our event handler receives! In any event handler, `event.target` will be a reference to the actual DOM node that was clicked (which is not necessarily the DOM node to which we've attached the event listener).

In our event handler (that is, the `colorize` function),

- If your `colorize` function does not yet list the event as a parameter, add it now
- Obtain the target that was clicked from `event.target`
- If the target DOM node does not currently have a `className`, set it equal to one of your colors (to toggle it on)
- If the target DOM node already has a `className`, set it equal to an empty string (to toggle it off)

<details><summary>To see hint: click to expand</summary>

```js
function colorize(event) {
  const target = event.target;
  if (target.className.length) {
    target.className = "";
  } else {
    target.className = "red";
  }
}
```

</details>

Try it out - if clicking a cell causes that cell's color to change, you'll know that you've achieved your goal.

---

## Change event

Last but not least, let's make it so that we can pick from a variety of colors! To do this, we'll take advantage of that `<select>` element and the `"change"` event it fires whenever we select something.

- In `index.html`, add an `<option>` tag for each CSS color class from your `style.css`
- For example, if we wanted to choose between red and blue:

```css
<select>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
</select>
```

Don't forget to include the `value` property! You want the value to match the names of your CSS class names, which should be lowercase. However, the way the options present themselves to the user should be capitalized!

- In your `script.js`, grab the select element from the DOM and attach an event listener for the `"change"` event. Give it a callback function that expects to receive the event as an argument, and then console logs `event.target.value`.

Try it out by refreshing the page and opening your browser's dev tools. Every time you pick something from the `select` field, you should see that option's value logged to the console.

---

## Choosing a color

Now that we can choose a color, our JavaScript app needs some notion of a "chosen color". We want to put aside whatever color has been chosen by the user, and then change the cells that we click to be that color.

Try to figure it out! The first hint below will suggest an approach if you get stuck.

<details><summary>To see hint: click to expand</summary>

```
You could simply store the selected color in a variable, and reassign that variable every time someone changes the color.

Make sure to give it some default value, as well (ideally, this should match the first option in your select).
```

</details>

You'll know you've succeeded when you can successfully change colors. You may find a quirk occurs when trying to "paint over" an existing color - we'll address this in the next section!

<details><summary>To see hint: click to expand</summary>

```js
let chosenColor = "red";

select.addEventListener("change", function (event) {
  chosenColor = event.target.value;
});

function colorize(event) {
  const target = event.target;
  if (target.className.length) {
    target.className = "";
  } else {
    target.className = chosenColor;
  }
}
```

</details>

---

## Toggling colors

We're almost there, but there may be a bug that occurs when you try to "paint over" an existing color. If you

1. Color a cell one color (let's say "red"), then
2. switch to a different color (let's say "blue"), and then
3. click the red cell to make it blue, what actually happens is the cell goes back to being gray!

Try to solve this bug to complete your creation! Here's our expected behavior:

- If you click a gray cell, it should turn the currently chosen color
- If you click a colored cell, and that cell's color is the currently chosen color, the cell should go back to being gray
- If you click a colored cell, and that cell's color is different than the currently chosen color, the cell should turn the currently chosen color

The hint below will offer a hint if you want more guidance. Good luck!

<details><summary>Approach - to see hint: click to expand</summary>

```
This problem is occurring because the logic in our `colorize` function is too simplistic - it only accounts for turning a color off/on based on whether there is a `className`. We need to actually check out the `className`'s value and make a decision about how to change it based on how it compares with the chosen color.
```

</details>

<details><summary>To see hint: click to expand</summary>

```js
function colorize(event) {
  const target = event.target;
  if (target.className === chosenColor) {
    target.className = "";
  } else {
    target.className = chosenColor;
  }
}
```

</details>

---

# Extra credit

## Finishing touches

There's a finicky little issue that could happen if someone clicks the space between the table cells - we might end up coloring the `tr` or `table` in the background! We should be a bit more deliberate and make sure that we only change the background color of the target element if that target element is a `'td'` element.

How can we tell what kind of element the event target is?

<details><summary>To see hint: click to expand</summary>

```
Try checking out event.target.tagName
```

</details>

---

## Dragging to paint

It can be tiresome to have to click each cell individually. Try to make it so that dragging the mouse over cells will `"paint"` them the specified color! You'll take advantage of `"mouseup"`, `"mousedown"` events, as well as the `"mouseover"` event.

---

## Additional paint tools

Trick out your editor by adding some common utilities! Here are some suggestions:

- Add the ability to fill the whole grid with one color
- Add the ability to fill any non-colored cells with one color
- Add the ability to clear the grid
- Add controls for the user to adjust the number of columns
- Add controls for the user add/remove rows and columns
