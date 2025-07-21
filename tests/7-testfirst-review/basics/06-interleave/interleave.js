function interleave(...args) {
  const maxLength = Math.max(...args.map(str => str.length));
  let result = '';

  for (let i = 0; i < maxLength; i++) {
    for (let str of args) {
      if (i < str.length) {
        result += str[i];
      }
    }
  }

  return result;
}
