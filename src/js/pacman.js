"use strict";
// import Stage from './stage.js';

class Pacman {
  constructor(xpos, ypos, mouth, direction) {
    this.tileSize = 85;
    
    this.xpos = xpos * this.tileSize;
    this.ypos = ypos * this.tileSize;
    this.mouth = mouth;
    this.direction = direction;

    
  }

  render () {
    let element = document.createElement('div');
        element.innerHTML = `<div class="entity entity--pac pacboy-active-light"></div>`;

    return element
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update()
  }


  changeMouth() {
    this.mouth = !this.mouth;
  }
  move(direction) {
    this.direction = direction
    if (direction === 'right') {
      this.xpos += this.tileSize;

    }
    if (direction === 'left') {
      this.xpos -= this.tileSize;
    }
    if (direction === 'up') {
      this.ypos -= this.tileSize;
    }
    if (direction === 'down') {
      this.ypos += this.tileSize;
    }
      this.changeMouth();
      this.update();
  }

  update() {
    const entity = this.element.querySelector(".entity");
    entity.style.left = this.xpos + "px";
    entity.style.top = this.ypos + "px";
    if (this.mouth) {
      entity.style.backgroundPositionX = "85px";
    } else {
      entity.style.backgroundPositionX = "0px";
    }
    if (this.direction === 'right'){
      entity.style.backgroundPositionY = "0px"
    }
    if (this.direction === 'left'){
      entity.style.backgroundPositionY = "-85px"
    }
    if (this.direction === 'down'){
      entity.style.backgroundPositionY = "-170px"
    }
    if (this.direction === 'up'){
      entity.style.backgroundPositionY = "-255px"
    }

  }
}




