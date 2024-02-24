// If Else Statements - Examples

// Example - 1
let passwordOne = "Pllumi123";
let passwordLength = passwordOne.length;

if (passwordLength < 2) {
  console.log("Password is invalid");
} else {
  console.log("Password is good");
}

// Example - 2
let passwordTwo = "Ismet@";
let passwordTwoInclude = passwordTwo.includes("@");

if (passwordTwoInclude == true) {
  console.log("This is valid");
} else {
  console.log("This is not valid");
}

// Example - 3
let passsordThree = "Pllumi";
let passsordThreeLength = passsordThree.length;

let passsordThreeInclude = passsordThree.includes("#");

if (passsordThreeLength >= 3 && !passsordThreeInclude) {
  console.log("Pw e ka length ok por nuk ka ndonje karakter special");
} else if (
  passsordThreeLength >= 3 &&
  passsordThreeLength < 30 &&
  passsordThreeInclude == true
) {
  console.log("Pw e ka length ok por ka ndonje karakter speical");
} else {
  console.log("Pw eshte jo valid");
}

// Example - 4
let passwordFour = ".Pellumb";
let passwordFourLength = passwordFour.length;
let passwordFourIncludes = passwordFour[0].includes(".");

if (passwordFourLength < 3 && passwordFourIncludes) {
  console.log("Passwordi nuk eshte ne rregull");
} else if (
  passwordFourLength > 3 && passwordFourIncludes && (passwordFour.trimStart() || passwordFour.trimEnd())
) {
  console.log("Passswordi eshte invalid");
} else if (passwordFourLength > 3 && passwordFourIncludes == false) {
  console.log("Passwordi osht ok");
} else {
  console.log("Nuk keni shkruar asnje karakter");
}
