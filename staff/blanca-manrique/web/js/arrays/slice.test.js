console.log("TEST slice")

console.log("Case 1")

var array = [1, 2, 3, 4, 5]
var newArray = slice(array, 0, 3)

if (newArray instanceof Array
    && newArray.length === 3
    && newArray[0] === 1
    && newArray[1] === 2
    && newArray[2] === 3
    && array.length === 5
    && array[0] === 1
    && array[1] === 2
    && array[2] === 3
    && array[3] === 4
    && array[4] === 5)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

console.log("Case 2")

var array = ['a', 'b', 'c']
var newArray = slice(array, -2)

if (newArray instanceof Array
    && newArray.length === 2
    && newArray[0] === "b"
    && newArray[1] === "c"
    && array.length === 3
    && array[0] === "a"
    && array[1] === "b"
    && array[2] === "c"
    )
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

console.log("Case 3")

var array = ['a', 'b', 'c', 'd', 'e', 'f']
var newArray = slice(array, 3, -1)

if (newArray instanceof Array
    && newArray.length === 2
    && newArray[0] === "d"
    && newArray[1] === "e"
    && array.length === 6
    && array[0] === "a"
    && array[1] === "b"
    && array[2] === "c"
    && array[3] === "d"
    && array[4] === "e"
    && array[5] === "f")
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

console.log("Case 4")

var array = ['a', 'b', 'c', 'd', 'e', 'f']
var newArray = slice(array, 3)

if (newArray instanceof Array
    && newArray.length === 3
    && newArray[0] === "d"
    && newArray[1] === "e"
    && newArray[2] === "f"
    && array.length === 6
    && array[0] === "a"
    && array[1] === "b"
    && array[2] === "c"
    && array[3] === "d"
    && array[4] === "e"
    && array[5] === "f"
    )
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

console.log("Case 5")

var array = [1, 2, 3, 4, 5]
var newArray = slice(array, 1, 7)

if (newArray instanceof Array
    && newArray.length === 4
    && newArray[0] === 2
    && newArray[1] === 3
    && newArray[2] === 4
    && newArray[3] === 5
    && array.length === 5
    && array[0] === 1
    && array[1] === 2
    && array[2] === 3
    && array[3] === 4
    && array[4] === 5)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')