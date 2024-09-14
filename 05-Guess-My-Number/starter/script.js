'use strict';

let secNumber = (document.querySelector('.number').textContent = Math.trunc(
  Math.random() * 20 + 1
));
let score = (document.querySelector('.score').textContent = 60);

document.querySelector('.check').addEventListener('click', function () {
  const input = Number(document.querySelector('.guess').value);
  score--;

  if (!input) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (input === secNumber) {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.message').textContent = 'Congratulations';
    document.querySelector('.number').style.width = '30rem';
  } else if (input < secNumber) {
    document.querySelector('.message').textContent = 'number too low';
    score -= 1;
  } else if (input > secNumber) {
    document.querySelector('.message').textContent = 'number too high';
    score--;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'red';
});
