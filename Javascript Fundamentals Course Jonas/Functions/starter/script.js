'use strict';

/*
const bookings = [];

const createBooking = function (flightNum, price = 199, passengerNum = 1) {
  // ES5 way of shortcircuiting (setting default values for values that can not be zero or undefined) ES6 way done in arguments
  //   price = price || 199;
  //   passengerNum = passengerNum || 1;

  const booking = {
    flightNum,
    price,
    passengerNum,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking();

HIGHER ORDER FUNCTIONS -> those which return another function or take functions as arguments

const chef = function (meal) {
  return function (ingredients) {
    console.log(`Today's meal: ${meal} with the ingredients \n ${ingredients}`);
  };
};

chef('Supper')('hupfu, nemuriwo');

const chefDombo = meal => {
  return ingredients => {
    console.log(`Meal is: ${meal} and Ingredients are: ${ingredients}`);
  };
};

chefDombo('arrowFunctions')('\n Dombo the codist');

*/

/*

Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section �
GOOD LUCK �

*/

const pollBtn = document.getElementById('poll');

const poll = {
  type: prompt(
    "How do you want the answers to be displayed 'array' or 'string"
  ),
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = prompt(
      'What is your favourite programming language? \n0: JavaScript\n1: Python\n2: Rust\n3: C++'
    );

    answer = Number(answer);

    //Check if answer is a number and is below 4
    if (answer < 4) {
      this.answers[answer] += 1;
    } else {
      alert('Answer should be a number below 4 please reselect');
    }
    this.displayResults();
  },
  displayResults(type) {
    if (this.type == 'array') {
      console.log(this.answers);
    } else if (this.type == 'string') {
      console.log(
        `Poll results are ${this.answers[0]},${this.answers[1]},${this.answers[2]},${this.answers[3]} `
      );
    } else {
      alert("Choose between 'string' and 'array'");
    }
  },
};

// Call ANSWER METHOD WHEN USER CLICKS POLL BTN
function regAnswer() {
  poll.registerNewAnswer();
}
pollBtn.addEventListener('click', regAnswer);

// Test data for bonus part:
const Data1 = { answers: [5, 2, 3] };
const Data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call(Data1, 'string');
