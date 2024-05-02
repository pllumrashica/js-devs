let form = document.getElementById("addListForm");
let addTodoList = document.getElementById("addList");
let addTodoListInput = document.getElementById("addTodoListInput");

const registerTodoList = (e) => {
  e.preventDefault();
  let inputValue = addTodoListInput.value;
  addTodoListFunction(inputValue);

  addTodoListInput.value = "";
};

const addTodoListFunction = (task) => {
  let ul = document.getElementById("listItems");
  let list = document.createElement("li");
  list.textContent = task;

  let removeBtn = document.createElement("button");
  removeBtn.setAttribute("id", "removeList");
  removeBtn.innerHTML = "Remove";
  document.getElementById("listItems").addEventListener("click", (e) => {
    if (e.target.id === "removeList") {
      e.target.parentElement.remove();
    }
  });

  list.appendChild(removeBtn);
  ul.appendChild(list);
};

addTodoList.addEventListener("click", registerTodoList);
