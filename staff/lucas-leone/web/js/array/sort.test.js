console.log('TEST sort')

console.log('case 1')

var fruits = ['Jan', 'March', 'April', 'June']
var res = sort(array, 1)

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

console.log('case 2')