const fs = require('fs').promises

const { readFile, readdir } = fs

readdir('.')
    .then((files) => {
        const txts = files.filter(file => file.endsWith('.txt'))
        const reads = txts.map(txt => readFile(txt, 'utf8'))
        return Promise.all(reads)
    })
    //reduces((accum, race), 0): parámetro 1 --> función reductora, parámetro 2 --> valor inicial del acumulador
    //El acumulador es un objeto . Cada coche es un objeto con propiedades
    //En la función reductora tenemos que devolver el acumulador actualizado
    .then(races => races.reduce((stats, race) => {
        const lines = race.split('\n')

        stats['🚘'].avg += lines[0].length / races.length
        stats['🚖'].avg += lines[1].length / races.length
        stats['🚔'].avg += lines[2].length / races.length

        const last = lines[lines.length - 1] //4ª línea

        if (last.includes('🚘'))
            stats['🚘'].wins++

        if (last.includes('🚖'))
            stats['🚖'].wins++

        if (last.includes('🚔'))
            stats['🚔'].wins++

        return stats
    }, {
        '🚘': { wins: 0, avg: 0 },
        '🚖': { wins: 0, avg: 0 },
        '🚔': { wins: 0, avg: 0 }
    }))
    .then(stats => console.log(stats))
    .catch((error) => console.error(error))
