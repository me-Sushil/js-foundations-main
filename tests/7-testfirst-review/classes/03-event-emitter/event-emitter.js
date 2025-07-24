class MyEventEmitter{
    constructor(events){
        this.events = {
            // greet : [],
            // bye : [],
            // shout : []
        }
    }

    addListener(eventName, callback){
        if(!this.events["eventName"]){
            this.events[eventName] = [];
        }
        
    }
    emit(){

    }
}