/* eslint-disable no-unused-vars */
// the values from the first array argument are mapped to the array of objects in the second array argument
// properly maps values from the first array argument when there are multiple maps in the second argument


function multipleMaps(mapper, maps) {
  return mapper.map((value) => {
    for (let map of maps) {
      if (Object.prototype.hasOwnProperty.call(map, value)) {
        return map[value];
      }
    }
    return undefined; 
  });
}
