var bird = {
    x:0,
    y:0,
}

var pipe1={

    x:0,
    y:0,
}
var birdImage = document.querySelector('.bird')

birdImage.style.transform = translate(bird.x, bird.y)

var pipe1Image = document.querySelector('.pipe1')

pipe1.x = 10
pipe1.y = 10

pipe1Image.style.transform = translate (pipe1.x, pipe1.y)

var pipe1Image = document.querySelector('.pipe2')

pipe2.x = 100
pipe2.y = 100

pipe1Image.style.transform = translate (pipe2.x, pipe2.y)

