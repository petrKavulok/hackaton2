const stage = new Stage(12, 6);
stage.mount(document.querySelector('.container'))


const pacman = new Pacman(0, 0, true, 'right');
pacman.mount(document.querySelector('.stage'))


    // let entity = element.querySelector('.entity');

    document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
        pacman.move('right');
    }
    if (event.code === "ArrowLeft") {
      pacman.move('left');
    }
    if (event.code === "ArrowDown") {
      pacman.move('down');
    }
    if (event.code === "ArrowUp") {
      pacman.move('up');
    }})