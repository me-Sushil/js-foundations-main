/* eslint-env jasmine */
/* eslint-disable no-undef */
describe('accessor', () => {
  it('takes an object and returns a function', () => {
    const result = accessor({});
    expect(typeof result).toBe('function');
  });

  it('the returned function can get properties of the given object', () => {
    let accessObject = accessor({ a: 100 });
    expect(accessObject('a')).toEqual(100);

    accessObject = accessor({ foobar: [7, 8, 9] });
    expect(accessObject('foobar')).toEqual([7, 8, 9]);
    expect(accessObject('a')).toEqual(undefined);
  });

  it('the returned function can set properties of the given object', () => {
    const obj = { stuff: 'something' };
    const accessObject = accessor(obj);

    accessObject('stuff', 'a new value');
    expect(obj.stuff).toEqual('a new value');

    expect(obj['pizz-pie']).toEqual(undefined);
    //              key       value
    accessObject('pizza-pie', 'yummmm');
    expect(obj['pizza-pie']).toEqual('yummmm');
  });
});
