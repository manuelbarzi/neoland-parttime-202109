describe('TEST indexOf')

// ______________________________________________________________________________


var array = ['ant', 'bison', 'camel', 'duck', 'cat']
var res = indexOf(array, 'bison')

if (typeof res === 'number'
    && res === 1)
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________



var array = ['ant', 'bison', 'camel', 'duck', 'cat']
var res = indexOf(array, 'cat', 2)

if (typeof res === 'number'
    && res === 4)
    success('test 2 ok')
else
    fail('test 2 failed')

// ______________________________________________________________________________



var array = ['ant', 'bison', 'camel', 'duck', 'cat']
var res = indexOf(array, 'giraffe')

if (typeof res === 'number'
    && res === -1)
    success('test 3 ok')
else
    fail('test 3 failed')

// ______________________________________________________________________________



var array = [true, 'hola mundo', 10, { name: 'Peter'}, null, undefined, function() {}, [1, 2, 3], NaN, Infinity, Math.PI]
var res = indexOf(array, null)

if (typeof res === 'number'
    && res === 4)
    success('test 4 ok')
else
    fail('test 4 failed')

// ______________________________________________________________________________



var object = { name: 'Peter'}
var array = [true, 'hola mundo', 10, object, null, undefined, function() {}, [1, 2, 3], NaN, Infinity, Math.PI]
var res = indexOf(array, object)

if (typeof res === 'number'
    && res === 3)
    success('test 5 ok')
else
    fail('test 5 failed')

// ______________________________________________________________________________



var object = [1, 2, 3]
var array = [true, 'hola mundo', 10, { name: 'Peter'}, null, undefined, function() {}, object, NaN, Infinity, Math.PI]
var res = indexOf(array, object)

if (typeof res === 'number'
    && res === 7)
    success('test 6 ok')
else
    fail('test 6 failed')