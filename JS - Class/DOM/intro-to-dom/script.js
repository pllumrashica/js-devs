// DOCUMENT OBJECT MODEL
// console.log(window);
// console.log(window.document);

// Console Direction
console.dir(document);
console.dir(document.links[1]);
console.dir(document.forms);
console.dir(document.forms[0]);
console.dir(document.images);

let firstTag = document.getElementById("firstTagId");
console.log(firstTag);
firstTag.innerText = "Hello";
firstTag.style.color = "red";
firstTag.style.background = "blue";
firstTag.style.fontSize = "59px";
