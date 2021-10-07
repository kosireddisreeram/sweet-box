"use strict";
// console.log(document.querySelector(".message").textContent);
// console.log((document.querySelector(".message").textContent = "ho"));//dom manipulation

// handling click events:
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score=20; 
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "no number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "correct";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "too high";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "too Low";
  }
});
