console.log('------------------------ TEST reverse')

console.log('case 1')

var array = [1, 2, 3, 4]
var res = reverse(array)

if (res instanceof Array
    && res.length === array.length
    && res === array
    && res[0] === 4 
    && res[1] === 3
    && res[2] === 2
    && res[3] === 1)
    console.log('test ok')
else
    console.error('test ko')
