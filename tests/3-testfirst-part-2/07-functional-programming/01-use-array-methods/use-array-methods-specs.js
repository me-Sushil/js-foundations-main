/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('using map', () => {
  describe('indexAndValue', () => {
    it('create the function indexAndValue that returns an array', () => {
      expect(Array.isArray(indexAndValue([22, 33, 44, 55]))).toBe(true);
    });

    it('the array returned contains objects ', () => {
      const arrayOfObjects = indexAndValue([22, 33, 44, 55]);
      // Note: .every returns true if every value in the array passes the condition, in this example it is checking that each
      // value in the array is an object
      const objects = arrayOfObjects.every((obj) => typeof obj === 'object');

      expect(objects).toBe(true);
      expect(arrayOfObjects.length).toBe(4);
    });

    it('adds `value` and `index` properties to the object created for each index value in the array', () => {
      const arrayReturned = indexAndValue([22]);

      expect(arrayReturned.length).toBe(1);
      expect(arrayReturned[0]).toEqual({ index: 0, value: 22 });
      expect(arrayReturned).toEqual([{ index: 0, value: 22 }]);
    });

    it('creates an object with value and index properties for multiple values in the array', () => {
      expect(indexAndValue([22, 33, 44, 55])).toEqual([
        { index: 0, value: 22 },
        { index: 1, value: 33 },
        { index: 2, value: 44 },
        { index: 3, value: 55 },
      ]);
    });

    it('indexAndValue calls Array.prototype.map', () => {
      spyOn(Array.prototype, 'map').and.callThrough();
      expect(indexAndValue(['hurricane', 'tornado', 'typhoon'])).toEqual([
        { index: 0, value: 'hurricane' },
        { index: 1, value: 'tornado' },
        { index: 2, value: 'typhoon' },
      ]);

      expect(Array.prototype.map).toHaveBeenCalled();
    });
  });

  describe('swapCase each word in an array of words', () => {
    it('create the method capitalize that takes a string and capitalizes the string', () => {
      expect(capitalize('hello world')).toBe('HELLO WORLD');
      expect(capitalize('i need coffee')).toBe('I NEED COFFEE');
      expect(capitalize('daydream')).toBe('DAYDREAM');
    });

    it('the swapCase functions uses Array.prototype.map and calls the capitalize function on every other word', () => {
      // HINT: the optional parameter "index" of the callback function may be handy :) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Syntax
      expect(swapCase('i am going to the movies today')).toBe(
        'I am GOING to THE movies TODAY'
      );
      expect(swapCase('i need to get my 10,000 steps in!')).toBe(
        'I need TO get MY 10,000 STEPS in!'
      );
    });

    it('swapCase calls Array.prototype.map (the map method)', () => {
      spyOn(Array.prototype, 'map').and.callThrough();

      swapCase('i won free tickets to ...');

      expect(Array.prototype.map).toHaveBeenCalled();
    });
  });
});

describe('using filter', () => {
  describe('extensionSearch', () => {
    it('returns an array', () => {
      expect(
        Array.isArray(
          extensionSearch('txt', [
            'hello.txt',
            'hello.png',
            'hell.csv',
            'mlb.txt',
            'mls.png',
          ])
        )
      ).toBe(true);
    });

    it('returns every file that matches the extension type passed as the first argument', () => {
      expect(
        extensionSearch('txt', [
          'hello.txt',
          'hello.png',
          'hello.csv',
          'mlb.txt',
          'mls.png',
        ])
      ).toEqual(['hello.txt', 'mlb.txt']);
    });

    it('calls Array.prototype.filter', () => {
      spyOn(Array.prototype, 'filter').and.callThrough();

      expect(
        extensionSearch('csv', [
          'groceries.csv',
          'todos.csv',
          'songs.txt',
          'picture01.png',
        ])
      ).toEqual(['groceries.csv', 'todos.csv']);

      expect(Array.prototype.filter).toHaveBeenCalled();
    });
  });
});

