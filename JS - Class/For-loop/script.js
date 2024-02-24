// --- For Loop in JS ---
// Syntax
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// For Loop in Array
let subjects = ["math", "biology", "history"];

for (let i = 0; i < subjects.length; i++) {
  console.log(subjects[i]);
}

let numbers = [1, 4, 5, 6, 2, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  console.log((numbers[i] *= 2));
  // this is *= like numbers = numbers * 2;
}

// you can stop the loop whenever you want without seing the if statement
for (let i = 0; i <= 8; i++) {
  if (i === 4) {
    break;
  }

  console.log(i, "this is when you stop the loop");
}

// reverse loop
for (let i = 10; i > -1; i--) {
  console.log(i, "reverse loop");
}

// Continue skips one number that we put in if

for (let i = 0; i < 8; i++) {
  // [0,1,2]
  if (i === 6) {
    continue;
  }

  console.log(i, "Continue");
}

//
let arrayNumbers = [1, 2, 3, 4, 5, 6, 7];

for (let i = arrayNumbers.length; i > -1; i--) {
  console.log(arrayNumbers[i]);
}

// Tabelen e shumzimit detyr shtepie
