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
function twice(callback){
    let count = 0;
    while(count < 2){
        count++;
        callback();
    }

}