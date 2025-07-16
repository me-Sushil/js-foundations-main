/* eslint-disable no-unused-vars */

class MyEventEmitter {
  constructor() {
    this.events = {};
  }

  addListener(name, cb) {
    if (this.events[name] === undefined) {
      this.events[name] = [cb];
    } else {
      this.events[name].push(cb);
    }
  }

  // REST PARAMETER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
  // ... represents a rest parameter, review the link above!
  emit(event, ...args) {
    this.events[event].forEach(callback => {
      // REST PARAMETER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
      callback(...args);
    });
  }

  /* This is another approach using the .apply method  
  emit(event, ...args) {
    this.events[event].forEach(callback => {
      callback.apply(null, args);
    });
  }

  */

  /*
  Solution using the arguments array-like object
      emit(event) {
      // ...? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
      // const args = [].slice.call(arguments, 1);
      const args = Array.from(arguments).slice(1);
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
      // array like object http://2ality.com/2013/05/quirk-array-like-objects.html
      this.events[event].forEach(callback => {
        callback.apply(null, args);
      });
   }

  */
}
