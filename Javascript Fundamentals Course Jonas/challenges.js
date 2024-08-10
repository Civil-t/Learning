// Challenge 1 Solution

let heightMark = 1.69;
let heightJohn = 1.95;
let massMark = 78;
let massJohn = 92;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

//challenge 2

if (markHigherBMI) {
  console.log(`Marks's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}`);
} else {
  console.log(` John's BMI ${BMIJohn} is higher than  Marks's BMI${BMIMark} `);
}
