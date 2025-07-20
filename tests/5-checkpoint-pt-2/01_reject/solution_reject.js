// /* eslint-disable no-unused-vars */


function reject(array, callback) {
  return array.filter(element => !callback(element));
}
