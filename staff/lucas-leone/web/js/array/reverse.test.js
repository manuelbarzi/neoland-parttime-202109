console.log('TEST reverse')

console.log('case 1')

var array = [1, 2, 3, 4, 5]
var reverted = reverse(array)

if (reverted instanceof Array
    && reverted.length === 5
    && reverted[0] === 5
    && reverted[1] === 4
    && reverted[2] === 3
    && reverted[3] === 2
    && reverted[4] === 1){
    console.log('✅ 😉')}
else
    console.error('❌ 🤡')


    //[5, 4, 3, 2, 1]