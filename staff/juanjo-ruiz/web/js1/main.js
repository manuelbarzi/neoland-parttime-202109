var x = { name: 'Peter', age: 30 }
var y = x
var z = y

console.log('DEMO add')

var add = function (a, b) {
    return a + b
}

console.log(add(14, 5))

console.log('DEMO languages')

var lang = 'ru'

if (lang === 'en') {
    console.log('Hello, World!')
} else if (lang === 'es') {
    console.log('Hola, Mundo!')
} else if (lang === 'it') {
    console.log('Ciao, Mondo!')
} else if (lang === 'ru') {
    console.log('Privet, Mir!')
}

console.log('DEMO ages')

var age = 5

if (age < 3)
    console.log('baby')
else if (age < 10)
    console.log('kid')
else if (age < 18)
    console.log('teen')
else if (age < 30)
    console.log('young adult')
else if (age < 60)
    console.log('mature adult')
else
    console.log('old adult')

console.log('DEMO fruits')

var fruits = ['banana', 'apple', 'orange', 'melon', 'pineapple', 'cherry']

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// console.log(fruits[4])
// console.log(fruits[5])

var count = 0

while (count < fruits.length) {
    var fruit = fruits[count]

    console.log(fruit)

    //count = count + 1
    count++
}

console.log('DEMO spell name')

var name = 'Peter Pan'
// var name = 'John Doe'

// var i = 0

// while (i < name.length) {
//     var char = name[i]

//     console.log(char)

//     i++
// }

for (var i = 0; i < name.length; i++) {
    var char = name[i]

    console.log(char)
}

console.log('DEMO spell (function)')

//var spell = function() {
function spell(text) {
    for (var i = 0; i < text.length; i++) {
        var char = text[i]

        console.log(char)
    }
}

spell('Pepito Grillo')
spell('abcdefghijklmnopqrstuvwxyz')

console.log('DEMO countSpaces')

function countSpaces(text) {
    /*
    iterar en el texto, todos sus caracteres y detectar los espacios y contarlos
    */

    var count = 0

    for (var i = 0; i < text.length; i++) {
        var char = text[i]

        if (char === ' ') {
            count++ // count = count + 1
        }
    }

    return count
}

var spaces = countSpaces('hola mundo')
console.log(spaces) // 1

var spaces = countSpaces('adios mundo cruel')
console.log(spaces) // 2

var spaces = countSpaces('flipo con js, me encanta! es chachi piruli, chuli chili guai')
console.log(spaces) // 10



//Ejercicios finde

console.log('DEMO countVocals')


function countVocals(text) {

    var count = 0

    for (var i = 0; i < text.length; i++) {
        var voc = text[i]

        if (voc === 'a') {
            count++
        }
        else if (voc === 'e') {
            count++
        }
        else if (voc === 'i') {
            count++
        }
        else if (voc === 'o') {
            count++
        }
        else if (voc === 'u') {
            count++
        }
    }

    return count
}

var vocals = countVocals('hola mundo')
console.log(vocals) // 4

var vocals = countVocals('adios mundo cruel')
console.log(vocals) // 7

var vocals = countVocals('pasito a pasito, suave, suavecito')
console.log(vocals) // 15




console.log('DEMO countPositiveNumbers')

function countPositiveNumbers(numbers) {

    var pos = 0

    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i]

        if (num >= '0') {
            pos++
        }
    }

    return pos

}

var positives = countPositiveNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(positives) // 10

var positives = countPositiveNumbers([234, -897, 562, -958, 951])
console.log(positives) // 3

var positives = countPositiveNumbers([-101, 2, 13, 20, 21, -35, 80])
console.log(positives) // 5




console.log('DEMO countNegativeNumbers')

function countNegativeNumbers(numbers) {

    var neg = 0

    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i]

        if (num < '0') {
            neg++
        }
    }

    return neg
}

var negatives = countNegativeNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(negatives) // 0

var negatives = countNegativeNumbers([234, -897, 562, -958, 951])
console.log(negatives) // 2

var negatives = countNegativeNumbers([-101, 2, 13, 20, 21, -35, 80])
console.log(negatives) // 2




console.log('DEMO countEvenNumbers')

function countEvenNumbers(numbers) {

    var even = 0

    for (var i = 0; i < numbers.length; i++) {
        var par = numbers[i]

        if (par % 2 == 0) {
            even++
        }
    }

    return even
}

var evens = countEvenNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(evens) // 5

var evens = countEvenNumbers([234, 897, 562, 958, 951])
console.log(evens) // 3

var evens = countEvenNumbers([-101, 2, 13, -20, 21, -35, 80])
console.log(evens) // 3





console.log('DEMO countOddNumbers')

function countOddNumbers(numbers) {

    var odd = 0

    for (var i = 0; i < numbers.length; i++) {
        var impar = numbers[i]

        if (impar % 2 == 0) {

        }
        else odd++
    }

    return odd

}

var odds = countOddNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(odds) // 5

var odds = countOddNumbers([234, 897, 562, 958, 951])
console.log(odds) // 2

var odds = countOddNumbers([-101, 2, 13, -20, 21, -35, 80])
console.log(odds) // 4





console.log('DEMO countNumbers')

function countNumbers(numbers, what) {

    if (what == 'positive') {
        var pos = 0

        for (var i = 0; i < numbers.length; i++) {
            var num = numbers[i]

            if (num >= '0') {
                pos++
            }
        }


        return pos

    } else if (what == 'negative') {
        var neg = 0

        for (var i = 0; i < numbers.length; i++) {
            var num = numbers[i]

            if (num < '0') {
                neg++
            }
        }


        return neg

    } else if (what == 'even') {
        var even = 0

        for (var i = 0; i < numbers.length; i++) {
            var par = numbers[i]

            if (par % 2 == 0) {
                even++
            }
        }

        return even

    } else if (what == 'odd') {

        var odd = 0

        for (var i = 0; i < numbers.length; i++) {
            var impar = numbers[i]
    
            if (impar % 2 == 0) {
    
            }
            else odd++
        }
    
        return odd
    
    } else {

        return numbers.length
    }

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