// create an array
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

//add an element to the end of the array
cars.push("Audi");

// replace the first element of the array
cars[0] = "Mercedes";
console.log(cars);

// remove the last element of the array
cars.pop();
console.log(cars);

// remove the first element of the array
cars.shift();
console.log(cars);

// add an element to the beginning of the array
cars.unshift("Volkswagen");
console.log(cars);

// find the index of an element in the array
console.log("index of BMW is:", cars.indexOf("BMW"));

// add an element at a specific index skipping a position
cars[5] = "Toyota";
console.log(cars);

console.log(cars[4]); // undefined
console.log(cars.length); // 6

// indices of non empty array positions
console.log("Object keys method ->", Object.keys(cars));

// log the keys of the array and their values
const keys = cars.keys();

for (const key of keys) {
  console.log(` ${key}, ${cars[key]}`);
}

////////////////////////////////////////
//ARRAY METHODS

//declare an array
let methodsArr = Array();
