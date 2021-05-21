class Entity {
  constructor(xpos, ypos, type) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.type = type;
  }

  render() {
    let element = document.createElement("div");
    element.innerHTML = `<div class="entity entity--${this.type}"></div>`;
    return element;
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }

  update() {
    const entity = this.element.querySelector(`.entity--${this.type}`);
    entity.style.left = 85 * this.xpos + "px";
    entity.style.top = 85 * this.ypos + "px";
  }
}
