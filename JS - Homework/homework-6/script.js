let cars = [
  {
    id: 0,
    img: "./imgs/vw-model-6.png",
    brand: "vw".toUpperCase(),
    type: "6",
    model: "2018",
    isDiesel: true,
  },
  {
    id: 1,
    img: "./imgs/vw-model-5.png",
    brand: "vw".toUpperCase(),
    type: "5",
    model: "2012",
    isDiesel: true,
  },
  {
    id: 2,
    img: "./imgs/bmw-model-m3.png",
    brand: "bmw".toUpperCase(),
    type: "M3",
    model: "2018",
    isDiesel: false,
  },
  {
    id: 3,
    img: "./imgs/audi-model-r8.png",
    brand: "Audi".toUpperCase(),
    type: "R8",
    model: "2016  ",
    isDiesel: false,
  },
];

//
document.write(
  `<table><th>ID</th><th>Brand</th> <th>Year</th> <th>Type</th> <th>isDiesel</th>`
);

cars.forEach((car) => {
  let mainForEach = `
            <tr>
            <td>${car.id}</td>
            <td class='img-and-title'>
            <img src='${car.img}'>
            ${car.brand}
            </td>
            <td>${car.model}</td>
            <td>${car.type}</td>
            <td>${car.isDiesel}</td>
            </tr>   
`;
  let checkBmwUppercase = car.brand.indexOf("B");

  if (checkBmwUppercase == 0) {
    mainForEach = `
            <tr class='bmw'>
            <td>${car.id}</td>
            <td class='img-and-title'>
            <img src='${car.img}'>
            ${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.type}</td>
            <td>${car.isDiesel}</td>
            </tr>   
`;
  }

  let checkVw = car.brand.indexOf("V");

  if (checkVw == 0) {
    mainForEach = `
            <tr class='vw'>
            <td>${car.id}</td>
            <td class='img-and-title'>
            <img src='${car.img}'>
            ${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.type}</td>
            <td>${car.isDiesel}</td>
            </tr>   
`;
  }

  let checkAudi = car.brand.indexOf("A");

  if (checkAudi == 0) {
    mainForEach = `
            <tr class='audi'>
            <td>${car.id}</td>
            <td class='img-and-title'>
            <img src='${car.img}'>
            ${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.type}</td>
            <td>${car.isDiesel}</td>
            </tr>   
`;
  }

  document.write(mainForEach);
});

document.write(`</table>`);
