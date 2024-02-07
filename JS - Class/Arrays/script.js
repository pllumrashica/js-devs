//synatx, empty array
let firstArraty = [];

//string array
let stringArray = ['name', 'surname', 'city'];
console.log(stringArray);

//number array
let numberArray = [1, 2, 3, 4, 5];
console.log(numberArray);

//array any=---->string, number, objects, array, null, undefined, bolean, NaN
let anyArry = ['name', 20, {}, [1, 2, 3], null, undefined, true, false, NaN];
console.log(anyArry);

//length of array=---->string, number, objects, array, null, undefined, bolean, NaN
let lengthArry = ['name', 20, {}, [1, 2, 3], null, undefined, true, false, NaN];
console.log(lengthArry.length);

let findElementyArray = ['name', 20, {}, [1, 2, 3], null, undefined, true, false, NaN];
console.log(findElementyArray[4]);

//push(), add new element at the end of array
let pushArray = [1, 2, 3, 4, 5];
console.log(pushArray);
pushArray.push(6);
console.log(pushArray);

let string = ["hello"];
console.log(string);
string.push("how");
console.log(string);

//unshift() adds new element at the begging 
let unshiftArray = [2, 3, 4, 5];
console.log(unshiftArray, 'before');
unshiftArray.unshift(1);
console.log(unshiftArray, 'after');

let stringTwo = ["hello"];
console.log(stringTwo);
stringTwo.unshift("how");
console.log(stringTwo);

//pop(), remuves element at the end of array
let popArray = [1, 2, 3, 4, 5];
console.log(popArray, 'before');
popArray.pop();
console.log(popArray, 'after');

//
let shiftArray = [1, 2, 3, 4, 5];
console.log(shiftArray, 'before');
shiftArray.shift();
console.log(shiftArray, 'after');

// 
let numbers = [1, 2, 3, 4, 5];
numberArray.forEach(number => {
    console.log(number);
})

let products = [
    {
        id: 1,
        name: 'product one',
        cmimi: 120,
        desc: 'lorem impus'
    },
    {
        id: 2,
        name: 'product two',
        cmimi: 120,
        desc: 'lorem impus'
    },
    {
        id: 3,
        name: 'product three',
        cmimi: 120,
        desc: 'lorem impus'
    },
    {
        id: 4,
        name: 'product four',
        cmimi: 120,
        desc: 'lorem impus'
    }
]

//sort
let sortArray = [3,4,5,2,6,1];
console.log(sortArray);
console.log(sortArray.sort());

//reverse
let reverseArray = [1,2,3,4,5,6];
console.log(reverseArray);
console.log(reverseArray.reverse());

//includes
let includesArray=['hello', 'world', 'there'];
console.log(includesArray.includes('hello'));

//inedexoff
let indexOffArray =['hello', 'world', 'there'];
console.log(indexOffArray.indexOf('world'));
let test=indexOffArray.indexOf('world');

if (test != -1){
console.log('is existing');
}else{
    console.log('is not existing');
}

