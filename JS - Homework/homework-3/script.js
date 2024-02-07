// TASK ONE LENGTH - 4 Examples
// Password must be 8-14characters
let userPassword = "pllumrashica1";

if((userPassword.length > 8) && (userPassword.length < 14)) {
    console.log("Exellent Password");
} else {
    console.log("Your password doesn't meet the requirements");
}

//
let message = "Hello, how are you are fine? Cause i need to talk with you."

if(message.length > 20) {
    console.log("You can send your message");
} else {
    console.log("your message is too long");
}

//
let phoneNumber = "+38345967554";
if(phoneNumber.length > 12) {
    console.log("Your phone number is correct");
} else {
    console.log("Your phone number isn't correct");
}  

// 
let userName = "pllumrashica_";
if ((userName.length < 14) && (userName.length > 6 )) {
    console.log("Your username meets the requairements");
} else {
    console.log("Your username dosen't meet the requairements");
}

// TASK TWO INCLUDES - 4 Examples
let fullName = "Pllum Rashica"

if(fullName.includes("1") || fullName.includes("2") || fullName.includes("3") || fullName.includes("4") || fullName.includes("5") || fullName.includes("6") || fullName.includes("7") || fullName.includes("8") || fullName.includes("9") || fullName.includes("0")) {
    console.log("you cant write numbers on name");
} else {
    console.log("your name is", fullName);
}

//
let checkEmail = "pllumrashica@gmail.com";

if(checkEmail.includes("@") && checkEmail.includes(".com")) {
    console.log("correct email");
} else {
    console.log("invalid email");
}

// 
let checkPassword = "Pllumi ";

if(checkPassword.includes(" ")) {
    console.log("you have a white space on your password");
} else {
    console.log("you don't have any white space on your password");   
}

// 
let checkPhoneNumber = "+38345967554";

if (checkPhoneNumber.includes("+383")) {
    console.log("your phone number has Kosovo prefix");
} else {
    console.log("you need to write prefix exp +383");
}

// TASK THREE indexOf - 4 EXAMPLES
let userNameAccount = "@pllumy";

if(userNameAccount.indexOf("@") == 0) {
    console.log("Type your password");
} else {
    console.log("This account doesn't exist");
}

// 
let myName = "Pellumb";

if(myName.indexOf("P") == 0) {
    console.log(myName.toUpperCase());
} else {
    console.log(myName.toLowerCase());
}

// 
let myUserName = "4Pllumi";

if(myUserName.indexOf("0") == 0 || myUserName.indexOf("1") == 0 || myUserName.indexOf("2") == 0 || myUserName.indexOf("3") == 0 || myUserName.indexOf("4") == 0 || myUserName.indexOf("5") == 0 || myUserName.indexOf("6") == 0 || myUserName.indexOf("7") == 0 || myUserName.indexOf("8") == 0 || myUserName.indexOf("9") == 0) {
    console.log("your username can't start with number");
} else {
    console.log("you username is good");
}

//

