// addEventListener

let button = document.getElementById("saveBtn");
function save() {
  let p = document.createElement("p");
  let container = document.getElementById("container");
  p.textContent = "Hello";
  container.appendChild(p);
}

saveBtn.addEventListener("click", save);

// TASK
