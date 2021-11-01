console.log('------------------------ TEST lastIndexOf ARRAY')

console.log('case 1')

var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
var res = lastIndexOf(animals, 'Dodo')

if (typeof res === 'number'
    && res === 3)
    console.log('✅ 😉')
    else
    console.error('❌ 🤡')