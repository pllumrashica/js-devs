let clickEventBtn = document.getElementById("clickEvent");
let doubleClickEventBtn = document.getElementById("doubleClickEvent");

const clickEvent = () => {
  let car = document.getElementById("car");
  car.style.display = "block";
};

const doubleClickEvent = () => {
  let count = 0;
  let countWishList = document.getElementById("wishlistNumber");
  countWishList.textContent = count += 1;
  console.log("test");
};

clickEventBtn.addEventListener("click", clickEvent);
doubleClickEventBtn.addEventListener("dblclick", doubleClickEvent);
