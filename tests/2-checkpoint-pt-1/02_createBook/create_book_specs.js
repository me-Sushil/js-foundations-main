/* eslint-env jasmine */
/* eslint-disable no-undef, no-prototype-builtins */

describe('createBook', () => {
  it('`createBook` is a function', () => {
    expect(typeof createBook).toBe('function');
  });

  it('`createBook` returns an object (instance) ', () => {
    const book = createBook();
    expect(typeof book).toBe('object');
  });

  it('every instance has an id, title, author, price and rating property', () => {
    const book = createBook(1, 'Catch 22', 'Joseph Heller', 19.99);
    expect(book.id).toBe(1);
    expect(book.title).toBe('Catch 22');
    expect(book.author).toBe('Joseph Heller');
    expect(book.price).toBe(19.99);
    expect(book.rating).toEqual([]);
  });

  it('every instance has an id, title, author, price, and rating property attached to the instance', () => {
    const book = createBook(1, 'Catch 22', 'Joseph Heller', 19.99);
    expect(book.hasOwnProperty('id')).toBe(true);
    expect(book.hasOwnProperty('title')).toBe(true);
    expect(book.hasOwnProperty('author')).toBe(true);
    expect(book.hasOwnProperty('price')).toBe(true);
    expect(book.hasOwnProperty('rating')).toBe(true);
  });

  it('the `getPrice` method returns the price of the book', () => {
    const theCatInTheHat = createBook(
      3,
      'The Cat in the Hat',
      'Dr. Seuss',
      1.99
    );
    expect(typeof theCatInTheHat.getPrice()).toBe('number');
    expect(theCatInTheHat.getPrice()).toBe(1.99);
  });

  it('the `getInfo` method returns the title and author', () => {
    const goodnightMoon = createBook(
      2,
      'Goodnight Moon',
      'Margaret Wise Brown',
      14.99
    );
    expect(typeof goodnightMoon.getInfo()).toBe('string');
    expect(goodnightMoon.getInfo()).toBe(
      'Goodnight Moon by Margaret Wise Brown'
    );
  });

  it('the `addRating` method adds the rating to the rating property', () => {
    const catchTwentyTwo = createBook(1, 'Catch 22', 'Joseph Heller', 19.99);
    const goodnightMoon = createBook(
      2,
      'Goodnight Moon',
      'Margaret Wise Brown',
      14.99
    );

    catchTwentyTwo.addRating('*****');
    expect(catchTwentyTwo.rating).toEqual(['*****']);

    goodnightMoon.addRating('*****');
    goodnightMoon.addRating('***');
    goodnightMoon.addRating('*');
    goodnightMoon.addRating('****');
    goodnightMoon.addRating('**');

    expect(goodnightMoon.rating).toEqual(['*****', '***', '*', '****', '**']);
  });

  it('the `getRating` method returns the average rating', () => {
    const lordOfTheFlies = createBook(
      4,
      'Lord of the Flies',
      'William Golding',
      22.99
    );
    const toKillaMockingBird = createBook(
      5,
      'To Kill A Mocking Bird',
      'Harper Lee',
      17.99
    );

    lordOfTheFlies.addRating('*****');
    expect(lordOfTheFlies.getRating()).toBe(5);

    toKillaMockingBird.addRating('*****');
    toKillaMockingBird.addRating('***');
    toKillaMockingBird.addRating('*');
    toKillaMockingBird.addRating('****');
    toKillaMockingBird.addRating('**');

    expect(toKillaMockingBird.getRating()).toBe(3);
  });

  it("the `getInfo`, `getPrice`, `addRating`, and `getRating` methods are only accessible via the instances' prototype chain", () => {
    const treasureIsland = createBook(
      6,
      'Treasure Island',
      'Robert Louis Stevenson',
      18.99
    );

    expect(treasureIsland.hasOwnProperty('getInfo')).toBe(false);
    expect(treasureIsland.hasOwnProperty('getPrice')).toBe(false);
    expect(treasureIsland.hasOwnProperty('addRating')).toBe(false);
    expect(treasureIsland.hasOwnProperty('getRating')).toBe(false);
  });

  it('`createBook` creates an instance using `Object.create` within the `createBook` function', () => {
    spyOn(Object, 'create').and.callThrough();
    const moonfleet = createBook(7, 'Moonfleet', 'J. Meade Falkner', 12.99);
    const catchTwentyTwo = createBook(1, 'Catch 22', 'Joseph Heller', 19.99);

    expect(Object.create.calls.count()).toBe(2);
  });
});
