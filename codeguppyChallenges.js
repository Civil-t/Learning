/*50 CODING CHALLENGES PART 1

1. Print numbers from 1 to 10
2. Print the odd numbers less than 100
3. Print the multiplication table with 7
4. Print all the multiplication tables with numbers from 1 to 10
5. Calculate the sum of numbers from 1 to 10
6. Calculate 10!
7. Calculate the sum of even numbers greater than 10 and less than 30
8. Create a function that will convert from Celsius to Fahrenheit
9. Create a function that will convert from Fahrenheit to Celsius
10. Calculate the sum of numbers in an array of numbers
11. Calculate the average of the numbers in an array of numbers
12. Create a function that receives an array of numbers as argument and returns an
array containing only the positive numbers
13. Find the maximum number in an array of numbers
14. Print the first 10 Fibonacci numbers without recursion
15. Create a function that will find the nth Fibonacci number using recursion
16. Create a function that will return a Boolean specifying if a number is prime
17. Calculate the sum of digits of a positive integer number
18. Print the first 100 prime numbers
19. Create a function that will return in an array the first “p” prime numbers
greater than “n”
20. Rotate an array to the left 1 position
21. Rotate an array to the right 1 position
22. Reverse an array
23. Reverse a string
24. Create a function that will merge two arrays and return the result as a new
array
25. Create a function that will receive two arrays of numbers as arguments and
return an array composed of all the numbers that are either in the first array
or second array but not in both
26. Create a function that will receive two arrays and will return an array with
elements that are in the first array but not in the second */

// 1. Print numbers from 1 to 10 (for loop, while loop, do-while)

/*for (num = 0; num < 11; num++) {
  console.log(num);
}

const number = 10;
let count = 0;

while (count <= number) {
  console.log(count);
  count++;
}

do {
  console.log(count);
  count++;
} while (count < number);*/

//2. Print the odd numbers less than 100

/*
for (num = 0; num < 100; num++) {
  if (num % 2 != 0) {
    console.log(num);
}
  
const number = 100;
let counter = 0;
}

while (counter < number) {
if (counter % 2 != 0) {
    // console.log(counter);
}
counter++;
}

do {
    if (counter % 2 != 0) {
        console.log(counter);
    }
    counter++;
} while (counter < number);

*/

// 3. Print the multiplication table with 7

/*
const multiple = 7;
let count = 0;

for (num = 0; num < 50; num++) {
  console.log(`${multiple} * ${num} = ${multiple * num}`);
}
  
  
while (count < 50) {
console.log(`${multiple} * ${count} = ${multiple * count}`);
count++;
}


do {
    console.log(`${multiple} * ${count} = ${multiple * count}`);
    count++;
} while (count < 50);

*/

// 4. Print all the multiplication tables with numbers from 1 to 10

/*
for (num = 0; num <= 10; num++) {
  console.log(`\n MULTIPLES OF ${num}: \n`);

  for (multiple = 1; multiple <= 10; multiple++) {
    console.log(`${num} * ${multiple} = ${num * multiple}`);
  }
}



//not incrementing number -> only printing multiples of 0

let number = 0;
let multiple = 0;

while (number <= 10) {
    while (multiple <= 10) {
        console.log(`${number} * ${multiple}`);
        multiple++;
    }
    number++;
}

*/

// 5. Calculate the sum of numbers from 1 to 10
/* 
let total = 0;

for (num1 = 0; num1 <= 10; num1++) {
  console.log(`${total} + ${num1} = `);
  total += num1;
  console.log(`${total} \n`);
}

console.log(total);

*/

// 6. Calculate 10!
/*
let total = 1;

for (num1 = 1; num1 <= 10; num1++) {
  total *= num1;
  console.log(`${total}  `);
}

console.log(total);

*/

// 7. Calculate the sum of even numbers greater than 10 and less than 30

/*
for (num = 10; num < 30; num++) {
  if (num % 2 == 0) {
    console.log(num);
  }
}

*/

// 8. Create a function that will convert from Celsius to Fahrenheit
// 9. Create a function that will convert from Fahrenheit to Celsius

// 10. Calculate the sum of numbers in an array of numbers

/*
const numbers = [54, 23, 78, 123, 89, 2, 4, 6, 9];
let sum = 0;

for (num = 0; num < numbers.length; num++) {
  console.log(`${sum} + ${numbers[num]}`);
  sum += numbers[num];
  }
  
  console.log(sum);
  
  */

// 11. Calculate the average of the numbers in an array of numbers

/*
const numbers = [54, 23, 78, 123, 89, 2, 4, 6, 9];
let sum = 0;

for (num = 0; num < numbers.length; num++) {
  console.log(`${sum} + ${numbers[num]}`);
  sum += numbers[num];
  }
  
  console.log(`Average = ${sum / numbers.length}`);
  
  */

// 12. Create a function that receives an array of numbers as argument and returns an
// array containing only the positive numbers

/*
const numbers = [54, -23, 78, -123, 89, -2, 4, -6, 9];
const positives = [];

const positiveNums = function (arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives.push(arr[i]);
    }
  }
  console.log(positives);
};

positiveNums(numbers);

*/

// 13. Find the maximum/largest number in an array of numbers

/*
const numbers = [54, -23, 78, 123, 89, -2, 4, -6, 9];
let largest = numbers[0];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(largest);

*/

// 16. Create a function that will return a Boolean specifying if a number is prime

/*
function isPrime(number){
  if(number%1==0 && number%number){}

}
  */
