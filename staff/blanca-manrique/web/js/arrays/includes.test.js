console.log('TEST includes')

console.log('case 1')

var array = ['cat', 'dog', 'bat'];
var result = includes(array, 'at')

if (result instanceof Array
    && result.length === 1
    && result[0] === false)
    console.log('✅ 😉')
else
    console.error('❌ 🤡')