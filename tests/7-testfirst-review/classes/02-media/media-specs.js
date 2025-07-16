/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('Media', () => {
  let mediaInstance;
  beforeEach(() => {
    /* Note: You should use Class syntax to create the Media Class */
    mediaInstance = new Media('Example Title', 2004);
  });

  it('Media is a class', () => {
    // Are you not sure what the "instanceof" operator tests? Check the docs here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
    expect(mediaInstance instanceof Media).toBe(true);
  });

  it('an instance of the Media class has the following properties: `title`, `ratings`, `yearOfRelease`', () => {
    expect(mediaInstance.title).toBe('Example Title');
    expect(mediaInstance.yearOfRelease).toBe(2004);
    expect(mediaInstance.ratings).toEqual([]);

    /*
      Note: Object.keys is passed the instance created by the Media class. Object.keys() returns an array of key names.
      The sort method is used on the array so the strings within the array are in the same order.
    */
    expect(Object.keys(mediaInstance).sort()).toEqual(
      ['title', 'ratings', 'yearOfRelease'].sort()
    );
  });

  it('contains the following class methods: `getTitle`, `getYearOfRelease`, `getAverageRating`, `addRating`', () => {
    expect(mediaInstance.getTitle).toEqual(Media.prototype.getTitle);
    expect(mediaInstance.getYearOfRelease).toEqual(
      Media.prototype.getYearOfRelease
    );
    expect(mediaInstance.addRating).toEqual(Media.prototype.addRating);
    expect(mediaInstance.getAverageRating).toEqual(
      Media.prototype.getAverageRating
    );
  });

  it('the `getTitle` method returns the title value', () => {
    expect(mediaInstance.getTitle()).toBe('Example Title');
  });

  it('the `getYearOfRelease` method returns the yearOfRelease value', () => {
    expect(mediaInstance.getYearOfRelease()).toBe(2004);
  });

  it('the `addRating` method adds a rating to the ratings array, it is a rating of 0-100', () => {
    mediaInstance.addRating(100);
    mediaInstance.addRating(55);
    mediaInstance.addRating(90);
    mediaInstance.addRating(83);

    // Note: When a rating is added, the rating is inserted into the end of the array
    expect(mediaInstance.ratings).toEqual([100, 55, 90, 83]);
  });

  it('the rating must be between 1-100', () => {
    expect(mediaInstance.addRating(150)).toBe(
      '150 is not a valid rating, ratings must be 1-100'
    );
    expect(mediaInstance.ratings).toEqual([]);

    expect(mediaInstance.addRating(-1)).toBe(
      '-1 is not a valid rating, ratings must be 1-100'
    );
    expect(mediaInstance.ratings).toEqual([]);
  });

  it('the `getAverageRating` method returns the average of all the ratings', () => {
    mediaInstance.addRating(22);
    mediaInstance.addRating(88);
    mediaInstance.addRating(92);
    mediaInstance.addRating(100);
    mediaInstance.addRating(67);
    mediaInstance.addRating(93);

    expect(mediaInstance.getAverageRating()).toBe(77);
  });

  it('the `getAverageRating` method uses the `reduce` method to calculate the average rating', () => {
    spyOn(Array.prototype, 'reduce').and.callThrough();

    mediaInstance.addRating(100);
    mediaInstance.addRating(55);
    mediaInstance.addRating(90);
    mediaInstance.addRating(83);

    expect(mediaInstance.getAverageRating()).toBe(82);
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });

  it("if there aren't any ratings, return the string 'this is not rated'", () => {
    expect(mediaInstance.getAverageRating()).toBe('this is not rated');
  });
});

describe('Album', () => {
  let beatlesAlbum;
  beforeEach(() => {
    beatlesAlbum = new Album('Abbey Road', 1969, 'The Beatles', [
      'Come Together',
      'Something',
      "Maxwell's Silver Hammer",
      'Oh! Darling',
      "Octopus's Garden",
      'Here Comes the Sun',
    ]);
  });
  it('is a sublclass (extension) of the Media Class', () => {
    expect(beatlesAlbum instanceof Media).toBe(true);

    expect(beatlesAlbum.title).toBe('Abbey Road');
    expect(beatlesAlbum.yearOfRelease).toBe(1969);
    expect(beatlesAlbum.ratings).toEqual([]);
  });
  it('in addition to the properties created from the Media class, an Album instance has the following properties: `artist`, `tracks`', () => {
    expect(beatlesAlbum.artist).toBe('The Beatles');
    expect(beatlesAlbum.tracks).toEqual([
      'Come Together',
      'Something',
      "Maxwell's Silver Hammer",
      'Oh! Darling',
      "Octopus's Garden",
      'Here Comes the Sun',
    ]);
  });

  it('has access to the Media class methods', () => {
    expect(beatlesAlbum.getTitle()).toBe('Abbey Road');
    expect(beatlesAlbum.getYearOfRelease()).toBe(1969);
    expect(beatlesAlbum.getAverageRating()).toBe('this is not rated');
  });
});

describe('Movie', () => {
  let avatar;
  beforeEach(() => {
    avatar = new Movie('Avatar', 2009, 'James Cameron', 162);
  });
  it('Movie is a sublclass (extension) of the Media class', () => {
    expect(avatar instanceof Media).toBe(true);

    expect(avatar.title).toBe('Avatar');
    expect(avatar.yearOfRelease).toBe(2009);
    expect(avatar.ratings).toEqual([]);
  });
  it('in addition to the properties created from extending the Media class, a Movie instance has the following properties: `director`, `runTime`', () => {
    expect(avatar.director).toBe('James Cameron');
    expect(avatar.runTime).toBe(162);
  });

  it('has access to the Media class methods', () => {
    expect(avatar.getTitle()).toBe('Avatar');
    expect(avatar.getYearOfRelease()).toBe(2009);
    expect(avatar.getAverageRating()).toBe('this is not rated');
  });
});

describe('Book', () => {
  let hamlet;
  beforeEach(() => {
    hamlet = new Book('Hamlet', 1603, 'William Shakespeare', 600);
  });
  it('is a sublclass (extension) of the Media class', () => {
    expect(hamlet instanceof Media).toBe(true);

    expect(hamlet.title).toBe('Hamlet');
    expect(hamlet.yearOfRelease).toBe(1603);
    expect(hamlet.ratings).toEqual([]);
  });
  it('in addition to the properties created from the Media class, a Book instance has the following properties: `author`, `pages`', () => {
    expect(hamlet.author).toBe('William Shakespeare');
    expect(hamlet.pages).toBe(600);
  });

  it('has access to all the Media class methods', () => {
    expect(hamlet.getTitle()).toBe('Hamlet');
    expect(hamlet.getYearOfRelease()).toBe(1603);
    expect(hamlet.getAverageRating()).toBe('this is not rated');
  });
});
