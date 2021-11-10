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
GAME.classList.remove("off");
SIGNIN.classList.add("off");

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
var screen_shooter_bgColor = screen_shooter.style.backgroundColor

var shooterXposition = 300;
var step = 20;
screen_shooter.style.transform = `translate(${shooterXposition}px)`;

/* == SHOOTER MOVE == */

document.onkeydown = function (e) {
  if (e.key === "ArrowRight") {
    if (shooterXposition <= 600) {
      shooterXposition += step;
      screen_shooter.style.transform = `translate(${shooterXposition}px)`;
    }
  }
  if (e.key === "ArrowLeft") {
    if (shooterXposition > 0) {
      shooterXposition -= step;
      screen_shooter.style.transform = `translate(${shooterXposition}px)`;
    }
  }
};
/* == SET LAUNCHER RANDOM COLOR with space key event== */
/* == shot event == */
var shot;
var shotXposition;
var shotYposition = 0;
var screen_shooter_bgColor;
var maxShotYposition;

function createShot() {
    shot = document.createElement("div");
    GAME_SCREEN.append(shot);
    shot.classList.add("shot"); 
    screen_shooter_bgColor = shot.style.backgroundColor

    var shooterWidth = 46 ;
    shotXposition= shooterXposition + (shooterWidth / 2);

    console.log(shot)
}


function shotShot(){
    
     maxShotYposition = 300;
     for( i = 0; i < maxShotYposition; i++){
        shotYposition -= step;
        shot.style.transform = `translate( ${shotXposition}px, ${shotYposition}px)`;
     } 
}


document.onkeyup = function (e) {
  if (e.key === " ") {
    createShot()
    shotShot()
    shot.style.transform = `translate(${shotXposition}px,)`;

    var newShooterBg = pickRandomColor();
    shot.style.backgroundColor = newShooterBg
    screen_shooter.style.backgroundColor = newShooterBg
    
  }

  //Al comprobar que el color del shot y element son el mismo o no: 
  /* 
  shot.style.backgroundColor =   newShooterBg
  
  shot.remove(); */
};

/* == MATCHING POSITION AND COLOR BLOCK-SHOT == */
