const fs = require('fs').promises

const { readFile, readdir } = fs


readdir('.')  //lee en este directorio
    .then(files => {

        console.log(files)

       
       const txts =  files.filter(file => file.endsWith('.txt'))


        const reads = txts.map(txt => readFile(txt, 'utf8'))  //utf8, especificar que es formato de lectura de texto, si no lo lee como bytes
                                
        return Promise.all(reads)

    })
    .then (races => races.reduce((stats, race) => {
        
        const lines = race.split('\n')


                        
        stats['🚗'].avg += lines[0].length / races.length   
        stats['🚙'].avg += lines[1].length / races.length
        stats['🏎'].avg += lines[2].length / races.length

        const last = lines[lines.length -1]

        if(last.includes('🚗'))
        stats['🚗'].wins++

        if(last.includes('🚙'))
        stats['🚙'].wins++

        if(last.includes('🏎'))
        stats['🏎'].wins++
        
        //stats[car]++   //accedo a la propiedd del objeto y sumo

        //este obj es el acumulador
        return stats  //el reduce regresa el acumulador actualizado
   
    }, { '🚗' : { wins: 0, avg: 0 },  //objeto que referencia 2 numericos        
         '🚙' :{ wins: 0, avg: 0 }, 
         '🏎': { wins: 0, avg: 0 } 
        }))

    .then(stats => console.log(stats))
    .catch(console.error)



    