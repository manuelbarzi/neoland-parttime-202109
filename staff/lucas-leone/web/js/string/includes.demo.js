console.log('DEMO includes')

// DEMO 1

var string = 'hola mundo'
var result = includes(string, 'hola')
console.log(result) // true

// DEMO 2

var string = 'adios mundo cruel'
var result = includes(string, 'hola')
console.log(result) // false

// DEMO 3

var string = 'ant bison camel duck bison'
var result = includes(string, 'duck')
console.log(result) // true