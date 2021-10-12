
var x = { nombre: 'Jules', edad: 35, ciudad: 'Andorra' } // declaramos la variable x para un string
//x.edad // la consola nos mostrará edad:35, ya que está en la posición 1 (se empieza a contar desde 0)
var y = x
var z = y

//x[1] // es cuando son arrays, te muestra la posicion segun el numero que pongas



console.log('DEMO add')

var add = function (a, b) // declaramos la variable add a la funcion a y b
{
    return a * b // le decimos que nos devuelva una multiplicación
}

console.log(add(4, 5)) // nos muestra en la consola la variable add, luego definimos lo que queremos que haga  


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


// ITERACIONES
// ARRAYS

console.log('DEMO fruits')

var fruits = ['banana', 'apple', 'orange', 'melon', 'pineapple', 'cherry']

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// console.log(fruits[4])
// console.log(fruits[5])

var count = 0  // declaramos la variable count y la ponemos que cuente desde 0

while (count < fruits.length) { // mientras 0 sea menor que la longitudad del array fruits (son 6)
    var fruit = fruits[count]  // declaramos la variable fruit para guardar el contador de las frutas

    console.log(fruit) // mostramos en la consola la variable fruit

    //count = count + 1
    count++
}
console.log(' ')
console.log('DEMO FRUTAS JULES')

var frutas = ['manzana', 'pera', 'sandia', 'platano', 'ciruela', 'coco'] // declaramos la variable frutas, dentro del array 
// y añadimos las frutas

var contador = 0 // declaramos la variable contador para que empiece a contar desde la posicion 0 --> manzana

while (contador < frutas.length) { // mientras el contador sea menor a la longitud de las frutas
    var fruta = frutas[contador]	// dice en que posicion esta la fruta y la guarda en la variable fruta. Fruta apunta a MANZANA

    console.log(fruta)

    contador++
}

console.log(' ')


console.log('DEMO spell name')

var name = 'Peter Pan'
// var name = 'John Doe'

// var i = 0

// while (i < name.length) {
//     var char = name[i]

//     console.log(char)

//     i++
// }

for (var i = 0; i < name.length; i++) { // .length es la longitud de name, sus caracteres
    var char = name[i]

    console.log(char)
}

console.log('DEMO spell (function)')

//var spell = function() {
function spell(text) {
    for (var i = 0; i < text.length; i++) {
        var char = text[i] // definimos la variable char para guardar la iteracion de text

        console.log(char)
    }
}

spell('Pepito Grillo')
spell('abcdefghijklmnopqrstuvwxyz')

console.log(' ')

console.log('DEMO countSpaces')

function countSpaces(texto) {
    /*
    iterar en el texto, todos sus caracteres y detectar los espacios y contarlos
    */
    var contador = 0 // declaramos una variable para que empiece desde 0

    for (var i = 0; i < texto.length; i++) {
        var caracteres = texto[i]  // declaramos una variable
        if (caracteres === ' ')
            contador++
    }
    return contador
}

var spaces = countSpaces('hola mundo')
console.log(spaces) // 1

var spaces = countSpaces('adios mundo cruel')
console.log(spaces) // 2

var spaces = countSpaces('flipo con js, me encanta! es chuli piruli, chachi guai')
console.log(spaces) // 9

console.log(' ')
console.log('DEMO countVocals')

// TODO

function countVocals(texto) {
    /*
    iterar en el texto, todos sus caracteres y detectar los espacios y contarlos
    */
    var contador = 0 // declaramos la variable para iniciar desde 0

    for (var i = 0; i < texto.length; i++) {

        var caracteres = texto[i] // declaramos la varibale para que itere en el texto

        if (caracteres === 'a')
            contador++

        else if (caracteres === 'e')
            contador++

        else if (caracteres === 'i')
            contador++

        else if (caracteres === 'o')
            contador++

        else if (caracteres === 'u')
            contador++
    }
    return contador
}

