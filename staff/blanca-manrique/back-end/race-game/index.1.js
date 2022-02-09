class Car {
    constructor(icon) {
        this.icon = icon
        this.position = 0 //posición inicial
    }
    toString() {
        return `${' '.repeat(this.position)}${this.icon}`
        //dejamos tantos espacios como posiciones haya --> que se repita el espacio tantas veces como diga position
        //Método repeat: que me concatene tantos espacios como position le diga
    }
    move(distance) {
        this.position = this.position + distance //actualizo la posición porque la incremento con la distancia
    }
}

const randomInteger = (min, max) => min + Math.round((max - min) * Math.random())

const car1 = new Car('🚘')
const car2 = new Car('🚖')
const car3 = new Car('🚔')

// car1.move(52) , 52 espacios + icono

// const interval = setInterval(() => {
//     car1.move(randomInteger(0, 10))     
//     car2.move(randomInteger(0, 10))     


//     if(car1.position > 100){
//         car1.position = 100

//         clearInterval(interval) //para detener el temporizador
//     }
//     console.clear() // si la posición no es mayor que 100 quiero que vaya pintando y limpiando --> por eso lo vemos como una animación
//     console.log(car1.toString())

// }, 1000)

const interval = setInterval(() => {
    console.clear()
    console.log(car1.toString())
    console.log(car2.toString())
    console.log(car3.toString())

    //Si cualquiera de los 3 coches llega a 100 que pare
    if (car1.position === 100 || car2.position === 100 || car3.position === 100) {
        clearInterval(interval)

        showWinner(car1, car2, car3)
    }

    if (car1.position < 100)
        car1.move(randomInteger(0, 10))
    else
        car1.position = 100

    if (car2.position < 100)
        car2.move(randomInteger(0, 10))
    else
        car2.position = 100

    if (car3.position < 100)
        car3.move(randomInteger(0, 10))
    else
        car3.position = 100

}, 300)

function showWinner(car1, car2, car3) {
    if (car1.position === 100 && car2.position === 100 && car3.position === 100)
        console.log('tie!', car1.icon, car2.icon, car3.icon)
    else if (car1.position === 100 && car2.position === 100)
        console.log('tie!', car1.icon, car2.icon)
    else if (car1.position === 100 && car3.position === 100)
        console.log('tie!', car1.icon, car3.icon)
    else if (car2.position === 100 && car3.position === 100)
        console.log('tie!', car2.icon, car3.icon)
    else if (car1.position === 100)
        console.log('Winner!', car1.icon)
    else if (car2.position === 100)
        console.log('Winner!', car2.icon)
    else if (car3.position === 100)
        console.log('Winner!', car3.icon)
}
