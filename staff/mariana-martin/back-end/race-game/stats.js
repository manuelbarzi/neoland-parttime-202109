const fs = require('fs').promises

const { readFile, readdir } = fs

//tenemos arrays de puros strings (los .txt de los resultados)
readdir('.')  //lee en este directorio
    .then(files => {

        console.log(files)

        //método startWith, endWith, te dice si true or false, si empieza o acaba con esas letras
       const txts=  files.filter(file => file.endsWith('.txt'))

        // console.log(txts)  //impirmirá todos los txts

        //ahora queremos leer el contenido de los txts:

        const reads = txts.map(txt => readFile(txt, 'utf8'))  //utf8, especificar que es formato de lectura de texto, si no lo lee como bytes
                                //aquí estamos mapeando cada texto a un readFile, al final tendremos resultados que son promesas
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



    