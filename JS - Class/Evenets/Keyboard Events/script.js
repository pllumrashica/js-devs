// Keyboard Events
let keyPressInput = document.getElementById("keyPress");
let keyPressUpInput = document.getElementById("keyPressUp");
let keyPressDownInput = document.getElementById("keyPressDown");
let keyPressDownEventTwo = document.getElementById("keyPressDown2");

const onKeyPress = () => {
  keyPressInput.style.background = "Red";
};

const onKeyUpPress = () => {
  keyPressUpInput.style.background = "Blue";
};
const onKeyDownPress = () => {
  keyPressDownInput.style.background = "Green";
};

const onKeyPressTwo = (event) => {
  if (event.key == "d") {
    console.log("You pressed d");
  }
};

keyPressInput.addEventListener("keypress", onKeyPress);
keyPressUpInput.addEventListener("keyup", onKeyUpPress);
keyPressDownInput.addEventListener("keydown", onKeyDownPress);
keyPressDownEventTwo.addEventListener("keypress", onKeyPressTwo);
