describe('------------------------ TEST find')

describe('case 1')

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
var res = find(words, function (word) {
    return word.length > 6


})

if (res === 'exuberant'
    && words.length === 6
    && words[0] === 'spray'
    && words[1] === 'limit'
    && words[2] === 'elite'
    && words[3] === 'exuberant'
    && words[4] === 'destruction'
    && words[5] === 'present')
    success('test ok')
else
    fail('test ko')


describe('case 2')

var numbers = [10, -10, 20, -20, 30, -30, 40, -40]
var res = find(numbers, function (number) {
    return number > 21
})

if (res === 30
    && numbers.length === 8
    && numbers[0] === 10
    && numbers[1] === -10
    && numbers[2] === 20
    && numbers[3] === -20
    && numbers[4] === 30
    && numbers[5] === -30
    && numbers[6] === 40
    && numbers[7] === -40)
    success('test ok')
else
    fail('test ko')


//hacer un test donde no detecta ningun 
//elemento , será undefined

describe('case 3')

var name = 'Patrick'
var names = ['Ana', 'Pedro', 'Luis', 'Lola', 'María', 'José']
var res = find(names, function (name) {
    if (name !== names) {
        return undefined
    } else {
        return names
    }
})

if (res === undefined
    && names.length === 6
    && names[0] === 'Ana'
    && names[1] === 'Pedro'
    && names[2] === 'Luis'
    && names[3] === 'Lola'
    && names[4] === 'María'
    && names[5] === 'José')

    success('test ok')
else
    fail('test ko')