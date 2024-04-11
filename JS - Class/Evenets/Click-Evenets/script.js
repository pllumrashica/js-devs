// addEventListener

// let button = document.getElementById("saveBtn");
// function save() {
//   let p = document.createElement("p");
//   let container = document.getElementById("container");
//   p.textContent = "Hello";
//   container.appendChild(p);
// }

let container = document.getElementById("container");
// Functions
// call back
function callBack() {
  console.log("click event");
}
// arrow function
const doubleClickEvent = () => {
  console.log("Double click event");
};

// context menu event
const contextMenuClickEvent = () => {
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  let title = document.createElement("h1");
  title.textContent = "Hello";
  title.setAttribute("class", "title");
  let description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolar mist Lorem ipsum dolar mist Lorem ipsum dolar mist";
  card.appendChild(title);
  card.appendChild(description);
  container.appendChild(card);
};

//wheel
const wheelEvent = () => {
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  let title = document.createElement("h1");
  title.textContent = "Hello";
  title.setAttribute("class", "title");
  let description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolar mist Lorem ipsum dolar mist Lorem ipsum dolar mist";
  card.appendChild(title);
  card.appendChild(description);
  container.appendChild(card);
};

// mouse down
const mouseDownClickEvent = () => {
  console.log("mouse down click event");
};

// mouse went up
const mouseUpClickEvent = () => {
  console.log("mouse up click event");
};

// mouse over
const mouseOverEvent = () => {
  console.log("mouse up click event");
  let button = document.getElementById("saveBtn");
  button.style.backgroundColor = "blue";
};

// mouse out
const mouseOutEvent = () => {
  console.log("mouse up click event");
  let button = document.getElementById("saveBtn");
  button.style.backgroundColor = "transparent";
};

saveBtn.addEventListener("click", callBack);
saveBtn.addEventListener("dblclick", doubleClickEvent);
saveBtn.addEventListener("contextmenu", contextMenuClickEvent);
saveBtn.addEventListener("mousedown", mouseDownClickEvent);
saveBtn.addEventListener("mouseup", mouseUpClickEvent);
saveBtn.addEventListener("wheel", wheelEvent);
saveBtn.addEventListener("mouseover", mouseOverEvent);
saveBtn.addEventListener("mouseout", mouseOutEvent);
