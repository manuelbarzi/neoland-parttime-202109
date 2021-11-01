console.log('------------------------ TEST indexOf ARRAY')

console.log('case 1')

var array = ['Jan', 'March', 'April', 'June', 'July', 'August']
var res = indexOf(array, 'April')

if (typeof res === 'number'
    && res === 2)
    console.log('✅ 😉')
    else
    console.error('❌ 🤡')

    console.log('case 2')

var array = ['Pan', 'Tacos', 'Pizza', 'Jamón', 'Dona', 'Hamburguesa', 'Ensalada', 'Yogurt']
var res = indexOf(array, 'Ensalada', 3)

if (typeof res === 'number'
    && res === 6)
    console.log('✅ 😉')
    else
    console.error('❌ 🤡')

    console.log('case 3')

    var array = ['Pan', 'Tacos', 'Pizza', 'Jamón', 'Dona', 'Hamburguesa', 'Ensalada', 'Yogurt']
    var res = indexOf(array, 'Pasta')
    
    if (typeof res === 'number'
        && res === -1)
        console.log('✅ 😉')
        else
        console.error('❌ 🤡')