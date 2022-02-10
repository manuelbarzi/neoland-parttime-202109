const fs = require('fs').promises
const { readFile, readdir } = fs

readdir('.')
    .then(files => {
        // TODO filter txt files only
        // TODO read all files (Promise.all?) and reduce stats (TIP may reduce array's method work here)

        const textos = files.filter(file => file.endsWith('.txt')) // filtramos para mostrar solo los archivos terminados en .txt
        // guardar las promesas en un archivo
        const reads = textos.map(texto => readFile(texto, 'utf8')) // mapeamos los textos para leer su contenido y guardarlo en un promise.all
        return Promise.all(reads)

        console.log(files)
    })

    // reducir a un objeto las carreras
    // array de los contenidos (carreras) de los ficheros
    //arr.reduce(callback(acumulador, valorActual)

    .then(carreras => carreras.reduce((acum, carrera) => {
        const coche = carrera[carrera.length - 1]
        acum[coche]++

        return acum // devolver el acumulador actualizado
    }, { // propiedad: coche, estadistica: 0 (que empiece en cero carreras ganadas)
        '🚜': 0, 
        '🚓': 0, 
        '🛴': 0
    }))
    .then(acum => console.log(acum))
    .catch(console.error)

