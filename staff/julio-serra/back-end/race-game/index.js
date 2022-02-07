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

// console.log(car1, car2, car3)

const interval = setInterval(() => {

    if (car1.position === 100 || car2.position === 100 || car3.position === 100) {
        showWinner(car1, car2, car3)
    
        return
    }

car1.move(randomInteger(0, 10))
car2.move(randomInteger(0, 10))
car3.move(randomInteger(0, 10))


if (car1.position > 100) {
    car1.position = 100
    clearInterval(interval)
}
if (car2.position > 100) {
    car2.position = 100
    clearInterval(interval)
}
if (car3.position > 100) {
    car3.position = 100
    clearInterval(interval)
}

console.clear()
console.log(car1.toString())
console.log(car2.toString())
console.log(car3.toString())
}, 1000)

function showWinner(car1, car2, car3) {
    if (car1.position === 100 && car2.position === 100 && car3.position === 100) 
    console.log()
}