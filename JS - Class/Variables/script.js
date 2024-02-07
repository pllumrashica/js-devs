//variables
//stroes, strings, number, true, false, undefined, null
//arrays, objects, NaN

// //strings
// let firstName = "Alaudin";
// console.log(firstName, "This is the first name");
// let myAge = "16";

//numbers
let age = 16;
console.log(age, "this is my age");

//undefined
let undefinedValue = undefined;

//we declared but not inicialized
let lastName;
console.log(lastName, "last name");
//here we inicialized, we reused the variable
lastName = "Haradinaj";
console.log(lastName, "last name");

//underscore way
let first_name = "alaudin";
console.log(first_name);

//booleans
let canView = true;

if (canView == true) { 
    console.log("you can view the page");
} else {
    console.log("you can't view the page");
}

//null
let scoreGame = null;

//my personal info
let firstName = "Alaudin";
console.log(firstName, "my name");

let myLastName = "Haradinaj";
console.log(myLastName, "my last name");

let myId = "23415246456";
console.log(myId);

let myAge = "16";
console.log(myAge, "my age");

let myEmail = "alaudinharadinaj1@gmail.com";
console.log(myEmail, "my email");

let phoneNumber = "044638823";
console.log(phoneNumber, "my phone number");

let myState = "Kosovo";
console.log(myState, "my state");

let myCity = "Vushtrri";
console.log(myCity, "my city");

if ((firstName || myLastName) && myId) {
    document.write("You are allowed to register");
} else {
    document.write("You are not allowed to register");
}