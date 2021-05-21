// export default
class Stage {
  constructor(widthTiles, heightTiles) {
    this.widthTiles = widthTiles;
    this.heightTiles = heightTiles;
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
    fetch(
      `http://bootcamp.podlomar.org/api/pacman?width=${this.widthTiles}&height=${this.heightTiles}`
    )
      .then((resp) => resp.json())

      .then((pieces) => {
        pieces.walls.forEach((wall) => {
          let item = new Entity(wall.x, wall.y, "wall");
          item.mount(document.querySelector(".stage"));
          this.entities.push(item);
        });

        pieces.apples.forEach((wall) => {
          let item = new Entity(wall.x, wall.y, "apple");
          item.mount(document.querySelector(".stage"));
          this.entities.push(item);
        });

        pieces.bombs.forEach((wall) => {
          let item = new Entity(wall.x, wall.y, "bomb");
          item.mount(document.querySelector(".stage"));
          this.entities.push(item);
        });
      });
  }

  removeEntity(x, y) {
    this.entities.forEach((entity, index) => {
      if (entity.xpos == x && entity.ypos == y) {
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
