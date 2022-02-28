
const { readFile, writeFile } = require('fs').promises
const path = require('path')


//READ
function loadDocsFromJson(jsonFile) {
    const file = path.join(__dirname, jsonFile)

    return readFile(file, 'utf8')
        .then(json => JSON.parse(json))
}

//WRITE
function saveDocsToJson(users, jsonFile) {
    const file = path.join(__dirname, jsonFile)
    
    const json = JSON.stringify(users, null, 4)

    return writeFile(file, json)
}
module.exports = {
    loadDocsFromJson,
    saveDocsToJson
}