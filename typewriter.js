"use strict";

// 1.  save text as a variable  ###
let rawText = document.querySelector("#typewriter").textContent;
console.log(rawText);
let typeWriterElement = document.querySelector("#typewriter");

// 2. clear the existing text  ###
document.querySelector("#typewriter").textContent = "";

// 3. reset N to 0   ###
let N = 1;

// 4. find the Nth letter ###

// extracting the text without the space from the begining/end
let firstLetter = rawText.indexOf("T");
let lastLetter = rawText.indexOf(".");

const text = rawText.substring(firstLetter, lastLetter + 1);
console.log(`Clean text is:
${text}`);

// N = text.substring(0, 1);
// console.log(`N is:_${text.substring(0, N)}_`);

// 5. display the Nth letter ###
document.querySelector("button").addEventListener("click", display);

function display() {
  document.querySelector("#typewriter").textContent = N;
  loop(text, N);
}

// 6. play sound
function playSound() {
  const keySound1 = document.getElementById("typekey1");
  keySound1.currentTime = 0;
  keySound1.play();
}

// 7.if N<length then N++

function loop(text, N) {
  if (N < text.length + 1) {
    typeWriterElement.textContent = text.substring(0, N);
    N++;
    playSound();
    // delay
    setTimeout(function () {
      loop(text, N);
    }, 400);
  }
  //   console.log(text.length);
  console.log(N);
  console.log(`N is:_${text.substring(0, N)}_`);
}
