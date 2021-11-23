console.log('TEST fill')

// _____________________________________________________________

var array = ['Raquel', 'Lucas', 'Samuel']
var res = fill(array, 'Julio', 2)

if (res instanceof Array
    && res.length === 3
    && res[0] === 'Raquel'
    && res[1] === 'Lucas'
    && res[2] === 'Julio')
    console.log('test 1 ok')
else
console.log('test 1 failed')

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
    console.log('test 2 ok')
else
    console.log('test 2 failed')


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
    console.log('test 3 ok')
else
    console.log('test 3 failed')

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
    console.log('test 3 ok')
else
    console.log('test 3 failed')

// _____________________________________________________________

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
    console.log('test 4 ok')
else
    console.log('test 4 failed')

    console.log(res)

