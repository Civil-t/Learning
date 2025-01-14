'use strict';

// CONSTRUCTOR FUNCTIONS

const Person = function (name, age) {
  // instance properties propagated to every object/instance of Person
  this.name = name;
  this.age = age;
};

// instance of Person => objects created from calling the constructor function
const myself = new Person('Tapiwa', 27);
// console.log(myself);

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
