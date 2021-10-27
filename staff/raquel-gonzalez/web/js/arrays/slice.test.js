console.log("TEST slice")
console.log("case 1")

var array = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(array, 2)

if (res instanceof Array
    && res.length === 3
    && res[0] === "camel"
    && res[1] === "duck"
    && res[2] === "elephant"
    && array.length === 5
    && array[0] === "ant"
    && array[1] === "bison"
    && array[2] === "camel"
    && array[3] === "duck"
    && array[4] === "elephant"

)
    console.log("ok")
else
    console.log("ko")