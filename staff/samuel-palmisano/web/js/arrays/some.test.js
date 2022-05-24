describe('TEST some')


var numbers = [1, 1, 1, 1, 1, 0, 1, 1]

var items = []

var hasValueZero = function (element, index) {
    items[index] = element

    return element === 0
}

var res = some(numbers, hasValueZero)

if (typeof res === 'boolean'
    && res === true
    && items.length === 6
    && items[0] === 1
    && items[1] === 1
    && items[2] === 1
    && items[3] === 1
    && items[4] === 1
    && items[5] === 0)
    success('test 1 ok')
else
    fail('test 1 failed')

//____________________________________________________________

var bananas = { name: 'banana', quantity: 10 }
var oranges = { name: 'orange', quantity: 14 }
var lemons = { name: 'lemon', quantity: 4 }
var melons = { name: 'melon', quantity: 1 }
var mangos = { name: 'mango', quantity: 0 }

var fruits = [
    bananas,
    oranges,
    lemons,
    melons,
    mangos
]

var items = []

var hasLessThan3Units = function (fruit, index) {
    items[index] = fruit

    return fruit.quantity < 3
}

var res = some(fruits, hasLessThan3Units)

if (typeof res === 'boolean'
    && res === true
    && items.length === 4
    && items[0] === bananas
    && items[1] === oranges
    && items[2] === lemons
    && items[3] === melons)
    success('test 1 ok')
else
    fail('test 2 failed')

//_________________________________________________________________


    var numbers = [14, 36, 98, 62, 4, 53]
    
    var items = []
    
    var biggerThan100 = function (element, index) {
        items[index] = element
    
        return element > 100
    }
    
    var res = some(numbers, biggerThan100)
    
    if (typeof res === 'boolean'
        && res === false
        && items.length === 6
        && items[0] === 14
        && items[1] === 36
        && items[2] === 98
        && items[3] === 62
        && items[4] === 4
        && items[5] === 53)
        success('test 3 ok')
    else
        fail('test 3 failed')
    