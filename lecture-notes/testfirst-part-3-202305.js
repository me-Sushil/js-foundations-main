/**
 Classes
  - Syntactic sugar
  - Constructor
  - Function calling same class (haveBaby)
  - Extends
    - Calling parent super
    - function override
      - On extends
 */

//Declare a class
class MakeFellow {
  constructor(fName, batch) {
    //Constructor function is called when 'new' keyword is used
    this.fName = fName;
    this.batch = batch;
    this.certificates = [];
    this.fellowFriends = [];
  }
  //with class declaration, methods come inside class inside of through .prototype
  sayHello() {
    console.log(`Hello my name is, ${this.fName}`); //using template literal to access variable inside string
  }
  makeFriend(name) {
    let newFriend = new MakeFellow(name, this.batch); //method inside class can call the class itself
    this.fellowFriends.push(newFriend);
  }
}

//a class can extend another class to use all the parent class's properties and methods
class MakeTeachingFellow extends MakeFellow {
  constructor(fName, batch, fellowshipBatch) {
    super(fName, batch); //first call the constructor function of the parent class
    this.fellowshipBatch = fellowshipBatch;
  }
  //you can overwrite method of parent class from child class
  sayHello() {
    console.log(`Hello my name is, ${this.fName} and I am a Teaching Fellow`); //using template literal to access variable inside string
  }
}

let hemlal = new MakeFellow("Hemlal", 2023);
console.log(hemlal);
hemlal.sayHello();

let niru = new MakeTeachingFellow("Niru", 2023, 2022);
niru.makeFriend("Sunil");
console.log(niru.fellowFriends[0]);
niru.sayHello();
