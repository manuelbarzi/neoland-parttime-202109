describe('TEST find')

describe('Case 1')
//Cuidado a la hora de poner en el test indexes[] y arrays[], en filter() va a entrar a iterar toda la longitud de words. Pero en find(), una vez que encuentra el primer elemento que cumple element > 10 deja de iterar. Por eso en find() indexes.length === 2, arrays.length === 2

var indexes = []
var arrays = []

var array = new Chachay(5, 12, 8, 130, 44)
var res = array.find(function (element, index, array) {
    indexes[indexes.length] = index
    arrays[arrays.length] = array
    return element > 10
})

if (typeof res === 'number'
    && array.length === 5
    && array[0] === 5
    && array[1] === 12
    && array[2] === 8
    && array[3] === 130
    && array[4] === 44
    && res > 10
    && indexes.length === 2
    && indexes[0] === 0
    && indexes[1] === 1
    && arrays.length === 2
    && arrays[0] === array
    && arrays[1] === array)
    success('test ok')
else
    fail('test ko')

describe('Case 2')

var indexes = []
var arrays = []

var array = new Chachay(5, 1, 3, 0, 4)
var res = array.find(function (element, index, array) {
    indexes[indexes.length] = index
    arrays[arrays.length] = array
    return element > 10
})

if (typeof res === 'undefined'
    && array.length === 5
    && array[0] === 5
    && array[1] === 1
    && array[2] === 3
    && array[3] === 0
    && array[4] === 4
    && indexes.length === 5
    && indexes[0] === 0
    && indexes[1] === 1
    && indexes[2] === 2
    && indexes[3] === 3
    && indexes[4] === 4
    && arrays.length === 5
    && arrays[0] === array
    && arrays[1] === array
    && arrays[2] === array
    && arrays[3] === array
    && arrays[4] === array)
    success('test ok')
else
    fail('test ko')

describe('case 3')

var numbers = new Chachay(10, -10, 20, -20, 30, -30, 40, -40)
var indexes = []
var arrays = []

var res = numbers.find(function (number, index, array) {
    indexes[indexes.length] = index
    arrays[arrays.length] = array
    return number > 21
})

if (typeof res === 'number'
    && numbers.length === 8
    && numbers[0] === 10
    && numbers[1] === -10
    && numbers[2] === 20
    && numbers[3] === -20
    && numbers[4] === 30
    && numbers[5] === -30
    && numbers[6] === 40
    && numbers[7] === -40
    && res === 30
    && indexes.length ===5
    && indexes[0] === 0
    && indexes[1] === 1
    && indexes[2] === 2
    && indexes[3] === 3
    && indexes[4] === 4
    && arrays.length === 5
    && arrays[0] === numbers
    && arrays[1] === numbers
    && arrays[2] === numbers
    && arrays[3] === numbers
    && arrays[4] === numbers
    )
    success('test OK')
else
    fail('test KO')