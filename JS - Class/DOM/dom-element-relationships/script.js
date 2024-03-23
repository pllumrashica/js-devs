// DOM Element Relationships
let list = document.getElementById("listId");
console.log(list);

// First Child
let firstChild = list.firstElementChild;
console.log(firstChild);

// Last Child
let lastChild = list.lastElementChild;
console.log(lastChild);

// Middle Child
let middleChild = firstChild.nextElementSibling;
console.log(middleChild);

// Parent
let parent = middleChild.parentElement;
console.log(parent);
