console.log("TEST includes")
console.log("case 1")

var array = ['hola', 'mundo']
var res = includes(array, 'hola')

console.log(typeof res === 'boolean')
console.log( res === true)  

if ( typeof res === "boolean"
    && res === true)
    console.log ("ok")
else
    console.log ("ko")

    console.log("case 2")
    
    var array = ['adios', 'mundo', 'cruel']
    var res = includes(array, 'hola')

    if ( typeof res === "boolean"
    && res === false)
    console.log ("ok")
    else
    console.log ("ko")