/* eslint-env jasmine */
/* eslint-disable no-undef, no-prototype-builtins */

describe('findObjPropsHasOwn', () => {
  const rectanglePrototype = {
    getArea: function () {
      return this.height * this.width;
    },
  };
  function rectangle(color, height, width) {
    const rectangleInstance = Object.create(rectanglePrototype);

    rectangleInstance.color = color;
    rectangleInstance.height = height;
    rectangleInstance.width = width;

    return rectangleInstance;
  }

  it('prints out the key', () => {
    const greenRectangle = { color: 'green' };

    expect(findObjPropsHasOwn(greenRectangle)).toBe('color');
  });

  it("prints out the object's keys, comma delimited", () => {
    const yelloRectangle = { color: 'yellow', height: 8, width: 5 };

    expect(findObjPropsHasOwn(yelloRectangle)).toBe('color, height, width');
  });

  it("prints the keys belonging to the instance object, it excludes properties in the object's prototype chain", () => {
    const blueRectangle = rectangle('blue', 5, 3);

    expect(findObjPropsHasOwn(blueRectangle)).toBe('color, height, width');
  });

  it('it uses the `.hasOwnProperty` method', () => {
    const purpleRectangle = rectangle('purple', 7, 2);
    spyOn(purpleRectangle, 'hasOwnProperty').and.callThrough(); // checks to see if hasOwnProperty is called

    findObjPropsHasOwn(purpleRectangle);

    expect(purpleRectangle.hasOwnProperty).toHaveBeenCalled();
    // Note: do no use .call on Object.hasOwnProperty.call(purpleRectangle);
  });
});

describe('findObjKeys', () => {
  const rectanglePrototype = {
    getArea: function () {
      return this.height * this.width;
    },
  };
  function rectangle(color, height, width) {
    const rectangleInstance = Object.create(rectanglePrototype);

    rectangleInstance.color = color;
    rectangleInstance.height = height;
    rectangleInstance.width = width;

    return rectangleInstance;
  }
  it('prints out the key', () => {
    const greenRectangle = { color: 'green' };

    expect(findObjKeys(greenRectangle)).toBe('color');
  });

  it("prints out the object's keys, comma delimited", () => {
    const yelloRectangle = { color: 'yellow', height: 8, width: 5 };

    expect(findObjKeys(yelloRectangle)).toBe('color, height, width');
  });

  it("prints the keys belonging to the instance object, it excludes properties in the object's prototype chain", () => {
    const blueRectangle = rectangle('blue', 5, 3);

    expect(findObjKeys(blueRectangle)).toBe('color, height, width');
  });

  it('it uses `Object.keys`', () => {
    const purpleRectangle = rectangle('purple', 7, 2);
    spyOn(Object, 'keys').and.callThrough(); // checks if Object.keys is called

    findObjKeys(purpleRectangle);

    expect(Object.keys).toHaveBeenCalled();
    // Note: do no use Object.hasOwnProperty.call(purpleRectangle);
  });
});
