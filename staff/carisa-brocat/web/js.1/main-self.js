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
console.log(spaces) // 8

console.log('DEMO countVocals')
function countVocals(text) {
    // TODO
}

var vocals = countVocals('hola mundo')
console.log(vocals) // 4

var vocals = countVocals('adios mundo cruel')
console.log(vocals) // 7

var vocals = countVocals('pasito a pasito, suave, suavecito')
console.log(vocals) // 15

console.log('DEMO countPositiveNumbers')

function countPositiveNumbers(numbers) {
    // TODO
}

var positives = countPositiveNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(positives) // 9

var positives = countPositiveNumbers([234, -897, 562, -958, 951])
console.log(positives) // 3

var positives = countPositiveNumbers([-101, 2, 13, 20, 21, -35, 80])
console.log(positives) // 5

console.log('DEMO countNegativeNumbers')

function countNegativeNumbers(numbers) {
    // TODO
}

var negatives = countNegativeNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(negatives) // 0

var negatives = countNegativeNumbers([234, -897, 562, -958, 951])
console.log(negatives) // 2

var negatives = countNegativeNumbers([-101, 2, 13, 20, 21, -35, 80])
console.log(negatives) // 2

console.log('DEMO countEvenNumbers')

function countEvenNumbers(numbers) {
    // TODO
}

var evens = countEvenNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(evens) // 5

var evens = countEvenNumbers([234, 897, 562, 958, 951])
console.log(evens) // 3

var evens = countEvenNumbers([-101, 2, 13, -20, 21, -35, 80])
console.log(evens) // 3

console.log('DEMO countOddNumbers')

function countOddNumbers(numbers) {
    // TODO
}

var odds = countOddNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(odds) // 5

var odds = countOddNumbers([234, 897, 562, 958, 951])
console.log(odds) // 2

var odds = countOddNumbers([-101, 2, 13, -20, 21, -35, 80])
console.log(odds) // 4

console.log('DEMO countNumbers')

function countNumbers(numbers, what) {
    // TODO
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

//instanceof para saber q tipo de objetos


/* 
una variable no puede tener mas de una propiedad igual

-Array (tiene inidces dentro) (tipo de objeto)
los indeces se empiezan a contar desde cero 

x[0]=1 se ha creado un array, y en la posicion cero tiene valor 1
a= [1, 2, 3] array length 3

x = {name: peter, age: 40}

a.length

a['length'] = a["length"] se puede utilizar comillas dobes o simples

cuando se pone array dentro de array se crea un amatriz

var a = [[1,2,3][3, 4, 5]]
para acceder al 4 ser'ia
a[1][2]

-funcion (tipo especifico de objeto)

var add= new function..... no se usa, pero detras hay esto

   definicion de la funcion
 var add = function (a,b){
    return a+b
}
  definiendo valores
add(1,2) 

console.dir() te permite inspeccionar cualquier objeto, teda toda la info

a cualquier objeto le puedes poner propiedades

add.version = 'pan'

el padre de todos los objetos es object

ej:

var add = function(x, y){
    var result = x + y
    return result
}

control de flujo

=== (es un operador de comparacion,  pregunta, si son iguales los valores)
var lang = 'es'
lang==='en'

if(lang==='en'){
alert('hello, world')
}else if (lang==='es'){
alert('hola mundo')}
else{
alert('privet, mir)} if no siempre tiene q acabar en else

console.log(imprimir en la consola)

bucles

while(count<fruit
    
    a = a+1 = a++

los string tambien se puede indexar se puede acceder a cada una de las letras

*/

var a = 'HOLA MUNDO'

console.log('hola mundo')

var count=0

function countVocals(text){
    for (i=0; i<text.length; i++ ){
        var char = text[i]

        if (char === 'a'){
            count++
        }
        else if (char === 'e'){
            count ++
        }
        else if (char === 'i'){
            count ++
        }
        else if (char === 'o'){
            count ++
        }
        else if (char === 'u'){
            count ++
        }
        }
        return count
    }

        var vocals = countVocals('loca')
        console.log(vocals)