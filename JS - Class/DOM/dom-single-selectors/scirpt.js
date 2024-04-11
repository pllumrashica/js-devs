// getElementById
// Single Selectors
let getElementById = document.getElementById("getElementById");
getElementById.style.color = "red";
getElementById.style.backgroundColor = "orange";
// getElementById.innerText = "Changed Text in Script";
getElementById.textContent = "Changed Text in Script";

// querySelector
// class
let querySelectorClass = document.querySelector(".querySelectorClass");
console.log(querySelectorClass);

// id
let querySelectorId = document.querySelector("#querySelectorId");
console.log(querySelectorId);

// tag
let querySelectorTag = document.querySelector("h1");
console.log(querySelectorTag);

// PSEUDO Class
let listItem = document.querySelector(".nav-menu li:nth-child(3)");
listItem.textContent = "Changed list item";
listItem.style.fontSize = "30px";

let listItemFirst = document.querySelector(".nav-menu li:first-child");
listItemFirst.textContent = "Changed list item";
listItemFirst.style.fontSize = "30px";
listItemFirst.style.color = "red";

let listItemLast = document.querySelector(".nav-menu li:last-child");
listItemLast.textContent = "Changed list item";
listItemLast.style.fontSize = "30px";
listItemLast.style.color = "blue";

// ADD ATTRIBUTE
let addAttribute = document.querySelector("h2 > a");
addAttribute.setAttribute("id", "atributeId");
addAttribute.textContent = "Google";
addAttribute.setAttribute("href", "https://www.google.com");
console.log(addAttribute);
