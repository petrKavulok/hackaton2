// export default
class Stage {
  constructor(widthTiles, heightTiles) {
    this.width = widthTiles * 85;
    this.height = heightTiles * 85;
    this.entities = [];
    this.points = 0;
  }

  render() {
    let element = document.createElement("div");
    element.className = "stage";
    return element;
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.createEntities();
    this.update();
  }
  update() {
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    document.querySelector(".score").innerHTML = this.points;
  }

  createEntities() {
    const wall1 = new Entity(4, 2, "wall");
    wall1.mount(document.querySelector(".stage"));
    this.entities.push(wall1);

    const apple1 = new Entity(4, 3, "apple");
    apple1.mount(document.querySelector(".stage"));
    this.entities.push(apple1);

    const bomb1 = new Entity(4, 4, "bomb");
    bomb1.mount(document.querySelector(".stage"));
    this.entities.push(bomb1);
  }

  removeEntity(x, y) {
    this.entities.forEach((entity, index) => {
      if (entity.xpos == x && entity.ypos == y) {
        console.log(this.entities[index]);
        this.entities[index].element.style.display = "none";
        this.entities.splice(index, 1);
      }
    });
  }

  collisionDetection(x, y) {
    let returnValue = null;
    this.entities.forEach((entity) => {
      if (entity.xpos == x && entity.ypos == y) returnValue = entity.type;
    });
    return returnValue;
  }
}
