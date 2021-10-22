console.log('TEST join')

console.log('case 1')

var elements = ['Fire', 'Air', 'Water', 'Ground', 'Ether']
var res = join(elements)

if (typeof res === 'string'
    && res.length === 27
    && res === 'Fire,Air,Water,Ground,Ether'
    && elements.length === 5
    && elements[0] === 'Fire'
    && elements[1] === 'Air'
    && elements[2] === 'Water'
    && elements[3] === 'Ground'
    && elements[4] === 'Ether')
    console.log('test ok')
else
    console.error('test ko')

console.log('case 2')

var elements = ['Fire', 'Air', 'Water', 'Ground', 'Ether']
var res = join(elements, '')

if (typeof res === 'string'
    && res.length === 23
    && res === 'FireAirWaterGroundEther'
    && elements.length === 5
    && elements[0] === 'Fire'
    && elements[1] === 'Air'
    && elements[2] === 'Water'
    && elements[3] === 'Ground'
    && elements[4] === 'Ether')
    console.log('test ok')
else
    console.error('test ko')

console.log('case 3')

var elements = ['Fire', 'Air', 'Water', 'Ground', 'Ether']
var res = join(elements, '-')

if (typeof res === 'string'
    && res.length === 27
    && res === 'Fire-Air-Water-Ground-Ether'
    && elements.length === 5
    && elements[0] === 'Fire'
    && elements[1] === 'Air'
    && elements[2] === 'Water'
    && elements[3] === 'Ground'
    && elements[4] === 'Ether')
    console.log('test ok')
else
    console.error('test ko')

console.log('case 4')

var empty = []
var elements = ['', null, 'Fire', 'Air', 'Water', undefined, 'Ground', 'Ether', empty]
var res = join(elements)

if (typeof res === 'string'
    && res.length === 31
    && res === ',,Fire,Air,Water,,Ground,Ether,'
    && elements.length === 9
    && elements[0] === ''
    && elements[1] === null
    && elements[2] === 'Fire'
    && elements[3] === 'Air'
    && elements[4] === 'Water'
    && elements[5] === undefined
    && elements[6] === 'Ground'
    && elements[7] === 'Ether'
    && elements[8] === empty)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 5')

var empty = []
var elements = ['', null, 'Fire', 'Air', 'Water', undefined, 'Ground', 'Ether', empty]
var res = join(elements, '')

if (typeof res === 'string'
    && res.length === 23
    && res === 'FireAirWaterGroundEther'
    && elements.length === 9
    && elements[0] === ''
    && elements[1] === null
    && elements[2] === 'Fire'
    && elements[3] === 'Air'
    && elements[4] === 'Water'
    && elements[5] === undefined
    && elements[6] === 'Ground'
    && elements[7] === 'Ether'
    && elements[8] === empty)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 6')

var empty = []
var elements = ['', null, 'Fire', 'Air', 'Water', undefined, 'Ground', 'Ether', empty]
var res = join(elements, '-')

if (typeof res === 'string'
    && res.length === 31
    && res === '--Fire-Air-Water--Ground-Ether-'
    && elements.length === 9
    && elements[0] === ''
    && elements[1] === null
    && elements[2] === 'Fire'
    && elements[3] === 'Air'
    && elements[4] === 'Water'
    && elements[5] === undefined
    && elements[6] === 'Ground'
    && elements[7] === 'Ether'
    && elements[8] === empty)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 7')

var empty = []
var nonEmpty = [1, 2, 3]
var elements = ['', null, 'Fire', 'Air', 'Water', undefined, 'Ground', 'Ether', empty, nonEmpty]
var res = join(elements)

if (typeof res === 'string'
    && res.length === 37
    && res === ',,Fire,Air,Water,,Ground,Ether,,1,2,3'
    && elements.length === 10
    && elements[0] === ''
    && elements[1] === null
    && elements[2] === 'Fire'
    && elements[3] === 'Air'
    && elements[4] === 'Water'
    && elements[5] === undefined
    && elements[6] === 'Ground'
    && elements[7] === 'Ether'
    && elements[8] === empty
    && elements[9] === nonEmpty)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 8')

var empty = []
var nonEmpty = [1, 2, 3]
var elements = ['', null, 'Fire', 'Air', 'Water', undefined, 'Ground', 'Ether', empty, nonEmpty]
var res = join(elements, '')

if (typeof res === 'string'
    && res.length === 28
    && res === 'FireAirWaterGroundEther1,2,3'
    && elements.length === 10
    && elements[0] === ''
    && elements[1] === null
    && elements[2] === 'Fire'
    && elements[3] === 'Air'
    && elements[4] === 'Water'
    && elements[5] === undefined
    && elements[6] === 'Ground'
    && elements[7] === 'Ether'
    && elements[8] === empty
    && elements[9] === nonEmpty)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 9')

var empty = []
var nonEmpty = [1, 2, 3]
var elements = ['', null, 'Fire', 'Air', 'Water', undefined, 'Ground', 'Ether', empty, nonEmpty]
var res = join(elements, '-')

if (typeof res === 'string'
    && res.length === 37
    && res === '--Fire-Air-Water--Ground-Ether--1,2,3'
    && elements.length === 10
    && elements[0] === ''
    && elements[1] === null
    && elements[2] === 'Fire'
    && elements[3] === 'Air'
    && elements[4] === 'Water'
    && elements[5] === undefined
    && elements[6] === 'Ground'
    && elements[7] === 'Ether'
    && elements[8] === empty
    && elements[9] === nonEmpty)
    console.log('test ok')
else
    console.error('test ko')

console.log('case 10')

var empty = []
var nonEmpty = [1, 2, 3]
var elements = ['', null, 'Fire', 'Air', 'Water', undefined, 'Ground', 'Ether', empty, nonEmpty, ' ', '\t', '\n']
var res = join(elements)

if (typeof res === 'string'
    && res.length === 43
    && res === ',,Fire,Air,Water,,Ground,Ether,,1,2,3, ,\t,\n'
    && elements.length === 13
    && elements[0] === ''
    && elements[1] === null
    && elements[2] === 'Fire'
    && elements[3] === 'Air'
    && elements[4] === 'Water'
    && elements[5] === undefined
    && elements[6] === 'Ground'
    && elements[7] === 'Ether'
    && elements[8] === empty
    && elements[9] === nonEmpty
    && elements[10] === ' '
    && elements[11] === '\t'
    && elements[12] === '\n')
    console.log('test ok')
else
    console.error('test ko')