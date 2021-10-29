describe('push')
describe('caso 1')

array = ['perro', 'gato', 'amor']


res = push(array, 'muleta', 'zorra')


if (res === 5
    && array[0] === 'perro'
    && array[1] === 'gato'
    && array[2] === 'amor'
    && array[3] === 'muleta'
    && array[4] === 'zorra'

) {

    success('genio de la vida')
} else
    fail(' no me soprende otro fracaso')