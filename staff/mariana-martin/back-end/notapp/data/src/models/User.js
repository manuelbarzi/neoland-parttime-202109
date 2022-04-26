// traigo la herramienta model de la caja mongoose
// importo mi esque se user, de la carpeta eschemas

//'User' es el nombre de la colección/modelo y user es el esquema

const { model } = require('mongoose')
const { user } = require('../schemas')

const User = model('User', user)

module.exports = User