console.log('--- TEST INCLUDES ---')

console.log('CASE 1')

var string = 'hola mundo'
var result = includes(string, 'hola')

if(typeof result === "boolean" &&
result === true)
console.log("✅");
else console.error("🖕");



console.log(result) // true

console.log('CASE 2')

var string = 'adios mundo cruel'
var result = includes(string, 'hola')
console.log(result) // false

console.log('CASE 3')

var string = 'ant bison camel duck bison'
var result = includes(string, 'duck')
console.log(result) // true