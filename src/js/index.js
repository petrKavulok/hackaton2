const stage = new Stage(5, 3);
console.log(stage)
stage.mount(document.querySelector('.container'))


const pacman = new Pacman(0, 0, true, 'right');
console.log(pacman)
pacman.mount(document.querySelector('.stage'))

console.log(stage.width)

console.log(pacman.xpos)
    // let entity = element.querySelector('.entity');

    document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
        if (stage.width > (pacman.xpos + pacman.tileSize )) {
            pacman.move('right')
        }
    }
    if (event.code === "ArrowLeft") {
        console.log()
        if ((pacman.xpos) > 0) {
            pacman.move('left');
        }
    }
    if (event.code === "ArrowDown") {
        if (stage.height > (pacman.ypos + pacman.tileSize )) {
          pacman.move('down');
        }
    }
    if (event.code === "ArrowUp") {
        if ((pacman.ypos) > 0) {
            pacman.move('up');
        }
    }})