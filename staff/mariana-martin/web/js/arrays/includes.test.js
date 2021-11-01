console.log('------------------------ TEST includes ARRAY')

console.log('case 1')

var array1 = [1, 2, 3];
var res = includes(array1, 2)

if (typeof res === 'boolean'
    && res === true)
    console.log('test ok')
else
    console.error('test ko')



    console.log('case 2')

var pets = ['cat', 'dog', 'bat']
var res = includes(pets, 'cat')

if (typeof res === 'boolean'
    && res === true)
    console.log('test ok')
else
    console.error('test ko')


    
    console.log('case 3')

    var pets = ['cat', 'dog', 'bat']
    var res = includes(pets, 'at')
    
    if (typeof res === 'boolean'
        && res === false)
        console.log('test ok')
    else
        console.error('test ko')