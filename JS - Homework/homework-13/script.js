function addCard(imgSrc, titleContent, desc, btnText) {
  let container = document.getElementById("container");
  let row = document.getElementById("row");
  let col = document.createElement("div");
  col.setAttribute("class", "col");

  let img = document.createElement("img");
  img.setAttribute("src", imgSrc);
  img.setAttribute("class", "card-img");

  let title = document.createElement("h1");
  title.setAttribute("class", "title");
  title.innerText = titleContent;

  let description = document.createElement("p");
  description.setAttribute("class", "desc");
  description.innerText = desc;

  let input = document.createElement("input");
  input.setAttribute("class", "input");
  input.setAttribute("placeholder", "Your Name");

  const checkKeyPress = (e) => {
    if (e.code == "Enter") {
      alert("This card is clicked");
    }
    console.log(e);
  };
  input.addEventListener("keypress", checkKeyPress);

  let btnInside = document.createElement("button");
  btnInside.setAttribute("class", "btn-inside");
  btnInside.innerText = btnText;

  const changeCardBg = () => {
    function randomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      return `#${r.toString(16).padStart(2, "0")}${g
        .toString(16)
        .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
    }

    col.style.backgroundColor = randomColor();
    title.innerText = "Card Clicked";
  };

  btnInside.addEventListener("dblclick", changeCardBg);

  col.appendChild(img);
  col.appendChild(title);
  col.appendChild(description);
  col.appendChild(input);
  col.appendChild(btnInside);
  row.appendChild(col);
  container.appendChild(row);
}

let btn = document.getElementById("addCard");

btn.addEventListener("click", function () {
  addCard(
    "./imgs/andrea-mq-tIqu_dH3d_0-unsplash.jpg",
    "Card One",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    "Click"
  );
});
