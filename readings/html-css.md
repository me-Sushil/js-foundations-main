# HTML

HTML provides a way to mark text with HTML tags that provide the instructions to a web browser on how the page should be structured.

At this point in our lesson, we will not look too deeply into HTML. We just want to be familiar with

- tags and elements
- block vs inline elements
- attributes
  - class
  - id

## tags and elements

HTML consists of a series of `elements`, which you use to enclose, wrap, or mark up different parts of the content to make it appear or act a certain way.

- Every element has a `tag` that will denote it. For example, to show a large heading, we will write

```html
<h1>This is a large heading</h1>
```

Here `h1` is the `tag` that is used to create the `h1 element`, which starts from `<h1>` and ends in `</h1>`

- An element needs to have both a opening and closing tag, as in the `h1` element above, or some tags that do not need opening and closing are known as `self closing`; for example

```html
<input />
<img />
<hr />
```

- Elements can be nested in other elements; for example

```html
<div>
  <p>This is a paragraph element wrapped inside a div element</p>
  <p>This is another paragraph element wrapped inside a div element</p>
</div>
```

## block vs inline elements

HTML Elements are divided into two categories, [block-level](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements), and [inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements). These properties enforce certain rules of positioning of text and content.

BLOCK-LEVEL ELEMENTS: Block-level elements take up the full width of the document (web page) and "block out" elements to its left and right. These element spans the full width of the page. Some examples of block level elements are `<h1`>, `<p>`, `<div>`, `<form>`, `<li>`, `<ul>`, `<ol>` etc.

INLINE ELEMENTS: Inline elements stay on the same line and do not consume the available width, in other words, inline elements sit next to other inline elements. Some examples of inline elements are [image](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) `<img>`, `<span>` etc

## Attributes

HTML Elements can have additional information associated with them, called `attributes`. We've seen a few attributes, such as the `src` attribute in an image element and the `align` attribute in a division `(<div>)` element.

Attributes appear inside the opening tag of an element and their values sit inside quotation marks (or apostrophe), just like a string. Here is the generalized syntax of a tag with an attribute:

```html
<tag attributeName="the value"> CONTENT </tag>
```

There are a few common attributes common to all HTML elements, these are called [Global Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes). The most common global attributes are: `class`,`id`, `hidden`,`title`,`style`.

Two important attributes for javascript are

1. `class` attribute - `class` is like a last name; a group of elements that can share similar properties will be tagged with the same class attribute
2. `id` attribute - an `id` is like a first name; in any html document, one id can belong to only one element. An id denotes a unique identification to an element in an html document.

We will often use a `class` or `id` attribute in our javascript code to select an element, or group of elements, to interact with.

# CSS

We will not be focusing on CSS at this point of our lesson. To look at CSS in detail, please refer to [this lesson](https://web.dev/learn/css/) offered by
google. It gives a solid foundation for learning css.

For our purposes, please know that a CSS styling is associated to an HTML page by one of three identifiers

- the HTML tag
- the HTML `class` attribute
- the HTML `id` attribute

these identifies can come in combinations and multiples in a CSS file to target specific HTML elements
