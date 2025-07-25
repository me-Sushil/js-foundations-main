/* eslint-disable no-unused-vars, no-prototype-builtins */
function alternate(fn){
    let toggle = true;     //runNextTime
    return function(){
        if(toggle){
            fn();
        }
        toggle = !toggle;
    }
}

function twice(fn) {
  let count = 0;
  return function() {
    if (count < 2) {
      count++;
      return fn();
    }
    return 0;
  };
}
