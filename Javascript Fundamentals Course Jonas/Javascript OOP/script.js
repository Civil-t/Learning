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

// Procedure by virtue of using the new keyword on calling the function

// 1. an empty object {} is created
// 2. function is called and the this keyword refers to the new {}
// 3. the {} object is linked to the prototype
// 4. function automatically returns the object {something}

// PROTOTYPIAL INHERITANCE/ DELEGATION

/*
- every function has a prototype property which is inherited by the instances of that function 
- prototype is an object with own properties/data and logic/functions but are not direct properties of the 
    instances butthe instances have access to use this improves on the efficiency of the program
- 
*/

// add a function to the prototype

Person.prototype.calcAge = function () {
  // console.log(2025 - this.age);
};

// add a property to the prototype
Person.prototype.species = 'Homo Sapien';

myself.calcAge();

// decla

console.log('Hi  Tapiwa \\');
