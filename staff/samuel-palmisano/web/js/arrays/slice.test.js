describe('TEST slice')

// ______________________________________________________________________________

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 2)

if (res instanceof Array
    && res.length === 3
    && res[0] === 'camel'
    && res[1] === 'duck'
    && res[2] === 'elephant'
    && animals.length === 5
    && animals[0] === 'ant'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'elephant')
    success('test 1 ok')
else
    fail('test 1 failed')

// ______________________________________________________________________________

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 2, 4)

if (res instanceof Array
    && res.length === 2
    && res[0] === 'camel'
    && res[1] === 'duck'
    && animals.length === 5
    && animals[0] === 'ant'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'elephant')
    success('test 2 ok')
else
    fail('test 2 failed')

// ______________________________________________________________________________

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 1, 7)

if (res instanceof Array
    && res.length === 4
    && res[0] === 'bison'
    && res[1] === 'camel'
    && res[2] === 'duck'
    && res[3] === 'elephant'
    && animals.length === 5
    && animals[0] === 'ant'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'elephant')
    success('test 3 ok')
else
    fail('test 3 failed')

// ______________________________________________________________________________

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 2, 0)

if (res instanceof Array
    && res.length === 0
    && animals.length === 5
    && animals[0] === 'ant'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'elephant')
    success('test 4 ok')
else
    fail('test 4 failed')

// ______________________________________________________________________________

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, -2)

if (res instanceof Array
    && res.length === 2
    && res[0] === 'duck'
    && res[1] === 'elephant'
    && animals.length === 5
    && animals[0] === 'ant'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'elephant')
    success('test 5 ok')
else
    fail('test 5 failed')

// ______________________________________________________________________________

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, -100)

if (res instanceof Array
    && res.length === 5
    && res[0] === 'ant'
    && res[1] === 'bison'
    && res[2] === 'camel'
    && res[3] === 'duck'
    && res[4] === 'elephant'
    && animals.length === 5
    && animals[0] === 'ant'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'elephant')
    success('test 6 ok')
else
    fail('test 6 failed')

// ______________________________________________________________________________

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 2, -1)

if (res instanceof Array
    && res.length === 2
    && res[0] === 'camel'
    && res[1] === 'duck'
    && animals.length === 5
    && animals[0] === 'ant'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'elephant')
    success('test 7 ok')
else
    fail('test 7 failed')

// ______________________________________________________________________________

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 2, -100)

if (res instanceof Array
    && res.length === 0
    && animals.length === 5
    && animals[0] === 'ant'
    && animals[1] === 'bison'
    && animals[2] === 'camel'
    && animals[3] === 'duck'
    && animals[4] === 'elephant')
    success('test 8 ok')
else
    fail('test 8 failed')