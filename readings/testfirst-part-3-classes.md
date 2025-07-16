# Classes

Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics. They act primarily as syntactical sugar over JavaScript's existing prototype based inheritance.

So converting the [FourWheeler constructor function](testfirst-part-2-constructor.md) to class

```
class FourWheeler {
    constructor(fwType) {
        this.type = fwType
        this.numberOfWheels = 4
    }

    honk() {
        console.log('honk')
    }

    changeType(newType) {
        this.type = newType
    }
}

let car = new FourWheeler('car');
```
