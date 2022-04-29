describe('TEST filter')

describe('Case 1')
//Cuidado a la hora de poner en el test indexes[] y arrays[], en filter() va a entrar a iterar toda la longitud de words. No es como el find(), que una vez que encuentra el primer elemento que cumple word.length > 6 deja de iterar. Por eso en filter() indexes.length === 6, arrays.length === 6

var words = new Chachay('spray', 'limit', 'elite', 'exuberant', 'destruction', 'present')
var indexes = []
var arrays = []

var res = words.filter(function (word, index, array) {
    indexes[indexes.length] = index
    arrays[arrays.length] = array
    return word.length > 6
})

if (res instanceof Array
    && res.length === 3
    && res[0] === 'exuberant'
    && res[1] === 'destruction'
    && res[2] === 'present'
    && words.length === 6
    && words[0] === 'spray'
    && words[1] === 'limit'
    && words[2] === 'elite'
    && words[3] === 'exuberant'
    && words[4] === 'destruction'
    && words[5] === 'present'
    && indexes.length === 6
    && indexes[0] === 0
    && indexes[1] === 1
    && indexes[2] === 2
    && indexes[3] === 3
    && indexes[4] === 4
    && indexes[5] === 5
    && arrays.length === 6
    && arrays[0] === words
    && arrays[1] === words
    && arrays[2] === words
    && arrays[3] === words
    && arrays[4] === words
    && arrays[5] === words)
    success('test OK')
else
    fail('test KO')

describe('Case 2')

var words = new Chachay('spray', 'limit', 'elite', 'exuberant', 'destruction', 'present')
var indexes = []
var arrays = []

var res = words.filter(function (word, index, array) {
    indexes[indexes.length] = index
    arrays[arrays.length] = array
    return word.length > 20
})

if (res instanceof Array
    && res.length === 0
    && words.length === 6
    && words[0] === 'spray'
    && words[1] === 'limit'
    && words[2] === 'elite'
    && words[3] === 'exuberant'
    && words[4] === 'destruction'
    && words[5] === 'present'
    && indexes.length === 6
    && indexes[0] === 0
    && indexes[1] === 1
    && indexes[2] === 2
    && indexes[3] === 3
    && indexes[4] === 4
    && indexes[5] === 5
    && arrays.length === 6
    && arrays[0] === words
    && arrays[1] === words
    && arrays[2] === words
    && arrays[3] === words
    && arrays[4] === words
    && arrays[5] === words)
    success('test OK')
else
    fail('test KO')


describe('case 3')

var numbers = new Chachay(10, -10, 20, -20, 30, -30, 40, -40)
var indexes = []
var arrays = []

var res = numbers.filter(function (number, index, array) {
    indexes[indexes.length] = index
    arrays[arrays.length] = array
    return number > 0
})

if (res instanceof Array
    && res.length === 4
    && res[0] === numbers[0]
    && res[1] === numbers[2]
    && res[2] === numbers[4]
    && res[3] === numbers[6]
    && numbers.length === 8
    && numbers[0] === 10
    && numbers[1] === -10
    && numbers[2] === 20
    && numbers[3] === -20
    && numbers[4] === 30
    && numbers[5] === -30
    && numbers[6] === 40
    && numbers[7] === -40
    && indexes.length === 8
    && indexes[0] === 0
    && indexes[1] === 1
    && indexes[2] === 2
    && indexes[3] === 3
    && indexes[4] === 4
    && indexes[5] === 5
    && indexes[6] === 6
    && indexes[7] === 7
    && arrays.length === 8
    && arrays[0] === numbers
    && arrays[1] === numbers
    && arrays[2] === numbers
    && arrays[3] === numbers
    && arrays[4] === numbers
    && arrays[5] === numbers
    && arrays[6] === numbers
    && arrays[7] === numbers
)
    success('test OK')
else
    fail('test KO')