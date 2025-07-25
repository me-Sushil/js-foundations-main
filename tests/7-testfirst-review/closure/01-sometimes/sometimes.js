/* eslint-disable no-unused-vars */
function sometimes(func) {
 let callCount = 0;
    return function (...args){
        callCount++;

        if(callCount <=3){
            return func(...args);
        }
        else if(callCount % 2 === 0){
            return "I do not know!";
        }
        else {
            return func(...args);
        }
    }
}
