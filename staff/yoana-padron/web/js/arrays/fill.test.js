console.log ('TEST Fill')

console.log ('Caso 1')

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