console.log('TEST join')

console.log('case 1')

var elements = ['Fire', 'Air', 'Water', 'Ground', 'Ether']
var res = join(elements)

if (typeof res == 'string'
    && res.length === 27
    && res === 'Fire,Air,Water,Ground,Ether'
    && elements.length === 5
    && elements[0] === 'Fire'
    && elements[1] === 'Air'
    && elements[2] === 'Water'
    && elements[3] === 'Ground'
    && elements[4] === 'Ether')
    console.log('✅ 😉')
else
    console.error('❌ 🤡')
