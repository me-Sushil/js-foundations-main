/* eslint-disable no-unused-vars */

const setPropsOnObj =(obj)=>{
   
        obj.x = 7;
       obj['y'] = 8;
       obj.onePlus = num => {
        return num+1;
       } 
}

const setPropsOnArr =(arrayObject)=>{
    arrayObject.hello = function(){
        return `Hello!`;
    } ;
    arrayObject.full = 'stack';
    arrayObject[0] = 5;
    arrayObject.twoTimes=(num)=>{
        return num*2;
    }
}

const setPropsOnFunc =(functionObject)=>{
    functionObject.year = '20??';
    functionObject.divideByTwo=(number)=>{
        return num /2;
    }
}


const shallowCopy = (arr1, arr2)=>{

}