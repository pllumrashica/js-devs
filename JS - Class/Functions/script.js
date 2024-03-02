// Functions in JavaScript
// Syntax
let x = 3;

function sum() {
  let y = 10; // this is local
  console.log(x, y);

  console.log(10 + 8);
}
// console.log(y); // this is local scope

console.log(x); // this is global scope

sum();

// Arguments and Parameters
function calculateSum(a, b /* this is argument */) {
  console.log(a - b);
}

calculateSum(10, 5 /* this is parameter */);

function calculateMultiply(a, b) {
  console.log(a * b, "this is multiply");
}

calculateMultiply(10, 5);

function calculateDivide(a, b) {
  console.log(a / b, "this is divide");
}

calculateDivide(20, 5);
