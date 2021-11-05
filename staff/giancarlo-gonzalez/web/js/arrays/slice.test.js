console.log('TEST Slice')

//CASO 1
console.log('Caso 1')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 2)

if (res instanceof Array
    && res.length === 3
    && res [0] === 'camel'
    && res [1] === 'duck'
    && res [2] === 'elephant'
    && animals.length === 5
    && animals [0] === 'ant'
    && animals [1] === 'bison'
    && animals [2] === 'camel'
    && animals [3] === 'duck'
    && animals [4] === 'elephant')
        console.log ('test ok')
else
    console.error('test ko')
console.log(res)

//CASO 2
console.log('Caso 2')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 2, 4)

if (res instanceof Array
    && res.length === 2
    && res [0] === 'camel'
    && res [1] === 'duck'
    && animals.length === 5
    && animals [0] === 'ant'
    && animals [1] === 'bison'
    && animals [2] === 'camel'
    && animals [3] === 'duck'
    && animals [4] === 'elephant')
        console.log ('test ok')
else
    console.error('test ko')

    
//CASO 3
console.log('Caso 3')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 1, 7)

if (res instanceof Array
    && res.length === 4
    && res [0] === 'bison'
    && res [1] === 'camel'
    && res [2] === 'duck'
    && res [3] === 'elephant'
    && animals.length === 5
    && animals [0] === 'ant'
    && animals [1] === 'bison'
    && animals [2] === 'camel'
    && animals [3] === 'duck'
    && animals [4] === 'elephant')
        console.log ('test ok')
else
    console.error('test ko')
console.log(res)

//CASO 4
console.log('Caso 4')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 2, 0)

if (res instanceof Array
    && res.length === 0
    && animals.length === 5
    && animals [0] === 'ant'
    && animals [1] === 'bison'
    && animals [2] === 'camel'
    && animals [3] === 'duck'
    && animals [4] === 'elephant')
        console.log ('test ok')
else
    console.error('test ko')


//CASO 5
console.log('Case 5')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, -2)

if (res instanceof Array
    && res.length === 2
    && res [0] === 'duck'
    && res [1] === 'elephant'
    && animals.length === 5
    && animals [0] === 'ant'
    && animals [1] === 'bison'
    && animals [2] === 'camel'
    && animals [3] === 'duck'
    && animals [4] === 'elephant')
    
        console.log ('test ok')
else
    console.error('test ko')
console.log(res)


//CASO 6
console.log('Caso 6')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, -100)

if (res instanceof Array
    && res.length === 5
    && res [0] === 'ant'
    && res [1] === 'bison'
    && res [2] === 'camel'
    && res [3] === 'duck'
    && res [4] === 'elephant'
    && animals.length === 5
    && animals [0] === 'ant'
    && animals [1] === 'bison'
    && animals [2] === 'camel'
    && animals [3] === 'duck'
    && animals [4] === 'elephant')
        console.log ('test ok')
else
    console.error('test ko')
console.log(res)

//CASO 7
console.log('Caso 7')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 2, -1)

if (res instanceof Array
    && res.length === 2
    && res [0] === 'camel'
    && res [1] === 'duck'
    && animals.length === 5
    && animals [0] === 'ant'
    && animals [1] === 'bison'
    && animals [2] === 'camel'
    && animals [3] === 'duck'
    && animals [4] === 'elephant')
        console.log ('test ok')
else
    console.error('test ko')
console.log(res)



//CASO 8
console.log('Caso 8')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
var res = slice(animals, 2, -100)

if (res instanceof Array
    && res.length === 0
    && animals.length === 5
    && animals [0] === 'ant'
    && animals [1] === 'bison'
    && animals [2] === 'camel'
    && animals [3] === 'duck'
    && animals [4] === 'elephant')
        console.log ('test ok')
else
    console.error('test ko')

    console.log(res)