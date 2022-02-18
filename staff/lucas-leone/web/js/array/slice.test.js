console.log('TEST slice')

console.log('case 1')

var array = [1, 2, 3, 4, 5]

var sliced = slice(array,7,3)
debugger
if (sliced instanceof Array
    && sliced.length === 3
    && sliced[0] === 2
    && sliced[1] === 3
    && sliced[2] === 4){
    console.log('✅ 😉')}
else
    console.error('❌ 🤡')

console.log(sliced)
