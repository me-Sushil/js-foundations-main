### Event Emitter

An event emitter triggers an event to which anyone can listen. If you are familiar with smart home devices, you may say to your device
"It is time for bed," and it can trigger (aka "emit") a few actions are such as "turn off your lights," "play white noise music," "lock your doors," and more!

In the scenario above, the event "turn off your lights" has associated actions when the "event" is emitted or triggered. The relationship between registering an event triggering an event is the general idea behind an event emitter.

Different JS libraries offer different implementations of an Event Emitter, but the basic idea is to provide a framework for issuing events and subscribing to them.

#### Directions

Create the `MyEventEmitter` class that can store "events" and associate actions (functions) for when the event is emitted (triggered).

Here is an example of the `MyEventEmitter` class:

```js
const smartHomeEvents = new MyEventEmitter();

smartHomeEvents.addListener('It is bedtime', () => {
  console.log("It's time for bed!");
});

smartHomeEvents.addListener('It is bedtime', () => {
  console.log('All of the lights are off!');
});

smartHomeEvents.addListener('It is bedtime', () => {
  console.log('Your wakeup alarm is set to 6:00 a.m.');
});

events.emit('It is bedtime');

/*

The following is logged to console after the "It is bedtime" event is emitted (triggered) since
all of the functions registered to that event have `console.log` statements:

  It's time for bed!
  All of the lights are off!
  Your wakeup alarm is set to 6:00 a.m.

*/
```

Every EventEmitter instance has an "events" property that stores the name of an event and every function associated with the event.

- `addListener(eventName, fnc)`

  - The `addListener` method stores the `eventName` and associates the fnc with the event.
  - If the event name already exists, it adds the function to the functions associated with the event.

- `emit(eventName)`
  - When the `emit` method is executed, all of the functions that are associated with the `eventName` are executed.
