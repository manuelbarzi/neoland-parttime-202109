console.log('DEMO countPositiveNumbers')

function countPositiveNumbers (numbers){

    var contador = 0
        for ( i = 0; i = numbers.length; i++) {
            var actual = numbers[i]
            if (actual > 0){
                count++
            }
        } 
        return contador
}

{
var positives = countPositiveNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(positives) // 9

var positives = countPositiveNumbers([234, -897, 562, -958, 951])
console.log(positives) // 3

var positives = countPositiveNumbers([-101, 2, 13, 20, 21, -35, 80])
console.log(positives) // 5
}