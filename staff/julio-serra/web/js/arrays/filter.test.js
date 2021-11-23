console.log ('Test fill')

console.log ("Case 1")

var elements = [1, 2, 3, 4]
var res = fill(elements, 4)
if (res instanceof Array
    && res.length === 4
    && res [0] === 4
    && res [1] === 4
    && res [2] === 4
    && res [3] === 4
    && res === elements)
    console.log('TEST OK')
else
    console.error('Dolor Terrible')
console.log(res)



console.log ("Case 2")

var elements = [1, 2, 3, 4]
var res = fill(elements, 5, 1)
if (res instanceof Array
    && res.length === 4
    && res [0] === 1
    && res [1] === 5
    && res [2] === 5
    && res [3] === 5
    && res === elements)
    console.log('TEST OK')
else
    console.error('Dolor Terrible')
console.log(res)


console.log ("Case 3")

var elements = [1, 2, 3, 4]
var res = fill(elements, 0, 2, 4)
if (res instanceof Array
    && res.length === 4
    && res [0] === 1
    && res [1] === 2
    && res [2] === 0
    && res [3] === 0
    && res === elements)
    console.log('TEST OK')
else
    console.error('Dolor Terrible')
console.log(res)


console.log ("Case 4")

var elements = [1, 2, 3, 4]
var res = fill(elements, 0, 1, 2)
if (res instanceof Array
    && res.length === 4
    && res [0] === 1
    && res [1] === 0
    && res [2] === 3
    && res [3] === 4
    && res === elements)
    console.log('TEST OK')
else
    console.error('Dolor Terrible')
console.log(res)


console.log ("Case 5")

var elements = [1, 2, 3, 4]
var res = fill(elements, 0, 1, -4)
if (res instanceof Array
    && res.length === 4
    && res [0] === 1
    && res [1] === 2
    && res [2] === 3
    && res [3] === 4
    && res === elements)
    console.log('TEST OK')
else
    console.error('Dolor Terrible')
console.log(res)


console.log ("Case 6")

var elements = [1, 2, 3, 4]
var res = fill(elements, 0, -2, 4)
if (res instanceof Array
    && res.length === 4
    && res [0] === 1
    && res [1] === 2
    && res [2] === 0
    && res [3] === 0
    && res === elements)
    console.log('TEST OK')
else
    console.error('Dolor Terrible')
console.log(res)


console.log ("Case 7")

var elements = [1, 2, 3, 4]
var res = fill(elements, 2, 'perro', 'gato')
if (res instanceof Array
    && res.length === 4
    && res [0] === 1
    && res [1] === 2
    && res [2] === 3
    && res [3] === 4
    && res === elements)
    console.log('TEST OK')
else
    console.error('Dolor Terrible')
console.log(res)



console.log ("Case 8")

var elements = [1, 2, 3, 4]
var res = fill(elements, 2, 'perro', 5)
if (res instanceof Array
    && res.length === 4
    && res [0] === 2
    && res [1] === 2
    && res [2] === 2
    && res [3] === 2
    && res === elements)
    console.log('TEST OK')
else
    console.error('Dolor Terrible')
console.log(res)


console.log ("Case 9")

var elements = [1, 2, 3, 4]
var res = fill(elements, 2, 3, 'gato')
if (res instanceof Array
    && res.length === 4
    && res [0] === 1
    && res [1] === 2
    && res [2] === 3
    && res [3] === 4
    && res === elements
    )
    console.log('TEST OK')
else
    console.error('Dolor Terrible')
console.log(res)


