describe('TEST find')

// ______________________________________________________________________________



var array = [10, 20, 30, 40, 50]
var items = []
var res = find(array, function (element, index) {
    items[index] = element

    return element > 30
})

if (res === 40
    && items.length === 4
    && items[0] === array[0]
    && items[1] === array[1]
    && items[2] === array[2]
    && items[3] === array[3])
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________



var array = ['one', 'two', 'three', 'four']
var items = []
var res = find(array, function (element, index) {
    items[index] = element

    return element.startsWith('th')
})

if (res === 'three'
    && items.length === 3
    && items[0] === array[0]
    && items[1] === array[1]
    && items[2] === array[2])
    success('test 2 ok')
else
    fail('test 2 failed')

// ______________________________________________________________________________



var array = ['one', 'two', 'three', 'four']
var items = []
var res = find(array, function (element, index) {
    items[index] = element

    return element.startsWith('fiv')
})

if (res === undefined
    && items.length === 4
    && items[0] === array[0]
    && items[1] === array[1]
    && items[2] === array[2]
    && items[3] === array[3])
    success('test 3 ok')
else
    fail('test 3 failed')