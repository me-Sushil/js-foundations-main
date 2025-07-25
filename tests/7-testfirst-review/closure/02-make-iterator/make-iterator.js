/* eslint-disable no-unused-vars */
function makeIterator(array){
    let index = 0;
    return {
        getNext : function(){
        if(index < array.length){
            let result = {value : array[index], done : false};
            index++;
            return result;
        }else{
            return {value : undefined, done : true};
        }
        },

        getIndex : function(){
            return index;
        }
    }
}