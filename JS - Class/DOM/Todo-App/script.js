//
function addListItem(text) {
  let ul = document.getElementById("item-list");
  let listContent = document.createTextNode(text);
  let li = document.createElement("li");
  let button = document.createElement("button");
  button.setAttribute("class", "remove-item btn-link text-red");
  let icon = document.createElement("i");
  icon.setAttribute("class", "fa-solid fa-xmark");

  li.appendChild(listContent);
  button.appendChild(icon);
  li.appendChild(button);

  ul.appendChild(li);
}

addListItem("test");
addListItem("test");
addListItem("test");
addListItem("test");
