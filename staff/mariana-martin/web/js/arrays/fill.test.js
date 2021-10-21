console.log('TEST fill ARRAY')

console.log('case 1')

var array1 = [1, 2, 3, 4];
var res = fill(array1, 6)


if ( res instanceof Array
    && res.length === 4
    && res[0] === 6
    && res[1] === 6
    && res[2] === 6
    && res[3] === 6
    && array1.length === 4
    && array1[0] === 6
    && array1[1] === 6
    && array1[2] === 6 
    && array1[3] === 6)

    console.log('✅ 😉')
    else
    console.error('❌ 🤡')

    console.log('case 2')

var array1 = [1, 2, 3, 4];
var res = fill(array1, 5, 1)


if ( res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 5
    && res[2] === 5
    && res[3] === 5
    && array1.length === 4
    && array1[0] === 1
    && array1[1] === 5
    && array1[2] === 5 
    && array1[3] === 5)

    console.log('✅ 😉')
    else
    console.error('❌ 🤡')


    console.log('case 3')

var array1 = [1, 2, 3, 4];
var res = fill(array1, 0, 2, 4)


if ( res instanceof Array
    && res.length === 4
    && res[0] === 1
    && res[1] === 2
    && res[2] === 0
    && res[3] === 0
    && array1.length === 4
    && array1[0] === 1
    && array1[1] === 2
    && array1[2] === 0 
    && array1[3] === 0)

    console.log('✅ 😉')
    else
    console.error('❌ 🤡')


    console.log('case 4')

var array1 = [1, 2, 3];
var res = fill(array1, 4, -3, -2)


if ( res instanceof Array
    && res.length === 3
    && res[0] === 4
    && res[1] === 2
    && res[2] === 3
    && array1.length === 3
    && array1[0] === 4
    && array1[1] === 2
    && array1[2] === 3)
    

    console.log('✅ 😉')
    else
    console.error('❌ 🤡')


    console.log('case 5')

var array1 = [1, 2, 3];
var res = fill(array1, 4, 'h', 'k')


if ( res instanceof Array
    && res.length === 3
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && array1.length === 3
    && array1[0] === 1
    && array1[1] === 2
    && array1[2] === 3)
    

    console.log('✅ 😉')
    else
    console.error('❌ 🤡')