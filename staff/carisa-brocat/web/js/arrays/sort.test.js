console.log("Case 1")

var array = [3, 5, 2, 9]
var res = sort(array)

if (res instanceof Array
    && res.length === 4
    && res[0] === 2
    && res[1] === 3
    && res[2] === 5
    && res[3] === 9
    && array.length === 4
    && array[0] === 2
    && array[1] === 3
    && array[2] === 5
    && array[3] === 9)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

console.log("Case 2")

var array = [3, 5, 9, 2]
var res = sort(array)

if (res instanceof Array
    && res.length === 4
    && res[0] === 2
    && res[1] === 3
    && res[2] === 5
    && res[3] === 9
    && array.length === 4
    && array[0] === 2
    && array[1] === 3
    && array[2] === 5
    && array[3] === 9)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

console.log("Case 3")

var array = ['strawberry', 'avocad', 'apple', 'anana']
var res = sort(array)

if (res instanceof Array
    && res.length === 4
    && res[0] === array[0]
    && res[1] === array[1]
    && res[2] === array[2]
    && res[3] === array[3]
    && array.length === 4
    && array[0] === "anana"
    && array[1] === "apple"
    && array[2] === "avocad"
    && array[3] === "strawberry")
    console.log('✅ 😉')
else
    console.error('❌ 🤡')