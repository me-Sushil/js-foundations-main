/* eslint-env jasmine */
/* eslint-disable no-undef */
describe('multiplicationTable', () => {
  it('returns an array', () => {
    const table = multiplicationTable(5, 10);

    expect(Array.isArray(table)).toBe(true);
  });

  it('every row is an array and the first argument represents the total amount of rows in the table', () => {
    const smallTable = multiplicationTable(3, 0);
    const mediumTable = multiplicationTable(6, 0);
    const largeTable = multiplicationTable(9, 0);

    expect(smallTable).toEqual([[], [], []]);
    expect(mediumTable).toEqual([[], [], [], [], [], []]);
    expect(largeTable).toEqual([[], [], [], [], [], [], [], [], []]);
  });

  it('in a 1x3 grid (rows X columns ), the column values start at 1 and increment by 1', () => {
    const table = multiplicationTable(1, 3);

    expect(table).toEqual([[1, 2, 3]]);
  });

  it('in a 2x3 grid ( rows X columns ), the column values start at 1 and are multiplied by the current row', () => {
    const rows = 2;
    const columns = 3;
    const table = multiplicationTable(rows, columns);

    expect(table).toEqual([[1, 2, 3], [2, 4, 6]]);
  });

  it('in a 4x8 grid (rows X columns ), the column values start at 1 and are multiplied by the current row', () => {
    const rows = 4;
    const columns = 8;

    const table = multiplicationTable(rows, columns);

    expect(table).toEqual([
      [1, 2, 3, 4, 5, 6, 7, 8],
      [2, 4, 6, 8, 10, 12, 14, 16],
      [3, 6, 9, 12, 15, 18, 21, 24],
      [4, 8, 12, 16, 20, 24, 28, 32],
    ]);
  });

  it('in a 0x0 grid (rows X columns), an empty array is returned', () => {
    const table = multiplicationTable(0, 0);
    expect(table).toEqual([]);
  });
});
