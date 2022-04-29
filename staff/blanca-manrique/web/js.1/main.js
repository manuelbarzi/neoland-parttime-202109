//1. Variables:
var x = { name: 'Peter', age: 30 }
var y = x
var z = y

//2. Funciones:
console.log('DEMO add')

var add = function (a, b) {
    return a + b
}

console.log(add(14, 5))

//3. Condicionales:
//Ejemplo idiomas, monto una estructura en la que dependiendo del valor que tome la variable "lang", me saludará por consola en uno u otro idioma: si lang=ru ---Privet, Mir!, si lang=en---Hello, World!etc, aquí no se contempla la opción de que lang != ru/en/es/it
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

//4. Condicionales:
//Ejemplo edades, monto una estructura en la que dependiendo del valor que tome la variable "age", me sacará por consola de qué tipo de persona se trata: si age<3 ---baby, si age<10---kid, y así hasta llegar a los <60---mature adult. Aquí sí se contempla la opción de que age sea diferente a las condiciones que hemos impuesto previamente: si age >60 old adult, es indiferente qué edad exacta tenga
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

 
//5. BUCLE WHILE: Tengo un array de frutas y quiero que me saque por pantalla toda mi lista de frutas, para ello en vez de ir diciéndole que me imprima índice por índice creo un bucle while    
console.log('DEMO fruits')

var fruits = ['banana', 'apple', 'orange', 'melon', 'pineapple', 'cherry']

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// console.log(fruits[4])
// console.log(fruits[5])


//mientras count < fruits.length se cumpla y sea cierto, en este caso lo es porque el count=0---- ---entra en el bucle: 1. creame una variable var=fruit 2. Esa nueva variable fruit le está pidiendo al array la fruta que está en la posición en la que se encuentra count, en nuestro caso count =0, es decir, le pide la posición 0 del array fruits y se la asigna a la nueva variable fruit------- ahora fruit contiene banana---la saca por pantalla---- el contador se incrementa en 1 unidad: count=1, y vuelve a repetirse el bucle porque se cumple la condición count < fruits.length ----y así hasta que deje de cumplirse esa condición que es cuando termina el bucle.
var count = 0

while (count < fruits.length) {
    var fruit = fruits[count]

    console.log(fruit)

    //count = count + 1
    count++
}

//6. BUCLES WHILE Y FOR: Quiero que me saque por pantalla cada una de las letras que conforman mi variable nameUno y nameDos. Se puede usar tanto WHILE como FOR
console.log('DEMO spell name')
// WHILE:
//inicializo i=0, i va a ir recorriendo todas las posiciones de mi variable nameUno. Mientras que i no supere la longitud de mi variable-------entro en el bucle: 1. creame una nueva variable llamada char 2. Asignale a char la letra correspondiente a la posición de i. En este caso si i=0, asignale a char la letra que ocupa la posición 0 de la variable nameUno = "J"-------imprimelo e incrementa en una unidad a i, de forma que ahora i=1.
var nameUno = 'John Doe'

var i = 0

while (i < nameUno.length) {
    var char = nameUno[i]

    console.log(char)

    i++
}
//FOR
//Es lo mismo que acabamos de hacer arriba pero en este caso usamos un FOR LOOP, éste siempre va a tener 3 partes:
//1.    INICIALIZADOR: ¿Dónde empieza el código?
//2.    LA CONDICIÓN: Que el código se ejecute mientras se cumpla esa condición
//3.    EL INCREMENTO: En este caso el incremento es de 1 unidad
// y dentro del ForLoop tenemos lo que se va a ejecutar de nuestro código.
var nameDos = 'Peter Pan'
for (var i = 0; i < nameDos.length; i++) {
    var char = nameDos[i]

    console.log(char)
}

//7. FUNCIONES
//Queremos que nos saque por pantalla todas las letras que conforman la función spell(text)
console.log('DEMO spell (function)')

//var spell = function() {....SE PUEDE HACER EL SIGUIENTE ATAJO
function spell(text) {
    for (var i = 0; i < text.length; i++) {
        var char = text[i]

        console.log(char)
    }
}

spell('Pepito Grillo')
spell('abcdefghijklmnopqrstuvwxyz')


//8. Contar el nº de espacios que hay en la variable spaces
console.log('DEMO countSpaces')

function countSpaces(text) {
    var count = 0

    for (var i = 0; i < text.length; i++) {
        var char = text[i] //Para recorrer todas las letras de la variable spaces...ir caracter por caracter!!-----ME TRAIGO EL CARACTER

        if (char === ' ') {
            count++ //Pero que solo te cuente los que son espacios----LO EVALÚO Y LO CUENTO SI ES ===
        }
    }

    return count //fuera de FOR, si no, no pararía
}

var spaces = countSpaces('hola mundo')
console.log(spaces) // 1

var spaces = countSpaces('adios mundo cruel')
console.log(spaces) // 2

var spaces = countSpaces('flipo con js, me encanta! es chachi piruli, chuli chili guai')
console.log(spaces) // 10


//9. Contar el nº de espacios que hay en la función  vocals
console.log('DEMO countVocals')

function countVocals(text) {
    var count = 0 

    for (var i=0; i<text.length; i++){
        var chart = text[i]

        if (chart === "a" || chart==="A"){
            count ++
        }
        else if (chart === "e" || chart==="E"){
            count ++
        } 
        else if (chart === "i" || chart==="I"){
            count++
        }
        else if (chart === "o" || chart==="O"){
            count++
        }
        else if (chart=== "u" || chart=== "U"){
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



////10. Contar la cantidad de nº>0 que hay en la función countPositiveNumbers---El 0 NO cuenta como positivo
console.log('DEMO countPositiveNumbers')

function countPositiveNumbers(numbers) {
    var count = 0

    for( var i = 0; i<numbers.length; i++){
        var number = numbers[i]

        if (number>0){
            count ++
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



////11. Contar la cantidad de nº<0 que hay en la función countNegativeNumbers
console.log('DEMO countNegativeNumbers')

function countNegativeNumbers(numbers) {
    var count = 0

    for (var i=0; i<numbers.length; i++){
        var number = numbers[i]
        if (number<0){
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



////12. Contar la cantidad de nº pares que hay en la función countEvenNumbers---El 0 cuenta como PAR
console.log('DEMO countEvenNumbers')

function countEvenNumbers(numbers) {
    var count=0
    for (var i=0; i<numbers.length; i++){
        var number = numbers[i]

        if (number % 2 == 0){
            count++
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



////13. Contar la cantidad de nº impares que hay en la función countOddNumbers
console.log('DEMO countOddNumbers')

function countOddNumbers(numbers) {
    var count = 0

    for (var i = 0; i<numbers.length; i++){
        var number = numbers[i]

        if (number % 2 != 0){
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




////14. Una función que puede reutilizar las funciones que acabamos de hacer en los ejercicios anteriores
console.log('DEMO countNumbers')

function countNumbers(numbers, what) {

    if (what == 'positive') {
        var result = countPositiveNumbers(numbers)
    } 

    else if (what == "negative") {
        var result = countNegativeNumbers(numbers)
    } 

    else if (what == "even") {
        var result = countEvenNumbers(numbers)
    }

    else if (what == "odd") {
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