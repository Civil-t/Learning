/* // Challenge 1 Solution

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
 */

/* //challenge 3
const avgDolphins = (96 + 108 + 89) / 3;
const avgKoala = (88 + 91 + 110) / 3;

if (avgDolphins > avgKoala) {
  console.log(`Dolphins are the winners`);
} else if (avgDolphins < avgKoala) {
  console.log(`Kolas are the winners`);
} else {
  console.log("It is a draw");
}

//challenge 3 bonus 1 and 2
const avgDolphins1 = (97 + 112 + 101) / 3;
const avgKoala1 = (109 + 95 + 106) / 3;

if (avgDolphins1 > avgKoala1 && avgDolphins1 > 100) {
  console.log(`Dolphins1 are the winners`);
} else if (avgDolphins1 < avgKoala1 && avgKoala1 > 100) {
  console.log(`Koalas1 are the winners`);
} else if (avgDolphins1 === avgKoala1 && avgDolphins1 > 100) {
  console.log("It is a draw bonus 2");
} else {
  console.log("No one has won the trophy");
}
 */

// challege 4

const bill = 430;
let tip;

bill >= 50 && bill <= 300
  ? console.log(
      `The bill was ${bill}, Tip is (15%): ${(tip =
        bill * 0.15)}, and the total value is ${bill + tip}`
    )
  : console.log(
      `The bill was ${bill}, Tip is (20%): ${(tip =
        bill * 0.2)}, and the total value is ${bill + tip}`
    );
 ??