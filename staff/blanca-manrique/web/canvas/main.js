var canvas = document.querySelector('.canvas')
var ctx = canvas.getContext('2d')

//TRES FORMAS DE DIBUJAR UN RECTÁNGULO

//sólo borde
ctx.lineWidth ='10'
ctx.strokeStyle = 'pink'
ctx.strokeRect(0,0,canvas.width, canvas.height)

//Sólo relleno
ctx.lineWidth ='8'
ctx.fillStyle = 'green'
ctx.fillRect(10,10,canvas.width/2, canvas.height/2)

//Relleno y borde
ctx.lineWidth ='4'
ctx.fillStyle ='black'
ctx.strokeStyle ='yellow'
ctx.rect(40,40, canvas.width/3, canvas.height/2)
ctx.fill()
ctx.stroke()


//CIRCULO
ctx.beginPath()
ctx.strokeStyle = 'red'
ctx.fillStyle = 'blue'
ctx.arc(600, 400, 75, 0, 2*Math.PI)
ctx.fill()
ctx.stroke()

//SECTOR CIRCULAR
//el ángulo de partida y el ángulo final
var ap = (Math.PI/180)*60
var af = (Math.PI/180)*120
//Coordenadas del punto de partida en la circunferencia
var Xap = canvas.width/2 + 140* Math.cos(ap)
var Yap = 30 + 140* Math.sin(ap)
//Estilos
ctx.fillStyle ='orange'
ctx.strokeStyle = 'brown'
ctx.lineWidth = '5'
//Se empieza a dibujar
ctx.beginPath()
ctx.moveTo(canvas.width/2, 30)
ctx.lineTo(Xap,Yap)
ctx.arc(canvas.width/2, 30,140, ap, af)
ctx.closePath()
ctx.fill()
ctx.stroke()


