console.log("TEST index-of")
console.log("case 1")

var array = ['adios', 'mundo', 'cruel']
var res = indexOf(array, 'cruel')

if (typeof res === "number"
    && res === 2)
    console.log ("ok")
else 
    console.log ("ko")

    
console.log("case 2")

var array = ['adios', 'mundo', 'cruel']
var res = indexOf(array, 'cruel')

if (typeof res === "number"
    && res === 2)
    console.log ("ok")
else 
    console.log ("ko")

console.log("case 3")
var array = ['un', 'nuevo', 'caso']
var res = indexOf(array, 'cruel')


if (typeof res === "number"
    && res == -1)
    console.log ("ok")
else 
    console.log ("ko")