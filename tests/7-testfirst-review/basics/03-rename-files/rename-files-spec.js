/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('The function `renameFiles`', () => {
  /*
    You are given an array of filenames in the order of their creation.
    Since two files cannot have the same name, the one which comes later will have
    an addition to its name in a form of (n), where "n" is the smallest positive
    integer. There shouldn't be any duplicate names.

    Example:

    let files = ['myFile', 'anotherFile', 'family-picture', 'myFile', 'another-file', 'myFile'];
    let newFileNames = renameFiles(files);
    console.log(newFilesNames);
    --> ['myFile', 'anotherFile', 'family-picture', 'myFile(1)', 'anotherFile(1)', 'myFile(2)']
  */

  it('returns an array', () => {
    expect(
      Array.isArray(renameFiles(['file', 'fileTwo', 'fileThree', 'fileFour']))
    ).toEqual(true);
  });

  it('does not rename files if duplicates are not present', () => {
    expect(
      renameFiles(['FullstackTestFirst', 'GuessingGame', 'FileWatcher'])
    ).toEqual(['FullstackTestFirst', 'GuessingGame', 'FileWatcher']);
  });

  it('renames files if there are duplicates by adding `(n)` to the end of the filename where `n` is the smallest positive integer that the obtained name did not use.', () => {
    expect(renameFiles(['hello', 'world', 'hello'])).toEqual([
      'hello',
      'world',
      'hello(1)',
    ]);
  });

  it('does not rename files to names that are already taken', () => {
    expect(
      renameFiles([
        'a(1)',
        'a(6)',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
      ])
    ).toEqual([
      'a(1)',
      'a(6)',
      'a',
      'a(2)',
      'a(3)',
      'a(4)',
      'a(5)',
      'a(7)',
      'a(8)',
      'a(9)',
      'a(10)',
      'a(11)',
    ]);
    // This increases the difficulty of the problem! If a file already exists, you can't use that name. For example, if file(3) already exists, only one file(3) should exist
  });

  //This is a tricky one! You will need to use all the tools (and debugging tools) to get to a solution.
});
