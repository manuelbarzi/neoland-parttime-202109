const fs = require('fs').promises
const { writeFile } = fs

class Car {
    constructor(icon) {
        this.icon = icon
        this.position = 0
    }
    toString() {
        return `${' '.repeat(this.position)}${this.icon}`
    }

    move(distance) {
        this.position = this.position + distance
    }
}

const randomInteger = (min, max) => min + Math.round((max - min) * Math.random())



const car1 = new Car('🛻')
const car2 = new Car('🚜')
const car3 = new Car('🏎')


const interval = setInterval(() => {
    console.clear()
    console.log(car1.toString())
    console.log(car2.toString())
    console.log(car3.toString())

    if (car1.position >= 100 || car2.position >= 100 || car3.position >= 100) {
        clearInterval(interval)
        showResult(car1, car2, car3)
        return
    }

    car1.move(randomInteger(0, 5))
    car2.move(randomInteger(0, 5))
    car3.move(randomInteger(0, 5))

}, 100)


function showResult(car1, car2, car3) {
    const resultado = showWinner(car1, car2, car3)
    console.log(resultado)

    writeFile(`carrera-${new Date().toISOString()}.txt`, `${car1.toString()}\n${car2.toString()}\n${car3.toString()}\n${resultado}`)
        .then(() => console.log('Carrera guardada'))
        .catch(console.error)

}

function showWinner(car1, car2, car3) {
    if (car1.position === car2.position && car2.position === car3.position)
        return(`Empate ${car1.icon} ${car2.icon} ${car3.icon}`)
    else if (car1.position === car2.position && car1.position >= 100)
        return(`Empate ${car1.icon} ${car2.icon}`)
    else if (car1.position === car3.position && car1.position >= 100)
        return(`Empate ${car1.icon} ${car3.icon}`)
    else if (car2.position === car3.position && car2.position >= 100)
        return(`Empate ${car2.icon} ${car3.icon}`)
    else if (car1.position >= 100)
        return(`Champion ${car1.icon}`)
    else if (car2.position >= 100)
        return(`Champion ${car2.icon}`)
    else if (car3.position >= 100)
        return(`Champion ${car3.icon}`)
}