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

//const bill = 430;
/* let tip;

bill >= 50 && bill <= 300
  ? console.log(
      `The bill was ${bill}, Tip is (15%): ${(tip =
        bill * 0.15)}, and the total value is ${bill + tip}`
    )
  : console.log(
      `The bill was ${bill}, Tip is (20%): ${(tip =
        bill * 0.2)}, and the total value is ${bill + tip}`
    ); */

/* let tips = [];

function calcTip(bill) {
  bill >= 50 && bill <= 300
    ? `The bill was ${bill}, Tip is (15%): ${(tip =
        bill * 0.15)}, and the total value is ${bill + tip}, ${tips.push(tip)}`
    : `The bill was ${bill}, Tip is (20%): ${(tip =
        bill * 0.2)}, and the total value is ${bill + tip}, ${tips.push(tip)}`;
}

let bills = [125, 555, 44];
bills.push(125);
console.log(bills);
console.log(tips);

const jonas = {
  firstName: "Jonas",
  birthyear: 1997,
  lastName: "Schmedtman",
  hasDriversLicense: false,
  friends: ["Michael", "Peter", "Steven"],
  jonasInfo: function () {
    this.age = 2024 - this.birthyear;
    return console.log(
      `${this.firstName} is a ${this.age} old teacher and has ${
        this.hasDriversLicense ? `a` : `no`
      } drivers license`
    );
  },
}; */

/* ("Jonas has 3 friends and his best friend is Michael");
console.log(
  `${jonas.firstName} has ${jonas.friends.length} and his best friend is ${jonas.friends[0]}`
); */

//Challenge

//console.log(jonas.jonasInfo());

// Coding Challenge 3 using this keyword in objects

/* const mark = {
  full_name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  full_name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI > john.calcBMI
  ? console.log(`${mark.full_name} has a higher BMI of ${mark.calcBMI()}`)
  : console.log(`${john.full_name} has a higher BMI of ${john.calcBMI()}`);
 */

//Coding Challenge 4

/* const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  bill >= 50 && bill <= 300
    ? `The bill was ${bill}, Tip is (15%): ${(tip =
        bill * 0.15)}, and the total value is ${(total =
        bill + tip)}, ${tips.push(tip)}, ${totals.push(total)}`
    : `The bill was ${bill}, Tip is (20%): ${(tip =
        bill * 0.2)}, and the total value is ${(total =
        bill + tip)}, ${tips.push(tip)}, ${totals.push(total)}`;
}

for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
}

console.log("TIPS", tips, "TOTALS", totals); */

// bonus

/* let sum = 0;
const arr = [26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8];
const num = [20, 10];

const calcAverage = (d) => {
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
  }

  const average = sum / d.length;
  return console.log(average);
};

calcAverage(num); */

//DEVELOPER SKILLS CHALLENGE 1

/* const data = [17, 21, 23];

const printForecast = (arr) => {
  for (let i = 0; i < data.length; i++) {
    console.log(`... ${data[i]} in ${i + 1} days`);
  }
};

printForecast(data); */

////////////////////////////////////////////////////////////////////

//Data Structures, Modern Operators and Strings Coding Challenge #1

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Tasks Destructuring Arrays and Objects

/* // 1. destructuring array
const [players1, players2] = game.players;

// 2 rest pattern
const [gk, ...fieldPlayers] = players1;

// 3
const allPlayers = [...players1, ...players2];

// 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// 5
const { team1, x: draw, team2 } = { ...game.odds };

// 6
const printGoals = function (...any) {
  //console.log(`${any} The number of goals scored is ${any.length}`);
};

printGoals(...game.scored); */

// 7 logical operator in place of (if or ternary)
//team1 < team2 && console.log("Team 1 is more likely to win");

// Challenge 2

// 1
/* for (const [index, name] of game.scored.entries())
  console.log(`Goal ${index} : ${name}`); */

// 2
let odds = Object.values(game.odds);
console.log("ODSS :", odds);
let total = 0;

for (const odd of odds) {
  total += odd;
}

console.log(total / odds.length);

// 3
console.log(
  `Odd for victory ${game.team1} : ${game.odds.team1} \n Odd for draw : ${game.odds.x} \n Odd for victory ${game.team2} :  ${game.odds.team2}`
);

// Challenge 3

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [gameEvents];
