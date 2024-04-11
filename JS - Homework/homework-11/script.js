let cards = [
  {
    id: 1,
    title: "test 1",
    img: "./imgs/andrea-mq-tIqu_dH3d_0-unsplash.jpg",
    desc: "Far far away,behind the word mountans, far from the countries Vokalia and Consnantia,there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semntics, a large language ocean.",
    btn1: "LIKE",
    btn2: "Share",
  },
  {
    id: 2,
    title: "Card 2",
    img: "./imgs/bastian-riccardi-yb4n_LBtDY4-unsplash.jpg",
    desc: "Far far away,behind the word mountans, far from the countries Vokalia and Consnantia,there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semntics, a large language ocean.",
    btn1: "LIKE",
    btn2: "Share",
  },
  {
    id: 3,
    title: "Card 3",
    img: "./imgs/daniel-sessler-9GYrluZP4-4-unsplash.jpg",
    desc: "Far far away,behind the word mountans, far from the countries Vokalia and Consnantia,there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semntics, a large language ocean.",
    btn1: "LIKE",
    btn2: "Share",
  },
  {
    id: 4,
    title: "Card 4",
    img: "./imgs/eberhard-grossgasteiger-cdc35Juktik-unsplash.jpg",
    desc: "Far far away,behind the word mountans, far from the countries Vokalia and Consnantia,there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semntics, a large language ocean.",
    btn1: "LIKE",
    btn2: "Share",
  },
  {
    id: 5,
    title: "Card 5",
    img: "./imgs/iwin-9lVdzDECVqk-unsplash.jpg",
    desc: "Far far away,behind the word mountans, far from the countries Vokalia and Consnantia,there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semntics, a large language ocean.",
    btn1: "LIKE",
    btn2: "Share",
  },
];

let colors = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "pink",
  "coral",
  "aqua",
  "cadetblue",
  "yellow",
];

let currentIndex = 0;

function addRowAndCols() {
  let container = document.getElementById("container");
  let row = document.getElementById("row");
  if (!row) {
    row = document.createElement("div");
    row.id = "row";
    row.classList.add("row");
    container.appendChild(row);
  }

  let col = document.createElement("div");
  col.classList.add("col");

  let card = cards[currentIndex];
  let cardContent = document.createElement("div");
  cardContent.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <img src="${card.img}" class="card-img" alt="${card.title}">
        <p class="card-text">${card.desc}</p>
        <button class="btn btn-primary">${card.btn1}</button>
        <button class="btn btn-secondary">${card.btn2}</button>
    </div>
  `;

  cardContent.style.backgroundColor = colors[currentIndex % colors.length];

  col.appendChild(cardContent);
  row.appendChild(col);

  currentIndex = (currentIndex + 1) % cards.length;
}

let button = document.getElementById("addCard");
button.addEventListener("click", addRowAndCols);
