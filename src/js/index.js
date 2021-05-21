"use strict";

console.log("it works!");

let openMouth = true;

document.addEventListener("click", () => {
  const entity = document.querySelector(".entity");
  if (openMouth) {
    entity.style.backgroundPositionX = "85px";
  } else {
    entity.style.backgroundPositionX = "0px";
  }
  openMouth = !openMouth;
});
