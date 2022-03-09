//importo la herramienta model de mongoose
// traigo de schemas el schema note


const { model } = require('mongoose')
const { note } = require('../schemas')

const Note = model('Note', note)

module.exports = Note
