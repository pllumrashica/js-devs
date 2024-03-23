// DOM Multiple Selectors
let list = document.querySelectorAll(".list li");
console.log(list);
list.forEach((li, index) => {
  li.style.color = "red";
  li.style.listStyleType = "none";
  if (index === 3) {
    li.innerText = "Changed";
    li.style.color = "blue";
  }
});
// list.style.color = 'red'; // This doesn't work because its array.

let heading = document.getElementsByClassName("heading");
console.log(heading);

let convertCollectionToArray = Array.from(heading);
console.log(convertCollectionToArray);
convertCollectionToArray.forEach((head) => {
  head.style.color = "blue";
});

let headingThree = document.getElementsByTagName("h3");
console.log(headingThree);

let convertHeadingThree = Array.from(headingThree);

convertHeadingThree.forEach((head3) => {
  head3.style.color = "orange";
});
console.log(convertHeadingThree );
