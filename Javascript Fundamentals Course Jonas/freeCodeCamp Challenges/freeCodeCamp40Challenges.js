// 40 JavaScript Projects for Beginners – Easy Ideas to Get Started Coding JS

// PROJECT 1: COLOR FLIPPER PROJECT

/*
Key concepts covered:

arrays
document.getElementById()
document.querySelector()
addEventListener()
document.body.style.backgroundColor
Math.floor()
Math.random()
array.length

*/

const btn = document.querySelector("#btn");
const color = document.getElementById("color-text");
const colors = ["red", "pink", "orange", "blue", "purple", "yellow", "gold"];

// event handler function

let currentColor = 0;
function changeBackground() {
  document.querySelector("body").style.backgroundColor = colors[currentColor];
  color.innerText = `${colors[currentColor].toUpperCase()}`;
  currentColor++;
  // logic to handle what happens it reaches end of array
}

btn.addEventListener("click", changeBackground);
