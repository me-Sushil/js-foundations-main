class MyEventEmitter{
    constructor(){
        this.events = {}
    }

    addListener(eventName, callback){
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);

    }
    emit(eventName, ...args){
        let handler = this.events[eventName];
        if(handler){
            for(let func of handler){
                func(...args);
            }
        }
    }
}