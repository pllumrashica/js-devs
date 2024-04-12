let clickEventBtn = document.getElementById("clickEvent");
let doubleClickEventBtn = document.getElementById("doubleClickEvent");
let contextMenuEventBtn = document.getElementById("contextMenuEventBtn");
let mouseDownEventBtn = document.getElementById("mouseDown");
let mouseUpEventBtn = document.getElementById("mouseUpEvent");
let mouseOverEventBtn = document.getElementById("mouseOver");
let mouseOutEventBtn = document.getElementById("mouseOutEvent");
let wheelEventBtn = document.getElementById("wheelEventBtn");

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

const contextMenuEvent = () => {
  let nav = document.getElementById("nav");
  nav.style.display = "block";
};

const mouseDownEvent = () => {
  let colBg = document.getElementById("changeBg");
  colBg.style.backgroundColor = "red";
};

const mouseUpEvent = () => {
  let colBg = document.getElementById("changeBgToBlue");
  colBg.style.backgroundColor = "blue";
};

const mouseOverEvent = () => {
  let colBgImg = document.getElementById("changeBgImg");
  colBgImg.style.background = "url(./imgs/bg.png)";
  colBgImg.style.backgroundSize = "100% 100%";
  colBgImg.style.transition = "all 350ms ease-in-out";
};

const mouseOutEvent = () => {
  let colRemoveBg = document.getElementById("removeBg");
  colRemoveBg.style.background = "rebeccapurple";
  console.log("test");
};

const wheelEvent = () => {
  let car2 = document.getElementById("car2");
  car2.style.display = "block";
};

clickEventBtn.addEventListener("click", clickEvent);
doubleClickEventBtn.addEventListener("dblclick", doubleClickEvent);
contextMenuEventBtn.addEventListener("contextmenu", contextMenuEvent);
mouseDownEventBtn.addEventListener("mousedown", mouseDownEvent);
mouseUpEventBtn.addEventListener("mouseup", mouseUpEvent);
mouseOverEventBtn.addEventListener("mouseover", mouseOverEvent);
mouseOutEventBtn.addEventListener("mouseout", mouseOutEvent);
wheelEventBtn.addEventListener("wheel", wheelEvent);
