function addRowAndCols(cols) {
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

  let container = document.getElementById("container");
  let row = document.createElement("div");
  row.setAttribute("class", "row");

  console.log(cards);

  for (let i = 1; i <= cols; i++) {
    let col = document.createElement("div");
    col.setAttribute("class", "col");

    if (i == 5) {
      let headingOne = document.createElement("h1");
      headingOne.setAttribute("class", "title");
      let colContent = document.createTextNode(`${cards[4].title}`);
      headingOne.appendChild(colContent);

      let img = document.createElement("img");
      img.setAttribute("src", `${cards[4].img}`);
      img.setAttribute("class", "card-img");
      col.appendChild(headingOne);
      col.appendChild(img);

      let description = document.createElement("p");
      description.setAttribute("class", "card-desc");
      let descriptionContent = document.createTextNode(`${cards[4].desc}`);
      description.appendChild(descriptionContent);
      col.appendChild(description);

      let insideRow = document.createElement("div");
      insideRow.setAttribute("class", "inside-row");

      let buttonsContainer = document.createElement("div");
      buttonsContainer.setAttribute("class", "buttons");
      let buttons = document.createTextNode(
        `${cards[4].btn1} ${cards[4].btn2}`
      );
      buttonsContainer.appendChild(buttons);
      insideRow.appendChild(buttonsContainer);
      col.appendChild(insideRow);
    } else if (i == 4) {
      headingOne = document.createElement("h1");
      headingOne.setAttribute("class", "title");
      let colContent = document.createTextNode(`${cards[3].title}`);
      headingOne.appendChild(colContent);

      let img = document.createElement("img");
      img.setAttribute("src", `${cards[3].img}`);
      img.setAttribute("class", "card-img");
      col.appendChild(headingOne);
      col.appendChild(img);

      let description = document.createElement("p");
      description.setAttribute("class", "card-desc");
      let descriptionContent = document.createTextNode(`${cards[3].desc}`);
      description.appendChild(descriptionContent);
      col.appendChild(description);

      let insideRow = document.createElement("div");
      insideRow.setAttribute("class", "inside-row");

      let buttonsContainer = document.createElement("div");
      buttonsContainer.setAttribute("class", "buttons");
      let buttons = document.createTextNode(
        `${cards[3].btn1} ${cards[3].btn2}`
      );
      buttonsContainer.appendChild(buttons);
      insideRow.appendChild(buttonsContainer);
      col.appendChild(insideRow);
    } else if (i == 3) {
      let headingOne = document.createElement("h1");
      headingOne.setAttribute("class", "title");
      let colContent = document.createTextNode(`${cards[2].title}`);
      headingOne.appendChild(colContent);

      let img = document.createElement("img");
      img.setAttribute("src", `${cards[2].img}`);
      img.setAttribute("class", "card-img");
      col.appendChild(headingOne);
      col.appendChild(img);

      let description = document.createElement("p");
      description.setAttribute("class", "card-desc");
      let descriptionContent = document.createTextNode(`${cards[2].desc}`);
      description.appendChild(descriptionContent);
      col.appendChild(description);

      let insideRow = document.createElement("div");
      insideRow.setAttribute("class", "inside-row");

      let buttonsContainer = document.createElement("div");
      buttonsContainer.setAttribute("class", "buttons");
      let buttons = document.createTextNode(
        `${cards[2].btn1} ${cards[2].btn2}`
      );
      buttonsContainer.appendChild(buttons);
      insideRow.appendChild(buttonsContainer);
      col.appendChild(insideRow);
    } else if (i == 2) {
      let headingOne = document.createElement("h1");
      headingOne.setAttribute("class", "title");
      let colContent = document.createTextNode(`${cards[1].title}`);
      headingOne.appendChild(colContent);

      let img = document.createElement("img");
      img.setAttribute("src", `${cards[1].img}`);
      img.setAttribute("class", "card-img");
      col.appendChild(headingOne);
      col.appendChild(img);

      let description = document.createElement("p");
      description.setAttribute("class", "card-desc");
      let descriptionContent = document.createTextNode(`${cards[1].desc}`);
      description.appendChild(descriptionContent);
      col.appendChild(description);

      let insideRow = document.createElement("div");
      insideRow.setAttribute("class", "inside-row");

      let buttonsContainer = document.createElement("div");
      buttonsContainer.setAttribute("class", "buttons");
      let buttons = document.createTextNode(
        `${cards[1].btn1} ${cards[1].btn2}`
      );
      buttonsContainer.appendChild(buttons);
      insideRow.appendChild(buttonsContainer);
      col.appendChild(insideRow);
    } else if (i == 1) {
      let headingOne = document.createElement("h1");
      headingOne.setAttribute("class", "title");
      let colContent = document.createTextNode(`${cards[0].title}`);
      headingOne.appendChild(colContent);

      let img = document.createElement("img");
      img.setAttribute("src", `${cards[0].img}`);
      img.setAttribute("class", "card-img");
      col.appendChild(headingOne);
      col.appendChild(img);

      let description = document.createElement("p");
      description.setAttribute("class", "card-desc");
      let descriptionContent = document.createTextNode(`${cards[0].desc}`);
      description.appendChild(descriptionContent);
      col.appendChild(description);

      let insideRow = document.createElement("div");
      insideRow.setAttribute("class", "inside-row");

      let buttonsContainer = document.createElement("div");
      buttonsContainer.setAttribute("class", "buttons");
      let buttons = document.createTextNode(
        `${cards[0].btn1} ${cards[0].btn2}`
      );
      buttonsContainer.appendChild(buttons);
      insideRow.appendChild(buttonsContainer);
      col.appendChild(insideRow);
    } else {
      console.log("not working");
    }
    // let colContent = document.createTextNode(`${cards[1].title}`);
    // col.appendChild(colContent);
    row.appendChild(col);
  }
  container.appendChild(row);
}

addRowAndCols(5);
addRowAndCols(5);
