const { readFile, writeFile } = require('fs').promises
const path = require('path')


// leo todos los usuarios
function loadDocsFromJson(jsonFile) {
    // al ser una cadena de promesas devolvemos un return 
    const file = path.join(__dirname, jsonFile) // que sea un parametro para ponerlas en un fichero aparte

    return readFile(file, 'utf8')
        // si va bien ".then"
        .then(json => JSON.parse(json)) // pasamos el json(array) a objeto
}

function saveDocsFromJson(users, jsonFile) {
    // al ser una cadena de promesas devolvemos un return
    const file = path.join(__dirname, jsonFile)
    const json = JSON.stringify(users, null, 4)

    return writeFile(file, json)
}

module.exports = {
    loadDocsFromJson,
    saveDocsFromJson
}