// Objects in JavaScript
let car = {
  color: "blue",
  brand: "vw",
  model: "6",
  isDiesel: true,
  numberPs: 130,
};
console.log(car);

console.log(car.numberPs, "before");

//edit propertie
car.numberPs = 200;
console.log(car.numberPs, "after");
// add new propertie
car.seats = 4;
console.log(car);

// delete
delete car.color;
console.log(car);

// Task
