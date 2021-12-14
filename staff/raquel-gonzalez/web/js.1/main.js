console.log('DEMO countPositiveNumbers')

function countPositiveNumbers(numbers) {
    // TODO
    var count = 0

    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i]

        if (number > 0) {
            count++
        }
    }

    return count
}

var positives = countPositiveNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(positives) // 9

var positives = countPositiveNumbers([234, -897, 562, -958, 951])
console.log(positives) // 3

var positives = countPositiveNumbers([-101, 2, 13, 20, 21, -35, 80])
console.log(positives) // 5

console.log('DEMO countNegativeNumbers')

function countNegativeNumbers(numbers) {
    var count = 0

    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i]

        if (number < 0) {
            count++
        }
    }

    return count
}

var negatives = countNegativeNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(negatives) // 0

var negatives = countNegativeNumbers([234, -897, 562, -958, 951])
console.log(negatives) // 2

var negatives = countNegativeNumbers([-101, 2, 13, 20, 21, -35, 80])
console.log(negatives) // 2



console.log('DEMO countEvenNumbers')

function countEvenNumbers(numbers) {
    var count=0
    for (var i=0; i<numbers.length;i++){
        var number = numbers [i]
        if (number %2===0 )
        count++
    }
       return count
   
}

var evens = countEvenNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(evens) // 5

var evens = countEvenNumbers([234, 897, 562, 958, 951])
console.log(evens) // 3

var evens = countEvenNumbers([-101, 2, 13, -20, 21, -35, 80])
console.log(evens) // 3


console.log('DEMO countOddNumbers')

function countOddNumbers(numbers) {
    var count=0
    for (var i=0; i<numbers.length; i++){
        var number = numbers [i]
        if (number %2 !==0 )
        count++
    }
    return count
}

var odds = countOddNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(odds) // 5

var odds = countOddNumbers([234, 897, 562, 958, 951])
console.log(odds) // 2

var odds = countOddNumbers([-101, 2, 13, -20, 21, -35, 80])
console.log(odds) // 4



console.log('DEMO countNumbers')

function countNumbers(numbers, what) {
    var count = 0
    if (what=== "positive"){
        for (var i=0; i<numbers.length; i++){
            var number = numbers [i]
            if (number>0)
            count ++
        }
    }
     else if (what=== "negative"){
        for (var i=0; i<numbers.length; i++){
            var number = numbers [i]
            if (number<0)
            count ++
        }

    }
    else if (what=== "even"){
        for (var i=0; i<numbers.length;i++){
            var number = numbers [i]
            if (number %2===0 )
            count++
        }
    
    }
    else if (what=== "odd"){
        for ( var i=0; i<numbers.length;i++){
            var number = numbers [i]
            if (number %2 !==0 )
            count++
        }
    }
    else if (what ===undefined){
        count= numbers.length
    }
        
    return count
    }
    

var positives = countNumbers([-101, 2, 13, -20, 0, 21, -35, 80], 'positive')
console.log(positives) // 4

var negatives = countNumbers([-101, 2, 13, 0, -20, 21, -35, 80], 'negative')
console.log(negatives) // 3

var evens = countNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'even')
console.log(evens) // 5

var odds = countNumbers([234, 897, 562, 958, 951], 'odd')
console.log(odds) // 2

var all = countNumbers([-101, 2, 13, -20, 21, -35, 80])
console.log(all) // 7