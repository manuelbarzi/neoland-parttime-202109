console.log('TEST reverse')

console.log('case 1')

var array = new Chachay(1, 2, 3, 4, 5)
var reverted = array.reverse()

if (reverted instanceof Array
    && reverted.length === 5
    && reverted[0] === 5
    && reverted[1] === 4
    && reverted[2] === 3
    && reverted[3] === 2
    && reverted[4] === 1)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')


console.log('case 2')

var array = new Chachay('a', 'b', 'c')
var reverted = array.reverse()

if (reverted instanceof Array
    && reverted.length === 3
    && reverted[0] === "c"
    && reverted[1] === "b"
    && reverted[2] === "a")
    console.log('✅ 😉')
else
    console.error('❌ 🤡')


console.log('case 3')

var noEmpty =[1,2,3]
var array = new Chachay('a', 1, true, null, undefined, noEmpty)
var reverted = array.reverse()

if (reverted instanceof Array
    && reverted.length === 6
    && reverted[0] === noEmpty
    && reverted[1] === undefined
    && reverted[2] === null
    && reverted[3] === true
    && reverted[4] === 1
    && reverted[5] === 'a')
    console.log('✅ 😉')
else
    console.error('❌ 🤡')