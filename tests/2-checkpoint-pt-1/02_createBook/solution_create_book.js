// /* eslint-disable no-unused-vars, no-prototype-builtins */
// Shared prototype with all methods
const bookPrototype = {
  getInfo() {
    return `${this.title} by ${this.author}`;
  },
  getPrice() {
    return this.price;
  },
  addRating(stars) {
    this.rating.push(stars);
  },
  getRating() {
    if (this.rating.length === 0) return 0;
    let total = 0;
    for (let starStr of this.rating) {
      total += starStr.length;
    }
    return total / this.rating.length;
  }
};

// Factory function to create a book instance
function createBook(id, title, author, price) {
  const book = Object.create(bookPrototype);
  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];
  return book;
}
