let button = document.getElementById("clickBtn");
console.log(button);

const eventObject = (event) => {
  console.log("clicked", event);
};

button.addEventListener("click", eventObject);
