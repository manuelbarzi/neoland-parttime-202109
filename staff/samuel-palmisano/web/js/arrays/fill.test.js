describe('TEST fill')

// _____________________________________________________________

var array = ['Raquel', 'Lucas', 'Samuel']
var res = fill(array, 'Julio', 2)

if (res instanceof Array
    && res.length === 3
    && res[0] === 'Raquel'
    && res[1] === 'Lucas'
    && res[2] === 'Julio')
    success('test 1 ok')
else
    fail('test 1 failed')

// _____________________________________________________________

var array = ['Raquel', 'Lucas', 'Samuel', 'Manuel', 'Yoana', 'Blanca']
var res = fill(array, 'Julio', 2, 5)

if (res instanceof Array
    && res.length === 6
    && res[0] === 'Raquel'
    && res[1] === 'Lucas'
    && res[2] === 'Julio'
    && res[3] === 'Julio'
    && res[4] === 'Julio'
    && res[5] === 'Blanca')
    success('test 2 ok')
else
    fail('test 2 failed')


// _____________________________________________________________

var array = ['Raquel', 'Lucas', 'Samuel', 'Manuel', 'Yoana', 'Blanca']
var res = fill(array, 'Julio')

if (res instanceof Array
    && res.length === 6
    && res[0] === 'Julio'
    && res[1] === 'Julio'
    && res[2] === 'Julio'
    && res[3] === 'Julio'
    && res[4] === 'Julio'
    && res[5] === 'Julio')
    success('test 3 ok')
else
    fail('test 3 failed')

// _____________________________________________________________

var array = ['Raquel', 'Lucas', 'Samuel', 'Manuel', 'Yoana', 'Blanca']
var res = fill(array, 'Julio', -4, -2)

if (res instanceof Array
    && res.length === 6
    && res[0] === 'Raquel'
    && res[1] === 'Lucas'
    && res[2] === 'Julio'
    && res[3] === 'Julio'
    && res[4] === 'Yoana'
    && res[5] === 'Blanca')
    success('test 4 ok')
else
    fail('test 4 failed')

// _____________________________________________________________
        // -6          -5      -4      -3      -2      -1      0
         // 0           1       2       3       4       5       6
var array = ['Raquel', 'Lucas', 'Samuel', null, 'Yoana', 'Blanca']
var res = fill(array, 'Julio', 'Lucas', null)

if (res instanceof Array
    && res.length === 6
    && res[0] === 'Raquel'
    && res[1] === 'Lucas'
    && res[2] === 'Samuel'
    && res[3] === null
    && res[4] === 'Yoana'
    && res[5] === 'Blanca')
    success('test 5 ok')
else
    fail('test 5 failed')

    


