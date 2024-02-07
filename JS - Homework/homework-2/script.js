// TASK 1 LowerCase to UpperCase
let lowerCaseString = "pellumb";
document.write('<h1 style="color: blue;">' + lowerCaseString.toUpperCase() + '</h1>');

// TASK 2 Remove White Space
let removeAll = "   Rashica    "
document.write('<h1 style="color: red;">' + removeAll.trim() + '</h1>');

// TASK 3 Remove Start White Space
let removeStart = "    I lindur me 05/02/2005      "
document.write('<h1 style="color: green;">' + removeStart.trimStart() + '</h1>');

// TASK 4 Repeat 
let repeatAge = "18";
document.write('<h1 style="color: yellow;">' + repeatAge.repeat(14) + '</h1>');

// TASK 5 REPLACE STRINGS
let replaceString = "Pershendetje t'Gjithve";
document.write('<h1 style="color: purple;">' + replaceString.replace("Pershendetje", "Mirdita") + '</h1>');
