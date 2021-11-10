var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Background sun gradient
var grdBg = ctx.createRadialGradient(200, 200, 25, 250, 250, 100);
grdBg.addColorStop(0, "#F5A700");
grdBg.addColorStop(0.5, "#EA000F");
grdBg.addColorStop(1, "#09041A");

ctx.fillStyle = grdBg;
ctx.fillRect(10, 100, 600, 600);

// PLANET 1
var ctx2 = c.getContext("2d");

var grdP1 = ctx.createLinearGradient(420, 230, 500, 300);
grdP1.addColorStop(0, "#67E6C7");
grdP1.addColorStop(0.4, "#C0FDC6");
grdP1.addColorStop(1, "#47BFB3");

ctx2.beginPath();
ctx2.arc(500, 180, 55, 0, 2 * Math.PI);
ctx2.fillStyle = grdP1;
ctx2.fill();

// LIGHT

var ctx3 = c.getContext("2d");

var lightGrd = ctx3.createRadialGradient(0, 150, 600, 400, 800, 200);

lightGrd.addColorStop(0, "#0000");
lightGrd.addColorStop(1, "#FFFFDD10");

ctx3.fillStyle = lightGrd;
ctx3.fillRect(0, 0, 600, 600);

//PIRAMIDES

var ctx4 = c.getContext("2d");
ctx4.translate(250, -125);
ctx4.rotate((45 * Math.PI) / 180);
ctx4.fillStyle = "#A14A16";
ctx4.fillRect(250, 450, 350, 350);

var ctx5 = c.getContext("2d");
ctx5.translate(200, -290);
ctx5.fillStyle = "#CF7A13";
ctx5.fillRect(250, 450, 450, 450);

//estrella fugaz
var ctx6 = c.getContext("2d");
var shootingStar = {
    x: 0,
    y: 300,
}
ctx6.beginPath();
ctx6.arc(shootingStar.x, shootingStar.y, 655, -(25  * Math.PI) / 180, (25  * Math.PI) / 180);
ctx6.stroke();
ctx6.strokeStyle = '2px solid white';
ctx6.lineWidth = 14;