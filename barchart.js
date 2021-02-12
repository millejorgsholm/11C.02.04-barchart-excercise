"use strict";

window.addEventListener("load", initArray);

//The array model
let model = [];

function initArray() {
  //Adding 40 random numbers to the array "model"
  for (let counter = 0; counter < 40; counter++) {
    model[counter] = getNumbers();
  }
  loop();
  showData();
}

function loop() {
  //Divding the 40 random numbers from the array -> a number to each bar
  for (let counter = 0; counter < 40; counter++) {
    document.getElementById("bar_container").getElementsByClassName("bar")[
      counter
    ].style.height = model[counter] + "px";
  }
}

function getNumbers() {
  //Making a random number from 0 to 32
  const randomNumber = Math.floor(Math.random() * 32);
  console.log(randomNumber);
  return randomNumber;
}

function showData() {
  //Calling the functions modifyModel and loop
  //Setting the timeout to 1s
  modifyModel();
  loop();
  setTimeout(showData, 500);
}

function modifyModel() {
  //Adding a number to the end of the array
  model.push(getNumbers());

  //Pointing at the first number in the array and thrashing/deleting it
  model.shift();
}
