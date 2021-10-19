console.log('TEST slice')

console.log('case 1')

var array = ['elephant', 'ant', 'duck', 'fish']
var res = splice(array, 1, 0, 'Feb')

if (res instanceof Array
    && res.length === 0
    && array.length === 5
    && array[0] === 'Jan'
    && array[1] === 'Feb'
    && array[2] === 'March'
    && array[3] === 'April'
    && array[4] === 'June')
    console.log('✅ 😉')
else
    console.error('❌ 🤡')