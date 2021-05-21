const pacman = new Pacman(0, 85, true, 'right');
pacman.mount(document.querySelector('.container'))


    // let entity = element.querySelector('.entity');

    document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
        console.log('ahoj marku')
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