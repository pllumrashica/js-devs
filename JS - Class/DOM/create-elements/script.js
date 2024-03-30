// Create Elements in JavaScript
let container = document.getElementById("container");

console.log(container);

// Create Element is to add an element
let p = document.createElement("p");
console.log(p);

// createTextNode is to put text in a element
let paragraphText = document.createTextNode("This is content");
console.log(paragraphText);

// AppendChild is to add something to the parent
p.appendChild(paragraphText);

container.appendChild(p);

let ul = document.createElement("ul");
let list = document.createElement("li");
let listContent = document.createTextNode("list item");
list.appendChild(listContent);
list.style.listStyle = "none";

let link = document.createElement("a");
link.setAttribute("id", "firstLink");
link.setAttribute("class", "google");
link.setAttribute("href", "https://www.google.com/");

link.appendChild(listContent);
list.appendChild(link);
ul.appendChild(list);
container.appendChild(ul);

// Functions
function addNote(content, color) {
  let noteSection = document.createElement("section");
  noteSection.style.background = color;
  noteSection.setAttribute("class", "note");
  container.appendChild(noteSection);
  let noteTitle = document.createElement("h6");
  let noteContent = document.createTextNode(content);
  noteSection.appendChild(noteTitle);
  noteTitle.appendChild(noteContent);
}

// change the text from the function
addNote("Test 1", "red");
addNote("Test 2", "blue");
addNote("Test 3", "purple");
addNote("Test 4", "green");

// TASK ONE
function newRow(col, color) {
  let mainContainer = document.getElementById("mainContainer");

  let mainRow = document.createElement("div");
  mainRow.setAttribute("class", "mainRow");

  if (col === 2) {
    for (let i = 0; i <= 2; i++) {
      let column = document.createElement("div");
      column.setAttribute("class", "column");
      column.style.background = color;
      mainRow.appendChild(column);
      column.textContent = "TEST";
    }
  } else {
    console.log("test");
  }

  mainContainer.appendChild(mainRow);
}

newRow(2, "red");
