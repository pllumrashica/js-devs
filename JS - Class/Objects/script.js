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
let cars = [
  {
    id: 0,
    brand: "VW",
    type: "6",
    model: "2018",
    isDiesel: true,
  },
  {
    id: 1,
    brand: "VW",
    type: "5",
    model: "2018",
    isDiesel: true,
  },
  {
    id: 0,
    brand: "bmw",
    type: "540i",
    model: "2012",
    isDiesel: false,
  },
];

//
document.write(
  `<table><th>ID</th><th>Brand</th> <th>Type</th> <th>isDiesel</th>`
);

cars.forEach((car) => {
  document.write(
    `
        <tbody>
            <tr>
            <td>${car.id}</td>
            <td>${car.brand}</td>
            <td>${car.type}</td>
            <td>${car.isDiesel}</td>
            </tr>   
        </tbody>
        `
  );
  if (car.brand.indexOf("b") == 0) {
    document.write(
      `
        <tbody class="bmw">
            <tr>
            <td>${car.id}</td>
            <td>${car.brand}</td>
            <td>${car.type}</td>
            <td>${car.isDiesel}</td>
            </tr>   
        </tbody>
        `
    );
  }
});

document.write(`</table>`);
