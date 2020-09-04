"use strict";

let numbers = [];
const maxNr = 100;
const arrayLength = 10;

doCountingArray();

function doCountingArray() {
  for (let i = 0; i <= maxNr; i++) {
    doCountingArrayLoop(i);
  }
}

function doCountingArrayLoop(i) {
  setTimeout(() => {
    console.clear();
    numbers.unshift(i);
    if (numbers.length > arrayLength) {
      numbers.pop();
    }
    console.log(numbers);
  }, 1000 * i);
}
