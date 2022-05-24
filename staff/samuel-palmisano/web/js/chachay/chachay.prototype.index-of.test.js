describe('TEST indexOf')

// ______________________________________________________________________________


var animals = new Chachay('ant', 'bison', 'camel', 'duck', 'cat')
var res = animals.indexOf('bison')

if (typeof res === 'number'
    && res === 1
    && animals[0] === 'ant'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'cat'
    )
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________



var animals = new Chachay ('cat', 'bison', 'camel', 'duck', 'cat')
var res = animals.indexOf('cat', 2)

if (typeof res === 'number'
    && res === 4
    && animals[0] === 'cat'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'cat')
    success('test 2 ok')
else
    fail('test 2 failed')

// ______________________________________________________________________________



var animals = new Chachay('ant', 'bison', 'camel', 'duck', 'cat')
var res = animals.indexOf('giraffe')

if (typeof res === 'number'
    && res === -1
    && animals[0] === 'ant'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'cat')
    success('test 3 ok')
else
    fail('test 3 failed')

// ______________________________________________________________________________

