describe('TEST repeat')

// ______________________________________________________________________________


var string = 'hola'
var count = 0

var res = repeat(string, count)

if (typeof res === 'string'
    && res.length === 0
    && res === '')
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________


var string = 'hola'
var count = 1

var res = repeat(string, count)

if (typeof res === 'string'
    && res.length === string.length
    && res === string)
    success('test 2 ok')
else
    fail('test 2 failed')

// ______________________________________________________________________________


var string = 'hola'
var count = 10

var res = repeat(string, count)

if (typeof res === 'string'
    && res.length === string.length * count
    && res === string.repeat(10))
    success('test 3 ok')
else
    fail('test 3 failed')