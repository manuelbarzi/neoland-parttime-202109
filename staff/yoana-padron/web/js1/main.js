var x = { name: 'Peter', age: 30 }
var y = x
var z = y

console.log('DEMO add')

var add = function (a, b) {
    return a + b
}

console.log(add(4, 5))

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

var age = 20

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

//var name = 'Peter pan'

var name = 'John Doe'

// var i = 0

// while (i < name.length){
//     var char = name[i]

//     console.log(char)

//     i++
// }

for (var i = 0; i < name.length; i++) {
    var char = name[i]
    console.log(char)
}

console.log('DEMO spell (funtion)')

//var spell = funtion(){
function spell(text) {
    for (var i = 0; i < text.length; i++) {
        var char = text[i]
        console.log(char)
    }
}


spell('Yoana Padron')
spell('abcdefghijk')



console.log('DEMO countSpaces')

function countSpaces(text) {
    /*
    iterar en el texto, todos sus caracteres y detectar los espacios y contarlos
    */

    var count = 0

    for (var i = 0; i < text.length; i++) {
        var char = text[i]

        if (char === ' ') {
            count++ //count = count + 1
        }
    }

    return count
}

var spaces = countSpaces('Hola Mundo')
console.log(spaces) //1

var spaces = countSpaces('Adios Mundo Cruel')
console.log(spaces) //2

var spaces = countSpaces('Me encanta JS, flipo')
console.log(spaces) //3



console.log('DEMO countVocals')

function countVocals(vocals) {

    var count = 0

    for (var i = 0; i < vocals.length; i++) {
        var char = vocals[i]

        if (char === 'a') {
            count++
        }
        else if (char === 'e') {
            count++
        }
        else if (char === 'i') {
            count++
        }
        else if (char === 'o') {
            count++
        }
        else if (char === 'u') {
            count++
        }
        else if (char === 'A') {
            count++
        }
        else if (char === 'E') {
            count++
        }
        else if (char === 'I') {
            count++
        }
        else if (char === 'O') {
            count++
        }
        else if (char === 'U') {
            count++
        }
    }

    return count
}


var vocals = countVocals('hola mundo')
console.log(vocals) // 4

var vocals = countVocals('adios mundo cruel')
console.log(vocals) // 7

var vocals = countVocals('pasito a pasito, suave, Suavecito')
console.log(vocals) // 15




console.log('DEMO countPositiveNumbers')

function countPositiveNumbers(positives) {

    var count = 0

    for (var i = 0; i < positives.length; i++) {

        var number = positives[i]

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

function countNegativeNumbers(negatives) {

    var count = 0

    for (var i = 0; i < negatives.length; i++) {
        var numbers = negatives[i]

        if (numbers < 0) {
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

function countEvenNumbers(evenNumbers) {

    var count = 0

    for (var i = 0; i < evenNumbers.length; i++) {
        var evenNum = evenNumbers[i]

        if (evenNum % 2 == 0) {
            count++
        }
        else {
            //Do nothing
        }

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

function countOddNumbers(oddNumbers) {

    var count = 0

    for (var i = 0; i < oddNumbers.length; i++) {
        var oddNum = oddNumbers[i]

        if (oddNum % 2 == 0) {
            // Do nothing
        }
        else {
            count++
        }
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

    if (what == 'positive') {
        var result = countPositiveNumbers(numbers)
    }
    else if (what == 'negative') {
        var result = countNegativeNumbers(numbers)
    }
    else if (what == 'even') {
        var result = countEvenNumbers(numbers)
    }
    else if (what == 'odd') {
        var result = countOddNumbers(numbers)
    }
    else {
        var result = numbers.length
    }
    return result
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
