var step = 50, margin = 0, points = 0

var four = {
    x: 0,
    y: 0,
    width: 350,
    height: 350 * 800 / 573, //139
}

var queen = {
    x: 0,
    y: 0,
    width: 350,
    height: 350 * 800 / 573, //139
}

var king = {
    x: 0,
    y: 0,
    width: 350,
    height: 350 * 800 / 573, //139
}

var jack = {
    x: 0,
    y: 0,
    width: 350,
    height: 350 * 2900 / 2000, //145
}

var chips = {
    x: 0,
    y: 0,
    width: 250,
    height: 250 * 1149 / 1431, //~80
}

var chipsImage = document.querySelector('.chips')

chipsImage.style.transform = translate(chips.x, chips.y)

var fourImage = document.querySelector('.four')

four.x = 500
four.y = 100

fourImage.style.transform = translate(four.x, four.y)

var queenImage = document.querySelector('.queen')

queen.x = 2000
queen.y = 100

queenImage.style.transform = translate(queen.x, queen.y)

var kingImage = document.querySelector('.king')

king.x = 200
king.y = 700

kingImage.style.transform = translate(king.x, king.y)

var jackImage = document.querySelector('.jack')

jack.x = 1700
jack.y = 700

jackImage.style.transform = translate(jack.x, jack.y)


function translate(x, y) {
    return 'translate(' + x + 'px,' + y + 'px)'
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight')
        chips.x += step
    if (event.key === 'ArrowLeft')
        chips.x -= step
    if (event.key === 'ArrowDown')
        chips.y += step
    if (event.key === 'ArrowUp')
        chips.y -= step

    chipsImage.style.transform = translate(chips.x, chips.y)

    if (chips.x + chips.width / 2 >= king.x
        && chips.x + chips.width / 2 <= king.x + king.width
        && chips.y + chips.height / 2 >= king.y
        && chips.y + chips.height / 2 <= king.y + king.height) {
        points++
        console.log('Congratulations!! You have ' + points + ' points')
    }

    //var blacks = document.querySelectorAll('.black')
    // console.log(black)

    //blacks.forEach(function (black) {
    //})

    if (chips.x + chips.width / 2 >= four.x
        && chips.x + chips.width / 2 <= four.x + four.width
        && chips.y + chips.height / 2 >= four.y
        && chips.y + chips.height / 2 <= four.y + four.height) {
        points--
        console.log('Sorry, you have ' + points + ' points')
    }
    if (chips.x + chips.width / 2 >= queen.x
        && chips.x + chips.width / 2 <= queen.x + queen.width
        && chips.y + chips.height / 2 >= queen.y
        && chips.y + chips.height / 2 <= queen.y + queen.height) {
        points--
        console.log('Sorry, you have ' + points + ' points')
    }
    if (chips.x + chips.width / 2 >= jack.x
        && chips.x + chips.width / 2 <= jack.x + jack.width
        && chips.y + chips.height / 2 >= jack.y
        && chips.y + chips.height / 2 <= jack.y + jack.height) {
        points--
        console.log('Sorry, you have ' + points + ' points')
    }

})

//Trayectorias cartas 
var direction = 1

setInterval(function () {
    if (four.x > 2100 && queen.y > 500 && jack.x > 700 && jack.y > 700 && king.y > 800)
        direction = -1
    if (four.x < 50 && queen.y < 50 && jack.x < 30 && jack.y < 30 && king.y < 35)
        direction = 1

    four.x += direction * step
    fourImage.style.transform = translate(four.x, four.y)

    queen.y += direction * step
    queenImage.style.transform = translate(queen.x, queen.y)

    jack.y += direction * step
    jack.x += direction * step
    jackImage.style.transform = translate(jack.x, jack.y)

    king.y += direction * step
    kingImage.style.transform = translate(king.x, king.y)
}, 70);


// setInterval(function () {
//     if (four.x > 2900)
//         direction = -1
//     if (four.x < 130)
//         direction = 1

//     four.x += direction * step
//     fourImage.style.transform = translate(four.x, four.y)
// }, 100);

// setInterval(function () {
//     if (queen.y > 1000)
//         direction = -1
//     if (queen.y < 20)
//         direction = 1

//     queen.y += direction * step
//     queenImage.style.transform = translate(queen.x, queen.y)
// }, 70);

// setInterval(function () {
//     if (jack.x > 700 && jack.y > 700)
//         direction = -1
//     if (jack.x < 30 && jack.y < 30)
//         direction = 1

//     jack.y += direction * step
//     jack.x += direction * step
//     jackImage.style.transform = translate(jack.x, jack.y)
// }, 70);


