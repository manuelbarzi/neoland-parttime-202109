console.log("TEST split")

console.log("Case 1")

var string = 'hola mundo'
var res = split(string, " ")
if (res instanceof Array
    && res.length === 2
    && res[0] === 'hola'
    && res[1] === 'mundo')
    console.log('✅ 😉')
else
    console.error('❌ 🤡')