describe('using reduce', () => {
  describe('getPopulation', () => {
    const arrayOfCountries = [
      { name: 'China', population: 1386395000 },
      { name: 'Costa Rica', population: 4905000 },
      { name: 'Brazil', population: 209288000 },
      { name: 'France', population: 67118000 },
      { name: 'Germany', population: 82695000 },
      { name: 'Finland', population: 5511300 },
      { name: 'Canada', population: 36290000 },
      { name: 'United States', population: 325700000 },
    ];
    it('returns a number', () => {
      const population = getPopulation(arrayOfCountries, [
        'Brazil',
        'United States',
        'Costa Rica',
      ]);
      expect(typeof population).toBe('number');
    });

    it('adds the population of all the countries included in the second argument array', () => {
      expect(getPopulation(arrayOfCountries, ['Finland'])).toBe(5511300);
      expect(getPopulation(arrayOfCountries, ['Canada', 'Germany'])).toBe(
        118985000
      );
      expect(
        getPopulation(arrayOfCountries, [
          'Brazil',
          'United States',
          'Costa Rica',
        ])
      ).toBe(539893000);

      // If the second argument is an empty array ([]) as it is below, add the population off all the countries from the first argument
      expect(getPopulation(arrayOfCountries, [])).toBe(2117902300); // the number returned is the total population of all the countries in the arrayOfCountries array.
    });

    it('calls Array.prototype.reduce', () => {
      spyOn(Array.prototype, 'reduce').and.callThrough();
      expect(getPopulation(arrayOfCountries, ['China'])).toBe(1386395000);
      expect(Array.prototype.reduce).toHaveBeenCalled();
    });
  });

  describe('action hero reduce functions', () => {
    const superheroes = [
      {
        name: 'Bruce Wayne',
        alias: 'Batman',
        powerLevel: 50,
        universe: 'DC Comics',
        race: 'Human',
      },
      {
        name: 'Wade Wilson',
        alias: 'Deadpool',
        powerLevel: 90,
        universe: 'Marvel Comics',
        race: 'Mutant',
      },
      {
        name: 'Peter Parker',
        alias: 'Spiderman',
        powerLevel: 70,
        universe: 'Marvel Comics',
        race: 'Human',
      },
      {
        name: 'Kristin Wells',
        alias: 'Superwoman',
        powerLevel: 99,
        universe: 'DC Comics',
        race: 'Kryptonian',
      },
      {
        name: 'Barry Allen',
        alias: 'The Flash',
        powerLevel: 80,
        universe: 'DC Comics',
        race: 'Human',
      },
      {
        name: 'Diana Prince',
        alias: 'Wonder Woman',
        powerLevel: 90,
        universe: 'DC Comics',
        race: 'Human',
      },
      {
        name: 'Ororo Munroe',
        alias: 'Storm',
        powerLevel: 85,
        universe: 'Marvel Comics',
        race: 'Mutant',
      },
      {
        name: 'Helen Parr',
        alias: 'Elastigirl',
        powerLevel: 70,
        universe: 'Dark Horse Comics',
        race: 'Human',
      },
    ];
    describe('refactor superheroes', () => {
      it('keyifyArrayOfObjects refactors the superheroes array to an object with the alias as the property(keys) and the value is the superhero object that has that alias', () => {
        const superheroesObject = keyifyArrayOfObjects('alias', superheroes);
        const expectedSuperheroesObject = {
          Batman: {
            name: 'Bruce Wayne',
            alias: 'Batman',
            powerLevel: 50,
            universe: 'DC Comics',
            race: 'Human',
          },
          Deadpool: {
            name: 'Wade Wilson',
            alias: 'Deadpool',
            powerLevel: 90,
            universe: 'Marvel Comics',
            race: 'Mutant',
          },
          Spiderman: {
            name: 'Peter Parker',
            alias: 'Spiderman',
            powerLevel: 70,
            universe: 'Marvel Comics',
            race: 'Human',
          },
          Superwoman: {
            name: 'Kristin Wells',
            alias: 'Superwoman',
            powerLevel: 99,
            universe: 'DC Comics',
            race: 'Kryptonian',
          },
          'The Flash': {
            name: 'Barry Allen',
            alias: 'The Flash',
            powerLevel: 80,
            universe: 'DC Comics',
            race: 'Human',
          },
          'Wonder Woman': {
            name: 'Diana Prince',
            alias: 'Wonder Woman',
            powerLevel: 90,
            universe: 'DC Comics',
            race: 'Human',
          },
          Storm: {
            name: 'Ororo Munroe',
            alias: 'Storm',
            powerLevel: 85,
            universe: 'Marvel Comics',
            race: 'Mutant',
          },
          Elastigirl: {
            name: 'Helen Parr',
            alias: 'Elastigirl',
            powerLevel: 70,
            universe: 'Dark Horse Comics',
            race: 'Human',
          },
        };
        expect(superheroesObject).toEqual(expectedSuperheroesObject);
      });
      it('uses the Array.prototype.reduce method', () => {
        spyOn(Array.prototype, 'reduce').and.callThrough();
        keyifyArrayOfObjects('alias', superheroes);
        expect(Array.prototype.reduce).toHaveBeenCalled();
      });
    });
    describe('powerLevelAverage', () => {
      it('returns a number value', () => {
        const averagePowerLevel = powerLevelAverage(superheroes);
        expect(typeof averagePowerLevel).toBe('number');
      });
      it('given an array of superheroes, return the average power level rounded to the nearest integer', () => {
        /* Hint: Math.round() may be useful :) */
        const averagePowerLevel = powerLevelAverage(superheroes);
        expect(averagePowerLevel).toBe(79);
      });
      it('works with arrays of various sizes', () => {
        const superheroesObject = keyifyArrayOfObjects('alias', superheroes); // note - this method was created in the previous test suite
        const arrayOfSuperheroes = [
          superheroesObject['Elastigirl'],
          superheroesObject['Storm'],
          superheroesObject['The Flash'],
        ];
        const averagePowerLevel = powerLevelAverage(arrayOfSuperheroes);

        expect(averagePowerLevel).toBe(78);
      });
      it('calls the Array.prototype.reduce method and does NOT call Array.prototype.map', () => {
        spyOn(Array.prototype, 'reduce').and.callThrough();
        spyOn(Array.prototype, 'map').and.callThrough();
        powerLevelAverage(superheroes);

        expect(Array.prototype.reduce).toHaveBeenCalled();
        expect(Array.prototype.map.calls.count()).toBe(0);
      });
    });

    describe('recreate map using reduce', () => {
      it('returns an array', () => {
        const mappedArray = mapReduce([1, 2, 3], (val) => {
          return val * 2;
        });
        expect(Array.isArray(mappedArray)).toBe(true);
      });

      it('returns a mapped array (it applies the function argument to every value in the array and returns a new array)', () => {
        const mappedArray = mapReduce([1, 2, 3], (val) => {
          return val * 2;
        });
        expect(mappedArray).toEqual([2, 4, 6]);

        expect(
          mapReduce(['jupiter', 'pluto', 'mars', 'sun', 'earth'], (val) => {
            return val.toUpperCase();
          })
        ).toEqual(['JUPITER', 'PLUTO', 'MARS', 'SUN', 'EARTH']);
      });

      it('mapReduce uses Array.prototype.reduce and do NOT use Array.prototype.map', () => {
        spyOn(Array.prototype, 'reduce').and.callThrough();
        spyOn(Array.prototype, 'map').and.callThrough();
        expect(
          mapReduce([true, false, true, true], (boolean) => {
            return !boolean;
          })
        ).toEqual([false, true, false, false]);

        expect(Array.prototype.reduce).toHaveBeenCalled();
        expect(Array.prototype.map.calls.count()).toBe(0);
      });
    });

    describe('recreate filter using reduce', () => {
      it('returns an array', () => {
        const filteredArray = filterReduce([1, 2, 3], (val) => {
          return val <= 2;
        });
        expect(Array.isArray(filteredArray)).toBe(true);
      });

      it('returns a filtered array', () => {
        const filteredArray = filterReduce([1, 2, 3], (val) => {
          return val <= 2;
        });
        expect(filteredArray).toEqual([1, 2]);

        expect(
          filterReduce(['steel', 'bronze', 'silver', 'iron'], (val) => {
            return val.length >= 6;
          })
        ).toEqual(['bronze', 'silver']);
      });

      it('filterReduce uses Array.prototype.reduce and does not use Array.prototype.filter', () => {
        spyOn(Array.prototype, 'reduce').and.callThrough();
        spyOn(Array.prototype, 'filter').and.callThrough();

        expect(
          filterReduce([true, false, true, false], (boolean) => {
            return boolean === false;
          })
        ).toEqual([false, false]);

        expect(Array.prototype.reduce).toHaveBeenCalled();
        expect(Array.prototype.filter.calls.count()).toBe(0);
      });
    });
  });

  describe('method chaining', () => {
    describe('inYourBudget', () => {
      it('returns an array', () => {
        const valueReturned = inYourBudget(100, [
          { item: 'tv', price: 499 },
          { item: 'monitor', price: 99 },
        ]);
        expect(Array.isArray(valueReturned)).toBe(true);
      });
      it('takes a maximum item price and a list of items with prices and returns each item that matches or is less than the max item price', () => {
        expect(
          inYourBudget(100, [
            { item: 'tv', price: 499 },
            { item: 'monitor', price: 99 },
          ])
        ).toEqual(['monitor']);

        expect(
          inYourBudget(39, [
            { item: 'groceries', price: 19 },
            { item: 'dvd', price: 29 },
            { item: 'concert-tickets', price: 199 },
            { item: 'parking-ticket', price: 35 },
            { item: 'tv-subscription', price: 33 },
            { item: 'clothes', price: 200 },
          ])
        ).toEqual(['groceries', 'dvd', 'parking-ticket', 'tv-subscription']);
      });

      it('calls Array.prototype.filter and Array.prototype.map', () => {
        spyOn(Array.prototype, 'map').and.callThrough();
        spyOn(Array.prototype, 'filter').and.callThrough();
        inYourBudget(88, [{ item: 'textbooks', price: 2000000000000 }]);

        expect(Array.prototype.filter).toHaveBeenCalled();
        expect(Array.prototype.map).toHaveBeenCalled();
      });
    });
    describe('separateAndReturnNames', () => {
      let superheroes;
      beforeEach(() => {
        superheroes = [
          {
            name: 'Bruce Wayne',
            alias: 'Batman',
            powerLevel: 50,
            universe: 'DC Comics',
            race: 'Human',
          },
          {
            name: 'Wade Wilson',
            alias: 'Deadpool',
            powerLevel: 90,
            universe: 'Marvel Comics',
            race: 'Mutant',
          },
          {
            name: 'Peter Parker',
            alias: 'Spiderman',
            powerLevel: 70,
            universe: 'Marvel Comics',
            race: 'Human',
          },
          {
            name: 'Kristin Wells',
            alias: 'Superwoman',
            powerLevel: 99,
            universe: 'DC Comics',
            race: 'Kryptonian',
          },
          {
            name: 'Barry Allen',
            alias: 'The Flash',
            powerLevel: 80,
            universe: 'DC Comics',
            race: 'Human',
          },
          {
            name: 'Diana Prince',
            alias: 'Wonder Woman',
            powerLevel: 90,
            universe: 'DC Comics',
            race: 'Human',
          },
          {
            name: 'Ororo Munroe',
            alias: 'Storm',
            powerLevel: 85,
            universe: 'Marvel Comics',
            race: 'Mutant',
          },
          {
            name: 'Helen Parr',
            alias: 'Elastigirl',
            powerLevel: 70,
            universe: 'Dark Horse Comics',
            race: 'Human',
          },
        ];
      });
      it('separates the name property and creates "firstName" and "lastName" properties', () => {
        separateAndReturnNames(superheroes, 'lastName', 5);
        expect(superheroes).toEqual(
          (superheroes = [
            {
              name: 'Bruce Wayne',
              firstName: 'Bruce',
              lastName: 'Wayne',
              alias: 'Batman',
              powerLevel: 50,
              universe: 'DC Comics',
              race: 'Human',
            },
            {
              name: 'Wade Wilson',
              firstName: 'Wade',
              lastName: 'Wilson',
              alias: 'Deadpool',
              powerLevel: 90,
              universe: 'Marvel Comics',
              race: 'Mutant',
            },
            {
              name: 'Peter Parker',
              firstName: 'Peter',
              lastName: 'Parker',
              alias: 'Spiderman',
              powerLevel: 70,
              universe: 'Marvel Comics',
              race: 'Human',
            },
            {
              name: 'Kristin Wells',
              firstName: 'Kristin',
              lastName: 'Wells',
              alias: 'Superwoman',
              powerLevel: 99,
              universe: 'DC Comics',
              race: 'Kryptonian',
            },
            {
              name: 'Barry Allen',
              firstName: 'Barry',
              lastName: 'Allen',
              alias: 'The Flash',
              powerLevel: 80,
              universe: 'DC Comics',
              race: 'Human',
            },
            {
              name: 'Diana Prince',
              firstName: 'Diana',
              lastName: 'Prince',
              alias: 'Wonder Woman',
              powerLevel: 90,
              universe: 'DC Comics',
              race: 'Human',
            },
            {
              name: 'Ororo Munroe',
              firstName: 'Ororo',
              lastName: 'Munroe',
              alias: 'Storm',
              powerLevel: 85,
              universe: 'Marvel Comics',
              race: 'Mutant',
            },
            {
              name: 'Helen Parr',
              firstName: 'Helen',
              lastName: 'Parr',
              alias: 'Elastigirl',
              powerLevel: 70,
              universe: 'Dark Horse Comics',
              race: 'Human',
            },
          ])
        );
      });
      it('returns an array of either firstNames or lastNames based on the second argument', () => {
        expect(
          Array.isArray(separateAndReturnNames(superheroes, 'lastName', 5))
        ).toEqual(true);
        expect(
          Array.isArray(separateAndReturnNames(superheroes, 'firstName', 4))
        ).toEqual(true);
      });

      it('the second argument represents what name (first or last) to return and the last argument represents the maximum length of the name', () => {
        expect(separateAndReturnNames(superheroes, 'lastName', 2)).toEqual([]); // no last names are less than or equal to 2 characters
        expect(separateAndReturnNames(superheroes, 'lastName', 4)).toEqual([
          'Parr',
        ]); // only the last name parr is less than or equal to 4
        expect(separateAndReturnNames(superheroes, 'lastName', 5)).toEqual([
          'Wayne',
          'Wells',
          'Allen',
          'Parr',
        ]);
        expect(separateAndReturnNames(superheroes, 'lastName', 6)).toEqual([
          'Wayne',
          'Wilson',
          'Parker',
          'Wells',
          'Allen',
          'Prince',
          'Munroe',
          'Parr',
        ]);
        expect(separateAndReturnNames(superheroes, 'firstName', 3)).toEqual([]); // no first names are less than or equal to 3 characters
        expect(separateAndReturnNames(superheroes, 'firstName', 4)).toEqual([
          'Wade',
        ]);
        expect(separateAndReturnNames(superheroes, 'firstName', 5)).toEqual([
          'Bruce',
          'Wade',
          'Peter',
          'Barry',
          'Diana',
          'Ororo',
          'Helen',
        ]);
      });

      it('calls Array.prototype.map and Array.prototype.filter', () => {
        spyOn(Array.prototype, 'map').and.callThrough();
        spyOn(Array.prototype, 'filter').and.callThrough();

        separateAndReturnNames(superheroes, 'lastName', 6);

        expect(Array.prototype.map.calls.count()).toBe(2);
        expect(Array.prototype.filter).toHaveBeenCalled();
      });
    });
  });

  describe('todo list', () => {
    let todoList;
    beforeEach(() => {
      todoList = [
        { name: 'Brush Teeth', duration: 2, priority: 'high' },
        { name: 'Walk Linus (the dog)', duration: 10, priority: 'high' },
        { name: 'Watch Netflix', duration: 60, priority: 'low' },
        { name: 'Go to work', duration: 560, priority: 'high' },
        { name: 'Ride bike to work', duration: 30, priority: 'medium' },
        { name: 'Plan a vacation', duration: 60, priority: 'medium' },
        { name: 'Order items in shopping cart', duration: 15, priority: 'low' },
      ];
    });

    it('priorityTodoDuration - returns the total amount of minutes needed to complete high priority tasks', () => {
      expect(priorityTodoDuration(todoList)).toEqual(572);
    });
    it('calls Array.prototype.filter and Array.prototype.reduce', () => {
      spyOn(Array.prototype, 'reduce').and.callThrough();
      spyOn(Array.prototype, 'filter').and.callThrough();

      priorityTodoDuration(todoList);

      // expect(Array.prototype.reduce).toHaveBeenCalled();
      expect(Array.prototype.filter).toHaveBeenCalled();
    });
  });
});
