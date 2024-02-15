// Logic Operators
// || ose (or)
// 0 -> false , 1 -> true,
// 0 0 => 0 || 0 ==> false(0)
// 0 1 => 0 || 1 ==> true(1)
// 1 0 => 1 || 0 ==> true(1)
// 1 1 => 1 || 1 ==> true(1)

// && dhe (and)

// 0 0 => 0 || 0 ==> false(0)
// 0 1 => 0 || 1 ==> false(0)
// 1 0 => 1 || 0 ==> false(0)
// 1 1 => 1 || 1 ==> true(1)

if (false || false) {
  console.log("If", "with or");
} else {
  console.log("else", "with or");
}

if (false || true) {
  console.log("If", "with or");
} else {
  console.log("else", "with or");
}

if (true || false) {
  console.log("If", "with or");
} else {
  console.log("else", "with or");
}

if (true || true) {
  console.log("If", "with or");
} else {
  console.log("else", "with or");
}

// && dhe , and
if (false && false) {
  console.log("If", "with and");
} else {
  console.log("else", "with and");
}

if (false && true) {
  console.log("If", "with and");
} else {
  console.log("else", "with and");
}

if (true && false) {
  console.log("If", "with and");
} else {
  console.log("else", "with and");
}

if (true && true) {
  console.log("If", "with and");
} else {
  console.log("else", "with and");
}

// if
let x = 3;

if (x > 3) {
  document.write(`<h1>This is less then 3</h1>`);
} else if (x > 5 || x <= 3) {
  document.write(`<h1>This is less then 3 and more then 5</h1>`);
} else {
  console.log("nothing");
}

// TASK
let firstName = "Pellumb";
let lastName = "Rashica";
let age = 19;
//firstName[0] === firstName[0].toUpperCase()
if (age > 18 && firstName[0] === firstName[0].toUpperCase()) {
  document.write(`<h1>Ju jeni nder 18 vite</h1>`);
} else if (age > 18 && firstName.includes("a")) {
  console.log("Ju keni emrin me shkronjen a");
} else if (lastName.length < 2 && age < 18) {
  console.log("Mbiemri juaj eshte jo i vlefshem");
} else {
  console.log("Ju nuk jeni te perzgjedhur");
}
