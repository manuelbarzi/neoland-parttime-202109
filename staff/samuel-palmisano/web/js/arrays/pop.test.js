describe('TEST pop')

// ______________________________________________________________________________

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
var res = pop(plants)

if (typeof res === 'string'
    && res === 'tomato'
    && plants.length === 4
    && plants[0] === 'broccoli'
    && plants[1] === 'cauliflower'
    && plants[2] === 'cabbage'
    && plants[3] === 'kale')
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________

var array = []
var res = pop(array)

if (typeof res === 'undefined'
    && res === undefined
    && array.length === 0)
    success('test 2 ok')
else
    fail('test 2 failed')

// ______________________________________________________________________________

var object = { name: 'Peter' }
var func = function() {}
var arr = [1, 2, 3]
var array = [null, undefined, true, 1, func, arr, NaN, Infinity, Math.PI, object]
var res = pop(array)

if (typeof res === 'object'
    && res === object
    && array.length === 9
    && array[0] === null
    && array[1] === undefined
    && array[2] === true
    && array[3] === 1
    && array[4] === func
    && array[5] === arr
    && Number.isNaN(array[6])
    && array[7] === Infinity
    && array[8] === Math.PI) // this doesn't work => array[6] === NaN
    success('test 3 ok')
else
    fail('test 3 failed')