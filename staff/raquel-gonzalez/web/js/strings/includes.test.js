console.log ("TEST includes")
console.log ("DEMO 1")

var string = 'hola mundo'
var res = includes(string, 'hola')

if (typeof res === "boolean"
    && res === true)
    console.log ("test ok")
else 
    console.log ("test ko")