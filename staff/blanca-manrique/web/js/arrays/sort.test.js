console.log("TEST sort")

console.log("Case 1")

var array = [1, 5, 2, 9]
var res = sort(array)
if (res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 5 
    && res[3] === 9
    && array.length === 4
    && array[0] === 1
    && array[1] === 2
    && array[2] === 5
    && array[3] === 9)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

// console.log("Case 2")

// var array = ['guindas', 'manzanas', 'bananas', 'mango']
// var res =(array)


// if (res instanceof Array
//     && res.length === 4
//     && res[0] === 'bananas'
//     && res[1] === 'guindas'
//     && res[2] === 'mango'
//     && res[3] === 'manzanas'
//     && array.length === 4
//     && array[0] === 'bananas'
//     && array[1] === 'guindas'
//     && array[2] === 'mango'
//     && array[3] === 'manzanas')
//     console.log('✅ 😉')
// else
//     console.error('❌ 🤡')