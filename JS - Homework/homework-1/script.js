// TASK ONE LENGTH 
let fullName = "pellumb rashica";
console.log(fullName.length); // the output is 15 because there are 15 characters at fullName variable

if (fullName.length < 20) {
 console.log("condition it's true")
} else {
    console.log("condition it's false")
}

// TASK TWO CONCAT
let firstName = "Pellumb";
let lastName = "Rashica";
console.log(firstName.concat(" " + lastName));

if (firstName.concat(" " + lastName).length > 2) {
   console.log("this is valid concat");
} else {
    console.log("this is not valid concat");
}

// TASK THREE CONCAT EASY METHOD
let emri = "Pellumb";
let mbiemri = "Rashica";
let mosha = 18;


if (mosha < 18) {
    console.log(`une jam ${emri} ${mbiemri} dhe jam ${mosha} vjec`);
} else {
    console.log(`une jam ${emri} ${mbiemri} dhe jam ${mosha - 1} vjec`);
}

// TASK FOUR INCLUDES
let email = "support@gmail.com";

if (email.includes("@") == true) {
    console.log("this is valid email");
} else {
    console.log("this is not valid email");
}

// TASK FIVE INDEXOF 
let userName = "pllum_rashica";

if (userName.indexOf("_") == 5) {
   console.log("username is correct")
} else {
    console.log("username isn't correct")
}

