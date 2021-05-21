class Stage {
    constructor (widthTiles, heightTiles) {
        this.width = widthTiles * 85 + 'px';
        this.height = heightTiles * 85 + 'px';
    }

    render() {
      let element = document.createElement('div');
      element.innerHTML = `<div class="stage"></div>`;
      return element
  }

    
    mount(parent) {
      this.element = this.render();
      parent.appendChild(this.element);
      this.update()
  }
    update() {
        const stage = this.element.querySelector(".stage");
        stage.style.width = this.width;
        stage.style.height = this.height;
    }
}