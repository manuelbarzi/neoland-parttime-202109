var step = 10
var cicle = 0
var direction= -1
var i=80
//DINO
var dino = {
    x: 10,
    y: 250
}

var dinoImage = document.querySelector('.dino')
dinoImage.style.transform = translate(dino.x, dino.y)

//CACTUS1
var cactus1Image = document.querySelector('.cactus1')
var cactus1 = {
    x: 1550,
    y: 250
}

cactus1Image.style.transform = translate(cactus1.x, cactus1.y)

//CACTUS2
var cactus2Image = document.querySelector('.cactus2')
var cactus2 = {
    x: 1800,
    y: 258
}

cactus2Image.style.transform = translate(cactus2.x, cactus2.y)

function translate(x, y) {
    return 'translate(' + x + 'px, ' + y + 'px)'
}

// DINO TECLADO 

document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {

        var inter1 = setInterval(function () {
            cicle++
            if (dino.y >= 250)
                direction = -1

            if (dino.y <= 100)
                direction = 1
            if (cicle === 30) {
                clearInterval(inter1)
                cicle= 0
            }
            dino.y += direction * step
            dinoImage.style.transform = translate(dino.x, dino.y)
            }, 20)
    }


  dinoImage.style.transform = translate(dino.x, dino.y)
})
var inter2= setInterval(function () {
    cactus1.x=cactus1.x - step
    cactus2.x=cactus2.x - step
    if(cactus1.x<0){
        cactus1.x=1550
    }
    if(cactus2.x<0){
        cactus2.x=1900
    }
    if(cactus1.x === dino.x && cactus1.y === dino.y){
        clearInterval(inter2)
    }
    if(cactus2.x === dino.x && cactus2.y === dino.y){
        clearInterval(inter2)
    }
    cactus1Image.style.transform = translate(cactus1.x, cactus1.y)
    cactus2Image.style.transform = translate(cactus2.x, cactus2.y)
}, 20)

var value = document.querySelector('.value')
var score=0
var points =0
var scoreText = document.querySelector('.score')
var pressText = document.querySelector('.final__press')
var loseText = document.querySelector('.final__lose')



var inter3 =setInterval(function () {
    points += 1
    score= "Score: "+ points

    console.log(points)
    scoreText.innerText =score
    var ps= true
    
    if(cactus1.x === dino.x && cactus1.y === dino.y){
        clearInterval(inter3)
        loseText.classList.remove('off')
         var inter4 =setInterval(function () {
        
        
            
        if(ps){   
        pressText.innerText = 'Press enter'
        pressText.classList.remove('off')
        ps=!ps
        } 
        else{
        
            pressText.classList.add('off') 

        ps= !ps
        }},500)

    }
    if(cactus2.x === dino.x && cactus2.y === dino.y){
        clearInterval(inter3)
    }
    })

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.moveTo(10,10);
ctx.lineTo(180,180);

ctx.strokeStyle = "#f00";
ctx.stroke();

        


document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {

        location.reload()
    }})


