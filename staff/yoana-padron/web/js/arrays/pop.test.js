describe ('> POP')

describe ('Caso 1')

var array = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

var res = pop(array)

if( 
    array instanceof Array
    && res === 'tomato'
    && array.length === 4
    && array[0] === 'broccoli'
    && array[1] === 'cauliflower'
    && array[2] === 'cabbage'
    && array[3] === 'kale')

    success ('OK')

else
    fail('Dolor terrible')

    