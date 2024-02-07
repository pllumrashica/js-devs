//repeat
let repeatString = "hello";
let whiteSpace = " ";
let concatString = repeatString.concat(whiteSpace);
console.log(concatString.repeat(3));

//replace
let replaceString = "hello world";
console.log(replaceString);
console.log(replaceString.replace("world", "there"));

//slice
let sliceString = "character";
console.log(sliceString.slice(2));
console.log(sliceString.slice(2, 6));

//trim,removes all white spaces
let removeAll = "  hello  ";
console.log(removeAll, "with spaces");
console.log(removeAll.trim(), "without spaces");

//trimStart, removeswhite spaces at start of string
let removeStart = " hello";
console.log(removeStart.trimStart(), "without spaces");

//test
let trimEnd = "hello ";
console.log(trimEnd);
console.log(trimEnd.trimEnd());

//match, regex
let matchRegex="the rain in spain stays mainly in the plain";//ain
console.log(matchRegex.match(/ain/g));

//task
if (repeatWords > 1){
  console.log(repeatWords.repeat(3));
}

