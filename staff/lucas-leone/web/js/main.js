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

var spaces = countSpaces('flipo con js, me encanta! es chuli piruli, chachi guai')
console.log(spaces) // 8

console.log('DEMO countVocals')

// TODO


function countVocals(text) {
    var count = 0

    for (var i = 0; i < text.length; i++) {
        var char = text[i]
        if (char == 'a') {
            count++
        }
        else if (char == 'e') {
            count++
        }
        else if (char == 'i') {
            count++
        }
        else if (char == 'o') {
            count++
        }
        else if (char == 'u') {
            count++
        } else if (char == 'A') {
            count++
        }
        else if (char == 'E') {
            count++
        }
        else if (char == 'I') {
            count++
        }
        else if (char == 'O') {
            count++
        }
        else if (char == 'U') {
            count++
        }

    }
    return count
}
