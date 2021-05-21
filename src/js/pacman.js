"use strict";
// import Stage from './stage.js';

class Pacman {
  constructor(xpos, ypos, mouth, direction) {
    this.tileSize = 85;

    this.xpos = xpos * this.tileSize;
    this.ypos = ypos * this.tileSize;
    this.mouth = mouth;
    this.direction = direction;
    this.alive = true;
  }

  render() {
    let element = document.createElement("div");
    element.innerHTML = `<div class="entity entity--pac pacboy-active-light"></div>`;

    return element;
  }

  mount(parent) {
    this.element = this.render();
    this.parent = parent;
    parent.element.appendChild(this.element);
    this.update();
  }

  changeMouth() {
    this.mouth = !this.mouth;
  }
  move(direction) {
    if (!this.alive) return;
    let xInitial = this.xpos;
    let yInitial = this.ypos;
    this.direction = direction;
    if (direction === "right") {
      this.xpos += 1;
    }
    if (direction === "left") {
      this.xpos -= 1;
    }
    if (direction === "up") {
      this.ypos -= 1;
    }
    if (direction === "down") {
      this.ypos += 1;
    }
    this.changeMouth();
    let type = this.parent.collisionDetection(this.xpos, this.ypos);
    console.log(type);
    console.log(this.parent.entities);

    if (type == "wall") {
      this.xpos = xInitial;
      this.ypos = yInitial;
    }
    if (type == "apple") {
      this.parent.points += 1;
      document.querySelector(".score").innerHTML = this.parent.points;
      this.parent.removeEntity(this.xpos, this.ypos);
    }
    if (type == "bomb") {
      if (Math.random() > 0.5) {
        this.element.firstChild.classList.add("entity--tomb");
        this.element.firstChild.classList.remove("entity--pac");
        this.element.firstChild.classList.remove("pacboy-active-light");
      }
      this.parent.removeEntity(this.xpos, this.ypos);
      this.alive = false;
    }

    this.update();
  }

  update() {
    const entity = this.element.querySelector(".entity");
    entity.style.left = this.tileSize * this.xpos + "px";
    entity.style.top = this.tileSize * this.ypos + "px";
    if (this.mouth) {
      entity.style.backgroundPositionX = "85px";
    } else {
      entity.style.backgroundPositionX = "0px";
    }
    if (this.direction === "right") {
      entity.style.backgroundPositionY = "0px";
    }
    if (this.direction === "left") {
      entity.style.backgroundPositionY = "-85px";
    }
    if (this.direction === "down") {
      entity.style.backgroundPositionY = "-170px";
    }
    if (this.direction === "up") {
      entity.style.backgroundPositionY = "-255px";
    }
  }
}
