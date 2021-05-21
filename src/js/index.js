"use strict";

class Pacman {
  constructor(xpos, mouth) {
    this.xpos = xpos;
    this.mouth = mouth;

    this.TILE_SIZE = 85;
  }

  changeMouth() {
    this.mouth = !this.mouth;
  }
  moveRight() {
    this.xpos += this.TILE_SIZE;
    this.changeMouth();
    this.update();
  }

  update() {
    const entity = document.querySelector(".entity");
    
    entity.style.left = this.xpos + "px";

    if (this.mouth) {
      entity.style.backgroundPositionX = "85px";
    } else {
      entity.style.backgroundPositionX = "0px";
    }
  }
}

const pacman = new Pacman(0, true);

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    pacman.moveRight();
  }
});
