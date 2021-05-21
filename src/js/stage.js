class Stage {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }

    render() {
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

    update() {
        console.log('yo')
    }
}