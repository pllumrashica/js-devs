let cards = [
  {
    id: 0,
    img: "./imgs/img-1.jpg",
    firstName: "Pellumb",
    lastName: "Rashica",
    age: 19,
    rendorNumber: 0,
  },
  {
    id: 1,
    img: "./imgs/img-1.jpg",
    firstName: "Amar",
    lastName: "Mejzini",
    age: 19,
    rendorNumber: 1,
  },
  {
    id: 2,
    img: "./imgs/img-1.jpg",
    firstName: "Omer",
    lastName: "Mulliqi",
    age: 19,
    rendorNumber: 2,
  },

  {
    id: 3,
    img: "./imgs/img-1.jpg",
    firstName: "Omer",
    lastName: "Mulliqi",
    age: 19,
    rendorNumber: 2,
  },

  {
    id: 4,
    img: "./imgs/img-1.jpg",
    firstName: "Omer",
    lastName: "Mulliqi",
    age: 19,
    rendorNumber: 2,
  },
  {
    id: 5,
    img: "./imgs/img-1.jpg",
    firstName: "Omer",
    lastName: "Mulliqi",
    age: 19,
    rendorNumber: 2,
  },
  {
    id: 6,
    img: "./imgs/img-1.jpg",
    firstName: "Omer",
    lastName: "Mulliqi",
    age: 19,
    rendorNumber: 2,
  },
  {
    id: 7,
    img: "./imgs/img-1.jpg",
    firstName: "Omer",
    lastName: "Mulliqi",
    age: 19,
    rendorNumber: 2,
  },
];

document.write(`<div class='row'>`);
for (let i = 0; i < cards.length; i++) {
  let color = "red";
  let colorBlue = "blue";
  let colorYellow = "yellow";
  let lastElement = cards[cards.length - 1];
  let mainForEach = `
    <div class='col'>
    <img class='icon' src="${cards[i].img}">
    <h2 class='fullName'>${cards[i].firstName} ${cards[i].lastName}</h2>
    <h3 class='age'>${cards[i].age}</h3>
    <h3 class='rendorNumber'>${cards[i].rendorNumber}</h3>
    </div>
    `;

  if (cards[i].id == 3) {
    mainForEach = `
    <div class='col' style="background-color: ${color}">
    <img class='icon' src="${cards[i].img}">
    <h2 class='fullName'>${cards[i].firstName} ${cards[i].lastName}</h2>
    <h3 class='age'>${cards[i].age}</h3>
    <h3 class='rendorNumber'>${cards[i].rendorNumber}</h3>
    </div>
    `;
  }

  if (cards[i].id == 5) {
    mainForEach = `
    <div class='col' style="background-color: ${colorBlue}">
    <img class='icon' src="${cards[i].img}">
    <h2 class='fullName'>${cards[i].firstName} ${cards[i].lastName}</h2>
    <h3 class='age'>${cards[i].age}</h3>
    <h3 class='rendorNumber'>${cards[i].rendorNumber}</h3>
    <h2>Kryetar i klases</h2>
    </div>
    `;
  }

  if (cards.slice(-1)) {
    mainForEach = `
    <div class='col' style="background-color: ${colorYellow}">
    <img class='icon' src="${cards[i].img}">
    <h2 class='fullName'>${cards[i].firstName} ${cards[i].lastName}</h2>
    <h3 class='age'>${cards[i].age}</h3>
    <h3 class='rendorNumber'>${cards[i].rendorNumber}</h3>
    </div>
    `;
  }

  document.write(mainForEach);
}

document.write(`</div>`);

// dsh
/* 
Te paraqiten puntoret e nje kompanie ne forme tabelore.
perdor for loop.
puntoret te paraqiten ne array me objects.
Objekti punetori ka keto veti:
Emri
Mbiemri
Mosha
Departmenti
Id
mungesa ne pune == number
Oret javore max 40 or ne jave

Nese puntori mungon 3 dite te behet rreshti i tabeles me ngjyr te kuqe.
Nesa puntori ka me shum se 40h per jave te vendoset nje text "bonus ekstra".


*/
