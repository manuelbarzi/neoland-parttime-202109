console.log('TEST filter')

console.log('caso 1')

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
var indexes = []
var arrays = []

var result = filter(words, function (value, index, array) {
    indexes[indexes.length] = index
    arrays[arrays.length] = array

    if (value.length > 6)

        return value
})

if (result instanceof Array
    && result.length === 3
    && result[0] === 'exuberant'
    && result[1] === 'destruction'
    && result[2] === 'present'
    && words.length === 6
    && words[0] === 'spray'
    && words[1] === 'limit'
    && words[2] === 'elite'
    && words[3] === 'exuberant'
    && words[4] === 'destruction'
    && words[5] === 'present'
    && arrays.length === 6
    && arrays[0] === words
    && arrays[1] === words
    && arrays[2] === words
    && arrays[3] === words
    && arrays[4] === words
    && arrays[5] === words
    && indexes.length === 6
    && indexes[0] === 0
    && indexes[1] === 1
    && indexes[2] === 2
    && indexes[3] === 3
    && indexes[4] === 4
    && indexes[5] === 5)
    console.log('test ok')
else
    console.error('test ko')


console.log('caso 2')

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
var indexes = []
var arrays = []

var result = filter(words, function (value, index, array) {
    indexes[indexes.length] = index
    arrays[arrays.length] = array

    if (value.length > 20)

        return value
})

if (result instanceof Array
    && result.length === 0
    && words.length === 6
    && words[0] === 'spray'
    && words[1] === 'limit'
    && words[2] === 'elite'
    && words[3] === 'exuberant'
    && words[4] === 'destruction'
    && words[5] === 'present'
    && arrays.length === 6
    && arrays[0] === words
    && arrays[1] === words
    && arrays[2] === words
    && arrays[3] === words
    && arrays[4] === words
    && arrays[5] === words
    && indexes.length === 6
    && indexes[0] === 0
    && indexes[1] === 1
    && indexes[2] === 2
    && indexes[3] === 3
    && indexes[4] === 4
    && indexes[5] === 5)
    console.log('test ok')
else
    console.error('test ko')