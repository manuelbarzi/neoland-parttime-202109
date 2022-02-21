function blockMe(millis) {
    let before = Date.now()
    let diff
    let interval = 0

    while((diff = Date.now() - before) <= millis) {
        const progress = Math.round(diff/millis * 100)

        if (progress >= interval) {
            console.log(`${interval}%`)

            interval += 10
        }
    }
}

//setTimeout(() => console.log('hola mundo'), 1000)

fetch('https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=black')
    .then(res => res.json())
    .then(vehicles => console.log('blacks arrived'))
    .catch(console.error)

blockMe(10000)

fetch('https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=white')
    .then(res => res.json())
    .then(vehicles => console.log('whites arrived'))
    .catch(console.error)

console.log('end')

// VM946:10 0%
// VM946:10 10%
// VM946:10 20%
// VM946:10 30%
// VM946:10 40%
// VM946:10 50%
// VM946:10 60%
// VM946:10 70%
// VM946:10 80%
// VM946:10 90%
// VM946:10 100%
// VM946:31 end
// undefined
// VM946:21 blacks arrived
// VM946:28 whites arrived