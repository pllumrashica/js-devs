//sum of numbers
let sumNumOne = 14;
let sumNumTwo = 20;
console.log(typeof sumNumTwo);
console.log(sumNumOne + sumNumTwo);
console.log(sumNumOne - sumNumTwo);
console.log(sumNumOne * sumNumTwo);
console.log(sumNumOne / sumNumTwo);

//check infinity
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));

//NaN not a number
let notAnumber = 10 / "hello";
console.log(notAnumber);

//boolean to number
let trueValue = true;
console.log(trueValue);
console.log(Number(trueValue));

let falseValue = false;
console.log(falseValue);
console.log(Number(falseValue));

//string to number
let stringNumber = "20";
console.log(stringNumber, "string value");
//convert
console.log(Number(stringNumber), "number value");

//number to string
let numberString = "30";
console.log(numberString, "number");
console.log(numberString.toString(), "string");

//number to bimary(1001110); baza eshte 2
let numberBinary=60;
console.log(numberBinary.toString(2));

//decimal to hexdecimal 0-9 dhe prej a-f, ex #123abc;
let numberHex=100;
console.log(numberHex.toString(16));

//metoda toFixed(3);
let piNumber=Math.PI;
console.log(Math.PI);
console.log(piNumber.toFixed(2));

//d.sh-per te gjitha metodat kan me u punu kushte t endryshme me if-else,dhe te behen bashk metodat e
//stringut dhe numrav



