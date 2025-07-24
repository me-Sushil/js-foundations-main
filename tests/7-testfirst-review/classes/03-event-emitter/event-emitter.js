class MyEventEmitter{
    constructor(events){
        this.events = {
            
        }
    }

    addListener(eventName, callback){
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);

    }
    emit(){

    }
}