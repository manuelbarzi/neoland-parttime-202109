console.log('DEMO countNegativeNumbers')

function countNegativeNumbers(numbers) {
    // TODO
    var contador = 0
    for (i = 0; i < numbers.length; i++){
        var current = numbers[i]
        if (current < 0){
            contador++
        }
    }
    return contador
}

var negatives = countNegativeNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(negatives) // 0

var negatives = countNegativeNumbers([234, -897, 562, -958, 951])
console.log(negatives) // 2

var negatives = countNegativeNumbers([-101, 2, 13, 20, 21, -35, 80])
console.log(negatives) // 2