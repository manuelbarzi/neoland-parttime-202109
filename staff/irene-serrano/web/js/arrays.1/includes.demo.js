console.log('DEMO includes')

// DEMO 1

var array = ['hola', 'mundo']
var result = includes(array, 'hola')
console.log(result) // true

// DEMO 2

var array = ['adios', 'mundo', 'cruel']
var result = includes(array, 'hola')
console.log(result) // false

// DEMO 3

var array = ['ant', 'bison', 'camel', 'duck', 'bison']
var result = includes(array, 'duck')
console.log(result) // true