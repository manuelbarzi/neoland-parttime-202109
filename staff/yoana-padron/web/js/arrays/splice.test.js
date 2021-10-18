console.log('TEST splice')

console.log('Caso 1')
var array = ['Jan', 'March', 'April', 'June'];
var res = splice(array, 1, 0, 'Feb')

if (res instanceof Array
    && res.length === 0
    && array.length === 5
    &&  array[0] === 'Jan'
    &&  array[1] === 'Feb'
    &&  array[2] === 'March'
    &&  array[3] === 'April'
    &&  array[4] === 'June')

console.log('Perfect')


else
    console.log('Dolor terrible')


console.log('Caso 2')

var array = ['Jan','Feb', 'March', 'April', 'June'];
var res = splice(array, 4, 1, 'May')

if (res instanceof Array
    && res.length === 1
    && res[0] === 'June'
    && array.length === 5
    &&  array[0] === 'Jan'
    &&  array[1] === 'Feb'
    &&  array[2] === 'March'
    &&  array[3] === 'April'
    &&  array[4] === 'May')

console.log('Perfect')

else
    console.log('Dolor terrible')

    console.log('case 3')

    var array = ['Jan', 'Feb', 'March', 'April', 'June', 'July', 'August']
    var res = splice(array, 2, 3, 'X')
    
    if (res instanceof Array
        && res.length === 3
        && res[0] === 'March'
        && res[1] === 'April'
        && res[2] === 'June'
        && array.length === 5
        && array[0] === 'Jan'
        && array[1] === 'Feb'
        && array[2] === 'X'
        && array[3] === 'July'
        && array[4] === 'August')
        console.log('✅ 😉')
    else
        console.error('❌ 🤡')
    
    console.log('case 4')
    
    var array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var res = splice(array, 3, 5, 'X')
    
    if (res instanceof Array
        && res.length === 5
        && res[0] === '3'
        && res[1] === '4'
        && res[2] === '5'
        && res[3] === '6'
        && res[4] === '7'
        && array.length === 6
        && array[0] === '0'
        && array[1] === '1'
        && array[2] === '2'
        && array[3] === 'X'
        && array[4] === '8'
        && array[5] === '9')
        console.log('✅ 😉')
    else
        console.error('❌ 🤡')
    
    console.log('case 5')
    
    var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    var res = splice(array, 4, 4, 'x')
    
    if (res instanceof Array
        && res.length === 4
        && res[0] === 'e'
        && res[1] === 'f'
        && res[2] === 'g'
        && res[3] === 'h'
        && array.length === 6
        && array[0] === 'a'
        && array[1] === 'b'
        && array[2] === 'c'
        && array[3] === 'd'
        && array[4] === 'x'
        && array[5] === 'i')
        console.log('✅ 😉')
    else
        console.error('❌ 🤡')