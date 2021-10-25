console.log("TEST fill")

console.log("Case 1")

var array = [1, 2, 3, 4]
var res = fill(array, 6)

if (res instanceof Array
    && res.length === 4
    && res[0] === 6
    && res[1] === 6
    && res[2] === 6
    && res[3] === 6
    && array.length === 4
    && array[0] === 6
    && array[1] === 6
    && array[2] === 6
    && array[3] === 6)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

// console.log("Case 2")

// var array = [1, 2, 3, 4]
// var res = fill(array, 5, 1)

// if (res instanceof Array
//     && res.length === 4
//     && res[0] === 1
//     && res[1] === 5
//     && res[2] === 5
//     && res[3] === 5
//     && array.length === 4
//     && array[0] === 1
//     && array[1] === 5
//     && array[2] === 5
//     && array[3] === 5)
//     console.log('✅ 😉')
// else
//     console.error('❌ 🤡')

// console.log("Case 3")

// var array = [1, 2, 3, 4]
// var res = fill(array, 0, 2, 4)

// if (res instanceof Array
//     && res.length === 4
//     && res[0] === 1
//     && res[1] === 2
//     && res[2] === 0
//     && res[3] === 0
//     && array.length === 4
//     && array[0] === 1
//     && array[1] === 2
//     && array[2] === 0
//     && array[3] === 0)
//     console.log('✅ 😉')
// else
//     console.error('❌ 🤡')

// console.log("Case 4")

// var array = [1, 2, 3, 4]
// var res = fill(array, 4, -3, -2)

// if (res instanceof Array
//     && res.length === 4
//     && res[0] === 1
//     && res[1] === 4
//     && res[2] === 3
//     && res[3] === 4
//     && array.length === 4
//     && array[0] === 1
//     && array[1] === 4
//     && array[2] === 3
//     && array[3] === 4)
//     console.log('✅ 😉')
// else
//     console.error('❌ 🤡')

// console.log("Case 5")

// var array = [1, 2, 3]
// var res = fill(array, 4, 'h', 'k')

// if (res instanceof Array
//     && res.length === 3
//     && res[0] === 1
//     && res[1] === 2
//     && res[2] === 3
//     && array.length === 3
//     && array[0] === 1
//     && array[1] === 2
//     && array[2] === 3)
//     console.log('✅ 😉')
// else
//     console.error('❌ 🤡')

// console.log("Case 6")

// var array = [1, 2, 3]
// var res = fill(array, 0, 'f', 2)

// if (res instanceof Array
//     && res.length === 3
//     && res[0] === 0
//     && res[1] === 0
//     && res[2] === 3
//     && array.length === 3
//     && array[0] === 0
//     && array[1] === 0
//     && array[2] === 3)
//     console.log('✅ 😉')
// else
//     console.error('❌ 🤡')

// console.log("Case 7")

// var array = [1, 2, 3]
// var res = fill(array, 0, 1, 's')

// if (res instanceof Array
//     && res.length === 3
//     && res[0] === 1
//     && res[1] === 2
//     && res[2] === 3
//     && array.length === 3
//     && array[0] === 1
//     && array[1] === 2
//     && array[2] === 3)
//     console.log('✅ 😉')
// else
//     console.error('❌ 🤡')