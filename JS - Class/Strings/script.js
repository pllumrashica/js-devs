// //sum of strings
// let stringOne = "hello";
// let stringTwo = "world";
// console.log(stringOne + " " + stringTwo);

// //length of string
// let lengthString = "hello here";
// console.log(lengthString.length);

// //taskOne
// let firstName = "Omer";
// if (firstName.length < 2) {
//   alert("invalid first name");
// } else {
//   alert("correct");
// }

// //char at, finds character un specific position
// let charAtStrings="hello";
// console.log(charAtStrings.charAt(4));

// //concat, sum of strings
// let firstConcatString="Omer";
// let secondConcatString="Mulliqi";
// console.log(firstConcatString);
// console.log(secondConcatString);
// console.log(firstConcatString.concat(" " + secondConcatString));
//task
let firstName = "Omer";
let lastName = "Mulliqi";
let age = "16";
let city = "vushtrri";
// console.log("Une jam" + " " + firstName + " " + lastName + " " + "i kam" + " " + age + " " + "dhe jetoj ne" + " " + city)
console.log(
  `une jam ${firstName} ${lastName} dhe i kam ${age} dhe jetoj ne ${city}`
);

//includes
let includeString = "hello world";
console.log(includeString.includes("hello"));

//indexof
let indexOfString = "hello world";
console.log(indexOfString.indexOf("o"));

//per te gjitha metod qe i mesuam te behen detyra
//me condition (if else)

//uppercase
let lowercaseStrig = "HELLO WORLD";
console.log(lowercaseStrig.toLowerCase());

//trim,removes all white spaces
let removeAll = "  hello  ";
console.log(removeAll, "with spaces");
console.log(removeAll.trim(), "without spaces");

//trimStart, removeswhite spaces at start of string
let removeStart = "hello";
console.log(removeStart.trimStart(), "without spaces");

//repeat
let repeatString = "hello";
console.log(repeatString)
console.log(repeatString.repeat(10));

//replace, replace strings
let replaceString   = "hello world";
console.log(replaceString);
console.log(replaceString.replace("world", "there"));

//i kemi 5 fjali me document.write
//per te gjitha metodat e stringut te krijohen kushte te cilat duhette shfaqe  n html.
//per te gjith ktashmbuj te ilustrohen me ngjyra te ndryshme
document.write("<p style='color:red'>Hello</p>")