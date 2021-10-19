console.log("TEST slice")

console.log("Case 1")

var array = [1, 2, 3, 4, 5]
var newArray = slice(array, 0, 3)

if (newArray instanceof Array
    && newArray.length === 3
    && array.length === 5
    && newArray[0] === 1
    && newArray[1] === 2
    && newArray[2] === 3)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

console.log("Case 2")

var array = ['a', 'b', 'c']
var newArray = slice(array, -2)

if (newArray instanceof Array
    && newArray.length === 2
    && array.length === 3
    && newArray[0] === "b"
    && newArray[1] === "c")
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

console.log("Case 3")

var array = ['a', 'b', 'c', 'd', 'e', 'f']
var newArray = slice(array, 3, -1)

if (newArray instanceof Array
    && newArray.length === 2
    && array.length === 6
    && newArray[0] === "d"
    && newArray[1] === "e")
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

console.log("Case 4")

var array = ['a', 'b', 'c', 'd', 'e', 'f']
var newArray = slice(array, 3)

if (newArray instanceof Array
    && newArray.length === 3
    && array.length === 6
    && newArray[0] === "d"
    && newArray[1] === "e"
    && newArray[2] === "f")
    console.log('✅ 😉')
else
    console.error('❌ 🤡')