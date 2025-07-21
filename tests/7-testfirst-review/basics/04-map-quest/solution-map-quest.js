/* eslint-disable no-unused-vars */
const mapQuest =(array)=>{
    let oppositeDir = {
    'N': 'S',
    'S': 'N',
    'E': 'W',
    'W': 'E'
    }
   return array.reduce((stack, dir)=>{
        if(stack.length > 0 && oppositeDir[dir] === stack[stack.length-1]){
            stack.pop();
        }else{
            stack.push(dir);
        }
        return stack;
    },[])

}