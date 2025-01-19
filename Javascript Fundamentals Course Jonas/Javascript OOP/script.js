'use strict';

/*
// CONSTRUCTOR FUNCTIONS

const Person = function (name, age) {
  // instance properties propagated to every object/instance of Person
  this.name = name;
  this.age = age;
};

// instance of Person => objects created from calling the constructor function
const myself = new Person('Tapiwa', 27);
console.log(myself);
*/

/*
// Procedure by virtue of using the new keyword on calling the function

1. an empty object {} is created
2. function is called and the this keyword refers to the new {}
3. the {} object is linked to the prototype
4. function automatically returns the object {something}

*/

/*
// PROTOTYPIAL INHERITANCE/ DELEGATION

- every function has a prototype property which is inherited by the instances of that function 
- prototype is an object with own properties/data and logic/functions but are not direct properties of the 
    instances butthe instances have access to use this improves on the efficiency of the program
- 

// add a function to the prototype

Person.prototype.calcAge = function () {
  console.log(2025 - this.age);
};

// add a property to the prototype
Person.prototype.species = 'Homo Sapien';

myself.calcAge();

console.log(myself.__proto__);

*/

/* 
// Coding Challenge #1

Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h

// Car constructor

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// function to increase speed

Car.prototype.Accelerate = function () {
  this.speed += 10;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};

// Car instances
const BMW = new Car('BMW', 120);
const Mercedes = new Car('Merc', 95);

console.log(BMW.Accelerate());
console.log(Mercedes.Accelerate());

// function to reduce speed

Car.prototype.Brake = function () {
  this.speed -= 5;
  console.log(`'${this.make}' reduced speed to ${this.speed}`);
};

console.log(BMW.Brake());
console.log(Mercedes.Brake());

*/

/*
const Car = {
  make: 'BMW',
  speed: 120,
};

console.log(dir.Car);
*/

/*

// ES6 CLASSES

// N.B

// 1. Classes are not hoisted i.e they can not be used before they are declared
// 2. Classes are first class citizens i.e they can be passed into and returned from functions
// 3. Classes are in strict mode een if you have not specified

const PersonCL = class {
  // should be in every class
  constructor(fullName, birthYear) {
    this.firstName = fullName;
    this.birthYear = birthYear;
  }
  
  // method is added to the prototype property automatically
  calcAge() {
    console.log(2025 - this.birthYear);
  }
};

// PersonCl instance
const Tapiwa = new PersonCL('Tapiwa', 1997);
Tapiwa.calcAge();

// Getters and Setters -> they are properties that get and set values

const bank = {
  owner: 'Tapiwa',
  movements: [1000000, 250000, 100000, 50000],
  
  // gets latest value
  get latest() {
    return console.log(this.movements.slice(-1).pop());
  },
  
  // sets a value -> can only have 1 argument
  set latest(mov) {
    this.movements.push(mov);
    console.log(this.movements);
  },
};

class StudentCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  
  get age() {
    return console.log(2025 - this.birthYear);
  }
  
  set fullName(names) {
    if (names.includes(' ')) {
      this._fullName = names; // _fullName is a new variable becasue we can not use fullName (error ->  max call stack size exceeded)
    } else 
      alert('Enter a full name');
  }
}

//  to have access to the fullName there is now need for a getter
get fullName() {
  return this._fullName;
}

// STATIC METHODS -> methods that are attached to the constructor only and are not inherited by the objects/instances

static hey() {
  return console.log('Hey there :)');
}
}

const Donald = new StudentCl('Donald B', 2003);
console.log(Donald.fullName);

StudentCl.hey();
// Donald.hey(); // will not work because static methods are not inherited

*/

/*
// OBJECT.CREATE -> create the object prototype of an instance manually

const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const tapiwa = Object.create(PersonProto); // creates a new empty object
tapiwa.init('Dombo', 1887);
tapiwa.calcAge();

*/

/*
// CHALLENGE 2

Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h



class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  // method to increase speed
  accelerate() {
    return console.log(`${this.make} is going at ${(this.speed += 10)}`);
  }
  
  // method to reduce speed
  brake() {
    return console.log(
      `${this.make} is has reduced speed to ${(this.speed -= 5)}`
    );
  }
  
  // get speed in miles
  get speedUS() {
    return console.log(`${this.make} is going at ${this.speed / 1.6} mi/h`);
  }
  
  // set speed from miles to km
  set speedUS(speedMiles) {
    this.speed = speedMiles * 1.6;
    console.log(`Speed has been set to ${this.speed} km/h -> setter speedUS`);
  }
}

// Car class instances
const car1 = new CarCl('BMW', 120);
const car = new CarCl('Mercedes', 95);

// Calling brake and accelearate methods
car1.accelerate();
car1.accelerate();

car1.brake();
car1.brake();

// testing getter and setter
car1.speedUS;
car1.speedUS = 67;

*/

