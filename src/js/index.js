
const stage = new Stage ('1020px', '510px');
stage.mount(document.querySelector('.container'))

const pacman = new Pacman(0, 85, true, 'right');
pacman.mount(stage)


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