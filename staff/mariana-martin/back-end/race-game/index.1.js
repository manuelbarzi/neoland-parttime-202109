//primera versión
class Car {
    constructor(icon){
        this.icon = icon 
        this.position = 0
    }

    toString() {
        return `${' '.repeat(this.position)}${this.icon}`
    }

    move(distance){
    this.position = this.position + distance
    }
}

const randomInteger = (min, max) => min + Math.round((max - min) * Math.random())

const car1 = new Car('🚗')
const car2 = new Car('🚙')
const car3 = new Car('🏎')

const interval = setInterval(() => {
    console.clear()
    console.log(car1.toString())
    console.log(car2.toString())
    console.log(car3.toString())


    if(car1.position === 100 || car2.position === 100 || car3.position === 100) {
        clearInterval(interval)

        showWinner(car1, car2, car3)
        return
    }

    
    car1.move(randomInteger(0,5))
    if(car1.position > 100)
        car1.position = 100


    car2.move(randomInteger(0,5))
    if(car2.position > 100)
        car2.position = 100


    car3.move(randomInteger(0, 5))
    if(car3.position > 100)
        car3.position = 100
    
}, 100)

function showWinner(car1, car2, car3) {
    //TODO
if(car1.position === 100 && car2.position ===100 && car3.position === 100)
console.log('tie!', car1.icon, car2.icon, car3.icon)

else if(car1.position === 100 && car2.position ===100)
console.log('tie!', car1.icon, car2.icon)

else if(car1.position === 100 &&  car3.position === 100)
console.log('tie!', car1.icon, car3.icon)

else if (car2.position ===100 && car3.position === 100)
console.log('tie!', car2.icon, car3.icon)

else if(car1.position === 100) 
console.log('winner', car1.icon)

else if(car2.position === 100) 
console.log('winner', car2.icon)

else if(car3.position === 100) 
console.log('winner', car3.icon)

}