/* 

// CONSTRUCTOR FUNCTION INHERITING FROM INSTRUCTOR FUNCTION

// Parent constructor function Person
const PersonCL = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// class Person method to calculate age
PersonCL.prototype.calcAge = function () {
  return console.log(
    `From class person calcAge -> AGE: ${2025 - this.birthYear} `
  );
};

// Child constructor function (class) to inherit from parent Person function (class)

const StudentCl = function (firstName, birthYear, course) {
  PersonCL.call(this, firstName, birthYear); // the call method and this property stipulates that it references to the Person function else this would just be a regular function call with this == undefined
  this.course = course;
};

// Linking prototypes -> so that Student instances inherit from Person
// creates a new empty object and should be deone before creating any methods else it will override them
StudentCl.prototype = Object.create(PersonCL.prototype);

// Student introduce method
StudentCl.prototype.introduce = function () {
  return console.log(`Hi I am ${this.firstName} studying ${this.course}`);
};

// fixing student instances refering to Person as their constructor
StudentCl.prototype.constructor = StudentCl;

const dombo = new StudentCl('Tapiwa', 2000, 'Software Engineering');
// dombo.introduce();
dombo.calcAge();
console.dir(dombo.__proto__);

*/

// Challenge 3

/*

Your tasks: 
1. Use a constructor function to implement an Electric Car (called 'EV') as a child 
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the 
current battery charge in % ('charge' property) 

2. Implement a 'chargeBattery' method which takes an argument 
'chargeTo' and sets the battery charge to 'chargeTo' 

3. Implement an 'accelerate' method that will increase the car's speed by 20, 
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 
km/h, with a charge of 22%' 

4. Create an electric car object and experiment with calling 'accelerate', 
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when 
you 'accelerate'! Hint: Review the definiton of polymorphism 😉 

Test data: 
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%


// Parent constructor funtion (class)

const CarCl = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// CarCl method to reduce speed
CarCl.prototype.brake = function () {
  return console.log(
    `${this.make} is has reduced speed to ${(this.speed -= 5)}`
  );
};

// Child constructor fucntion (class)

const EVCl = function (make, speed, charge) {
  CarCl.call(this, make, speed);
  this.charge = charge;
};

// Linking Prototypes
EVCl.prototype = Object.create(CarCl.prototype);

// EVCl Charge Battery method
EVCl.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  // set chargeTo (){}
};

// EVCl method to increase speed
EVCl.prototype.accelerate = function () {
  return console.log(
    `${
      this.make
    } going at ${(this.speed += 20)} km/h with a charge of ${(this.charge -=
    this.charge * 0.01)}%`
  );
};

//  EVCl instance
const car1 = new EVCl('Tesla', 120, 90);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();

// Testing inheritance (access of EVCl (child class) instances to CarCl (parent class) methods)
car1.brake();
car1.brake();
car1.brake();
car1.brake();

car1.chargeBattery(95);
car1.accelerate();

*/

/*
//  CLASSES INHERITING FROM CLASSES (ES6 CLASSES)

// Parent class Person
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return console.log(
      `From class person calcAge -> AGE: ${2025 - this.birthYear} `
    );
  }

  introduce() {
    return console.log(`Hi I am ${this.fullName} studying ${this.course}`);
  }

  set fullName(names) {
    if (names.includes(' ')) {
      this._fullName = names; // _fullName is a new variable becasue we can not use fullName (error ->  max call stack size exceeded)
    } else alert('Enter a full name');
  }

  //  to have access to the fullName there is now need for a getter
  get fullName() {
    return this._fullName;
  }
}

// Child class Student

class StudentCl extends PersonCL {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // must be called first to have access to the this keyword
    this.course = course;
  }
}

// student object/instance

const tapiwa = new StudentCl('Tapiwa C', 1887, 'soft engineering');
tapiwa.introduce();
// tapiwa.calcAge();

*/

/*

// OBJECTS INHERITING FROM OBJECTS (object.create())

// parent object - Person

const PersonProto = {
  calcAge() {
    return console.log(
      `From object person calcAge -> AGE: ${2025 - this.birthYear} `
    );
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// child object - Student
const StudentProto = Object.create(PersonProto);

// student init method to inilialize the this keyword for firstName and birthYear to refer to the Person object's context
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

// student introduce method
StudentProto.introduce = function () {
  return console.log(`Hi I am ${this.firstName} studying ${this.course}`);
};

//  student object instances
const dombo = Object.create(StudentProto);
dombo.init('Dombo', 2002, 'Literature');

// testing inheritance from both student and person objects
dombo.calcAge();
dombo.introduce();

*/

// PUBLIC INTERFACES AND ENCAPSULATION

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
  }

  // method
}
