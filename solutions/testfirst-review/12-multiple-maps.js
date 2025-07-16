const multipleMaps = (input, maps) => {
  return input.map(key => {
    for (const map of maps) {
      if (key in map) return map[key];
    }

    return key;
  });
};
