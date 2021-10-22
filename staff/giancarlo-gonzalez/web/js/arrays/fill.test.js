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
    && elements.length === 4
    && elements [0] === 1
    && elements [1] === 2
    && elements [2] === 3
    && elements [3] === 4
    )
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
    && elements.length === 4
    && elements [0] === 1
    && elements [1] === 2
    && elements [2] === 3
    && elements [3] === 4
    )
    console.log('TEST OK')
else
    console.error('Dolor Terrible')
console.log(res)

console.log ("Case 3")
var elements = [1, 2, 3, 4]
var res = fill(elements, 0, 1, 2)
if (res instanceof Array
    && res.length === 4
    && res [0] === 1
    && res [1] === 0
    && res [2] === 0
    && res [3] === 4
    && elements.length === 4
    && elements [0] === 1
    && elements [1] === 2
    && elements [2] === 3
    && elements [3] === 4
    )
    console.log('TEST OK')
else
    console.error('Dolor Terrible')
console.log(res)

console.log ("Case 4")
var elements = [1, 2, 3, 4]
var res = fill(elements, 0, 2, 4)
if (res instanceof Array
    && res.length === 4
    && res [0] === 1
    && res [1] === 2
    && res [2] === 0
    && res [3] === 0
    && elements.length === 4
    && elements [0] === 1
    && elements [1] === 2
    && elements [2] === 3
    && elements [3] === 4
    )
    console.log('TEST OK')
else
    console.error('Dolor Terrible')
console.log(res)

console.log ("Case 5")
var elements = [1, 2, 3, 4]
var res = fill(elements, 0, 2, 4)
if (res instanceof Array
    && res.length === 4
    && res [0] === 1
    && res [1] === 2
    && res [2] === 0
    && res [3] === 0
    && elements.length === 4
    && elements [0] === 1
    && elements [1] === 2
    && elements [2] === 3
    && elements [3] === 4
    )
    console.log('TEST OK')
else
    console.error('Dolor Terrible')
console.log(res)