var vocals = countVocals('esto es un infierno, bien lo sabes tu')
console.log(vocals) // 14




console.log(' ')
console.log('DEMO countPositiveNumbers')

function countPositiveNumbers(numeros) {

    var contador = 0

    for (var i = 0; i < numeros.length; i++) {

        var num = numeros[i] // declaramos la variable para guardar la iteracion de numeros

        if (num > 0)
            contador++

    }
    return contador

}
var positives = countPositiveNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(positives) // 9

var positives = countPositiveNumbers([234, -897, 562, -958, 951])
console.log(positives) // 3

var positives = countPositiveNumbers([-101, 2, 13, 20, 21, -35, 80])
console.log(positives) // 5



console.log(' ')
console.log('DEMO countNegativeNumbers')

function countNegativeNumbers(numeros) {
    // TODO

    var contador = 0

    for (var i = 0; i < numeros.length; i++) {
        var num = numeros[i] // declaramos una variable para guardar la iteración de numeros

        if (num < 0)
            contador++
    }
    return contador
}

var negatives = countNegativeNumbers([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(negatives) // 0

var negatives = countNegativeNumbers([234, -897, 562, -958, -777, 951])
console.log(negatives) // 2

var negatives = countNegativeNumbers([-101, 2, 13, 20, 21, -35, 80])
console.log(negatives) // 2




console.log(' ')
console.log('DEMO countEvenNumbers')

function countEvenNumbers(numeros) {
    // TODO

    var contador = 0

    for (var i = 0; i < numeros.length; i++) {
        var num = numeros[i] // declaramos la variable para guardar la iteración de numeros
        if (num % 2 === 0) // dividimos el numero entre 2 y validamos si el resto es 0
            contador++
    }
    return contador

}

var evens = countEvenNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(evens) // 5

var evens = countEvenNumbers([234, 897, 562, 958, 951])
console.log(evens) // 3

var evens = countEvenNumbers([-101, 2, 13, -20, 21, -35, 80])
console.log(evens) // 3



console.log(' ')
console.log('DEMO countOddNumbers')

function countOddNumbers(numeros) {
    // TODO
    var contador = 0

    for (var i = 0; i < numeros.length; i++) {
        var num = numeros[i] // declaramos la variable para guardar la iteracion de numeros

        if (num % 2 !== 0) // si el numero entre 2 es diferente a 0, es impar
            contador++
    }
    return contador
}

var odds = countOddNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(odds) // 5

var odds = countOddNumbers([234, 897, 562, 958, 951])
console.log(odds) // 2

var odds = countOddNumbers([-101, 2, 13, -20, 21, -35, 80])
console.log(odds) // 4


console.log(' ')
console.log('DEMO countNumbers')

function countNumbers(numbers, what) {
    // TODO

    var contador = 0

    if (what === 'positive') {

        for (var i = 0; i < numbers.length; i++) {
            var num = numbers[i]
            if (num > 0) { // positivo
                contador++
            }
        }
        return contador
    }

    else if (what === 'negative') {
        for (var i = 0; i < numbers.length; i++) {
            var num = numbers[i]
            if (num < 0) { // negativo
                contador++
            }
        }
        return contador
    }

    else if (what === 'even') {
        for (var i = 0; i < numbers.length; i++) {
            var num = numbers[i]
            if (num %2 === 0) { // par
                contador++
            }
        }
        return contador
    }

    else if (what === 'odd') {
        for (var i = 0; i < numbers.length; i++) {
            var num = numbers[i]
            if (num %2 !== 0) { // impar
                contador++
            }
        }
        return contador
    }

    else if(what === undefined){
        for (var i = 0; i < numbers.length; i++) {
            var num = numbers[i]
            if (typeof num === 'number') { // typeof devuelve un valor que no existe 
                contador++
            }
        }
        return contador
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


// DEMO REVERSE

const a = ['hola'];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]

