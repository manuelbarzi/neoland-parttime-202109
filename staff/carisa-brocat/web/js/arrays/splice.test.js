console.log('TEST splice')

console.log('case 1')

var array = ['Jan', 'March', 'April', 'June']
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

console.log('case 2')

var array = ['Jan', 'Feb', 'March', 'April', 'June']
var res = splice(array, 4, 1, 'May')

if (res instanceof Array
    && res.length === 1
    && res[0] === 'June'
    && array.length === 5
    && array[0] === 'Jan'
    && array[1] === 'Feb'
    && array[2] === 'March'
    && array[3] === 'April'
    && array[4] === 'May')
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

console.log('case 3')

var array = ['Jan', 'Feb', 'March', 'April', 'June', 'July', 'August']
var res = splice(array, 2, 3, 'x')

if (res instanceof Array 
    && res.length === 3
    && res[0] === 'March'
    && res[1] === 'April'
    && res[2] === 'June'
    && array.length === 5
    && array[0] === 'Jan'
    && array[1] === 'Feb'
    && array[2] === 'x'
    && array[3] === 'July'
    && array[4] === 'August'
 ) console.log('✅ 😉')
else
    console.error('❌ 🤡')
