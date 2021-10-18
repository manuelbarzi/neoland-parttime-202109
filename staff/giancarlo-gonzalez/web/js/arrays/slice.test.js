console.log('TEST slice')

console.log('case 1')

var array = ['ant', 'bison', 'camel', 'duck','elephant']
var res = slice(array,2)

if (res instanceof Array
    && res.length === 3
    && array.length === 5
    && res[0] === 'camel'
    && res[1] === 'duck'
    && res[2] === 'elephant')
   
    console.log('✅ 😉')
else
    console.error('❌ 🤡')


console.log('case 2')

var array = ['ant', 'bison', 'camel', 'duck','elephant']
var res = slice(array,2,4)

if (res instanceof Array
    && res.length === 2
    && array.length === 5
    && res[0] === 'camel'
    && res[1] === 'duck')
   
    console.log('✅ 😉')
else
    console.error('❌ 🤡')


console.log('case 3')

var array = ['ant', 'bison', 'camel', 'duck','elephant']
var res = slice(array,1,5)

if (res instanceof Array
    && res.length === 4
    && array.length === 5
    && res[0] === 'bison'
    && res[1] === 'camel'
    && res[2] === 'duck'
    && res[3] === 'elephant')
   
    console.log('✅ 😉')
else
    console.error('❌ 🤡')


    console.log('case 4')

var array = ['ant', 'bison', 'camel', 'duck','elephant']
var res = slice(array,-2)

if (res instanceof Array
    && res.length === 2
    && array.length === 5
    && res[0] === 'duck'
    && res[1] === 'elephant')
   
    console.log('✅ 😉')
else
    console.error('❌ 🤡')

    console.log('case 5')

var array = ['ant', 'bison', 'camel', 'duck','elephant']
var res = slice(array,2,-1)

if (res instanceof Array
    && res.length === 2
    && array.length === 5
    && res[0] === 'camel'
    && res[1] === 'duck')
   
    console.log('✅ 😉')
else
    console.error('❌ 🤡')
