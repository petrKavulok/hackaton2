const stage = new Stage(12, 5);
stage.mount(document.querySelector(".container"));

const pacman = new Pacman(0, 0, true, "right");
pacman.mount(stage);




document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    if (stage.width > pacman.xpos * pacman.tileSize +85) {
      pacman.move("right");
    }
  }
  if (event.code === "ArrowLeft") {
    if (pacman.xpos > 0) {
      pacman.move("left");
    }
  }
  if (event.code === "ArrowDown") {
    if (stage.height > (pacman.ypos * pacman.tileSize) + 85) {
        
      pacman.move("down");
    }
  }
  if (event.code === "ArrowUp") {
    if (pacman.ypos > 0) {
      pacman.move("up");
    }
  }
});
