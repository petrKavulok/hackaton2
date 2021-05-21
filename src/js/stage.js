class Stage {
    constructor (widthTiles, heightTiles) {
        this.width = widthTiles * 85 + 'px';
        this.height = heightTiles * 85 + 'px';
    }

    render() {
<<<<<<< HEAD
        let stage = document.createElement('div')
        stage.classList.add('stage');
        stage.style.width = this.width;
        stage.style.height = this.height;

        return stage
    }
    
    mount(parent) {
        this.stage = this.render();
        parent.appendChild(this.stage)
        this.update()
    }
=======
      let element = document.createElement('div');
      element.innerHTML = `<div class="stage"></div>`;
      return element
  }
>>>>>>> b3ee18b221918762110ee5c2131f02af72bebe85

    
    mount(parent) {
      this.element = this.render();
      parent.appendChild(this.element);
      this.update()
  }
    update() {
<<<<<<< HEAD
        console.log('yo')
=======
        const stage = this.element.querySelector(".stage");
        stage.style.width = this.width;
        stage.style.height = this.height;
>>>>>>> b3ee18b221918762110ee5c2131f02af72bebe85
    }
}