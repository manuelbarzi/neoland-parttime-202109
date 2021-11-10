console.log(' --- TEST INCLUDES ---')

console.log('CASE 1')

var array = ['hola', 'mundo']
var result = includes(array, 'hola')

if(typeof result === "boolean" &&
result === true &&
array[0] === 'hola' &&
array[1] === 'mundo')
console.log("✅");
else console.error("🖕");

console.log('CASE 2')

var array = ['adios', 'mundo', 'cruel']
var result = includes(array, 'hola')

if(typeof result === "boolean" &&
result === false &&
array[0] === 'adios' && 
array[1] === 'mundo' &&
array[2] === 'cruel')
console.log("✅");
else console.error("🖕");

console.log('CASE 3')

var array = ['ant', 'bison', 'camel', 'duck', 'bison']
var result = includes(array, 'duck')

if(typeof result === "boolean" &&
result === true &&
array[0] === 'ant' &&
array[1] === 'bison' &&
array[2] === 'camel' &&
array[3] === 'duck' &&
array[4] === 'bison')
console.log("✅");
else console.error("🖕");