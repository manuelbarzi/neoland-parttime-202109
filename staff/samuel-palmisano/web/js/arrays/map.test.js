describe('TEST map')

// ______________________________________________________________________________


var array = [1, 2, 3]

var res = map(array, function (element, index) {
    return element * 10 + index
})

if (res instanceof Array
    && res.length === array.length
    && res[0] === array[0] * 10 + 0
    && res[1] === array[1] * 10 + 1
    && res[2] === array[2] * 10 + 2) 
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________

var array = ['a', 'b', 'c']

var res = map(array, function (element, index) {
    return element + index
})

if (res instanceof Array
    && res.length === array.length
    && res[0] === array[0] + 0
    && res[1] === array[1] + 1
    && res[2] === array[2] + 2)
    success('test 2 ok')
else
    fail('test 2 failed')

// ______________________________________________________________________________
