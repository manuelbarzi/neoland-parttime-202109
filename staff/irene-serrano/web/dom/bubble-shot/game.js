 var SIGNIN = document.querySelector(".signin");
var GAME = document.querySelector(".game"); 

var GAME_SCREEN = document.querySelector(".game_screen");

var counter = document.createElement("div");
GAME.append(counter);
counter.classList.add("game_counter");
var points = 0;

counter.innerText = `${points} pts`;

var game_level = document.createElement("div");
GAME.append(game_level);
game_level.classList.add("game_level");

var screen_block_container = document.createElement("div");
GAME_SCREEN.append(screen_block_container);
screen_block_container.classList.add("block-container");

//Añadir más posibles niveles mediante un select

var level = 1;

game_level.innerText = `Level ${level}`;

/* TEMPORAL */
/* GAME.classList.remove("off");
SIGNIN.classList.add("off"); */

/*----------*/

/* == GENERATE UPPER BLOCKS == */
function pickRandomColor() {
  var index = Math.floor(Math.random() * 2);
  return colors[index];
}

switch (level) {
  case 1:
    var blocks = 10;
    var colors = ["var(--color1)", "var(--color2)"];

    for (i = 0; i <= blocks; i++) {
      var background = pickRandomColor();

      var screen_block_element = document.createElement("div");
      screen_block_container.append(screen_block_element);
      screen_block_element.classList.add("block-element");
      screen_block_element.style.backgroundColor = background;
    }
    break;
}

var screen_shooter = document.createElement("div");
GAME_SCREEN.append(screen_shooter);
screen_shooter.classList.add("shooter");

var shooter = {
  width: 46,
  x: 300,
  background: "grey",
};

screen_shooter.style.transform = `translate(${shooter.x}px)`;

shooter.background = screen_shooter.style.backgroundColor;
var step = 20;

/* == SHOOTER MOVE == */

document.onkeydown = function (e) {
  if (e.key === "ArrowRight") {
    if (shooter.x <= 600) {
      shooter.x += step;
      screen_shooter.style.transform = `translate(${shooter.x}px)`;
      shot.x = shooter.x + shooter.width / 2;
    }
  }
  if (e.key === "ArrowLeft") {
    if (shooter.x > 0) {
      shooter.x -= step;
      screen_shooter.style.transform = `translate(${shooter.x}px)`;
      shot.x = shooter.x + shooter.width / 2;
    }
  }
};
/* == SET LAUNCHER RANDOM COLOR with space key event== */
/* == shot event == */
var screen_shot;
var shot = {
  x: shooter.x + shooter.width / 2,
  y: -8,
  maxXpos: 600,
  background: shooter.background,
};

function createShot() {
  screen_shot = document.createElement("div");
  GAME_SCREEN.append(screen_shot);
  screen_shot.classList.add("shot");
  screen_shot.style.transform = `translate(${shot.x}px)`;
  shotShot();
}

function shotShot() {
  setInterval(function () {
    if (shot.y >= -370) {
      shot.y -= step;
      screen_shot.style.transform = `translate(${shot.x}px, ${shot.y}px )`;
      clearInterval();
    }
  }, 62);
  shot.y = -8;
}

function deleteShot() {
  screen_shot.remove();
}
var newShooterBg;

function checkColor() {
  
  if (shot.background === "var(--color2)") {
    console.log("amarillito");
    deleteShot();
  } else if (shot.background === "var(--color1)") {
    console.log("asulito");
    deleteShot();
  } else {
    console.log(shot.background);
    console.log(shooter.background);
  }
}

function getShot(event) {
  if (event.key === " ") {
    createShot();
    screen_shot.style.backgroundColor = newShooterBg;
    newShooterBg = pickRandomColor();

    screen_shooter.style.backgroundColor = newShooterBg;
    shot.background = shooter.background;
  }
  if(event.key === 'k') {
    checkColor();
  }

  

  //CHECK and REMOVE before a new shot
}

document.addEventListener("keydown", getShot);

//Al comprobar que el color del shot y element son el mismo o no:

/* 
  
  shot.remove(); */

/* == MATCHING POSITION AND COLOR BLOCK-SHOT == */
