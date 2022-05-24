describe('TEST reverse')

// ______________________________________________________________________________

var array = [1, 2, 3]
var res = reverse(array)

if (res instanceof Array
    && res.length === array.length
    && res === array
    && res[0] === 3
    && res[1] === 2
    && res[2] === 1)
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________

var array = ['a', 'b', 'c', 'd', 'e']
var res = reverse(array)

if (res instanceof Array
    && res.length === array.length
    && res === array
    && res[0] === 'e'
    && res[1] === 'd'
    && res[2] === 'c'
    && res[3] === 'b'
    && res[4] === 'a')
    success('test 2 ok')
else
    fail('test 2 failed')

// ______________________________________________________________________________

var array = [true, false]
var res = reverse(array)

if (res instanceof Array
    && res.length === array.length
    && res === array
    && res[0] === false
    && res[1] === true)
    success('test 3 ok')
else
    fail('test 3 failed')

